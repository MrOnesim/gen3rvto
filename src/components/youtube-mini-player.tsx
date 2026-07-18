"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type YTPlayer = {
  loadVideoById: (id: string, startSeconds?: number) => void;
  playVideo: () => void;
  pauseVideo: () => void;
  mute: () => void;
  unMute: () => void;
  getCurrentTime: () => number;
  getDuration: () => number;
  seekTo: (s: number, a?: boolean) => void;
  destroy: () => void;
};

declare global {
  interface Window {
    YT?: any;
    onYouTubeIframeAPIReady?: () => void;
  }
}

let apiPromise: Promise<void> | null = null;
function loadYouTubeApi(): Promise<void> {
  if (typeof window === "undefined") return Promise.reject();
  if (window.YT && window.YT.Player) return Promise.resolve();
  if (apiPromise) return apiPromise;
  apiPromise = new Promise<void>((resolve) => {
    const prev = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      prev?.();
      resolve();
    };
    if (!document.getElementById("yt-iframe-api")) {
      const tag = document.createElement("script");
      tag.id = "yt-iframe-api";
      tag.src = "https://www.youtube.com/iframe_api";
      document.head.appendChild(tag);
    }
  });
  return apiPromise;
}

export function YouTubeMiniPlayer({ tracks }: { tracks: { id: string; title: string }[] }) {
  const hostRef = useRef<HTMLDivElement | null>(null);
  const playerRef = useRef<YTPlayer | null>(null);
  const [index, setIndex] = useState(0);
  const [ready, setReady] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const [progress, setProgress] = useState(0);

  const current = tracks[index];

  const loadTrack = useCallback(
    (i: number, autoplay = true) => {
      const p = playerRef.current as any;
      if (!p || typeof p.loadVideoById !== "function") return;
      const t = tracks[i];
      if (!t) return;
      p.loadVideoById(t.id, 0);
      if (autoplay) p.playVideo();
    },
    [tracks]
  );

  const next = useCallback(() => {
    const ni = (index + 1) % tracks.length;
    setIndex(ni);
    loadTrack(ni, true);
  }, [index, tracks.length, loadTrack]);

  useEffect(() => {
    let cancelled = false;
    loadYouTubeApi().then(() => {
      if (cancelled || !hostRef.current || !window.YT) return;
      const player = new window.YT.Player(hostRef.current, {
        videoId: current.id,
        playerVars: { autoplay: 1, mute: 1, controls: 0, modestbranding: 1, rel: 0, playsinline: 1 },
        events: {
          onReady: (e: any) => {
            e.target.mute();
            e.target.playVideo();
            setReady(true);
            setPlaying(true);
          },
          onStateChange: (e: any) => {
            const YT = window.YT;
            setPlaying(e.data === YT.PlayerState.PLAYING);
            if (e.data === YT.PlayerState.PLAYING) setMuted(e.target.isMuted?.() ?? true);
            if (e.data === YT.PlayerState.ENDED) next();
          },
        },
      });
      playerRef.current = player;
    });
    return () => {
      cancelled = true;
      try {
        playerRef.current?.destroy();
      } catch {}
      playerRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!ready) return;
    const id = setInterval(() => {
      const p = playerRef.current;
      if (!p) return;
      const d = p.getDuration();
      if (d > 0) setProgress(p.getCurrentTime() / d);
    }, 500);
    return () => clearInterval(id);
  }, [ready]);

  const togglePlay = () => {
    const p = playerRef.current as any;
    if (!p || typeof p.playVideo !== "function") return;
    if (playing) p.pauseVideo();
    else p.playVideo();
  };

  const toggleMute = () => {
    const p = playerRef.current as any;
    if (!p || typeof p.unMute !== "function") return;
    if (muted) {
      p.unMute();
      setMuted(false);
    } else {
      p.mute();
      setMuted(true);
    }
  };

  return (
    <div className="fixed z-30 left-0 right-0 bottom-0 md:left-auto md:right-4 md:bottom-4 md:w-[340px] bg-[#0b0b0b]/95 backdrop-blur-md border border-[#222] md:rounded-xl overflow-hidden">
      <div className="h-[3px] bg-[#1c1c1c]">
        <div className="h-full bg-brand transition-[width] duration-500" style={{ width: `${Math.min(100, progress * 100)}%` }} />
      </div>
      <div className="flex items-center gap-[10px] px-3 py-[10px]">
        <span className="shrink-0 w-[30px] h-[30px] rounded grid place-items-center bg-brand/15">
          <span className={`w-[8px] h-[8px] rounded-full bg-brand ${playing && !muted ? "animate-pulse" : ""}`} />
        </span>
        <div className="min-w-0 flex-1 leading-tight">
          <p className="text-[7px] tracking-[2px] text-brand uppercase">Now Playing · {index + 1}/{tracks.length}</p>
          <p className="text-[12px] text-white truncate">{current.title}</p>
        </div>

        <button onClick={togglePlay} aria-label={playing ? "Pause" : "Lecture"} className="shrink-0 w-9 h-9 grid place-items-center bg-white text-[#111] rounded-full hover:bg-brand hover:text-white transition-colors">
          {playing ? (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="5" width="4" height="14" rx="1" /><rect x="14" y="5" width="4" height="14" rx="1" /></svg>
          ) : (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
          )}
        </button>

        <button onClick={next} aria-label="Piste suivante" className="shrink-0 w-9 h-9 grid place-items-center border border-[#333] text-white rounded-full hover:border-brand hover:text-brand transition-colors">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M6 5l9 7-9 7V5z" /><rect x="16" y="5" width="3" height="14" rx="1" /></svg>
        </button>

        <button onClick={toggleMute} aria-label={muted ? "Activer le son" : "Couper le son"} className="shrink-0 w-9 h-9 grid place-items-center border border-[#333] text-white rounded-full hover:border-brand hover:text-brand transition-colors">
          {muted ? (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M4 9v6h4l5 5V4L8 9H4z" /><path d="M16 9l4 4M20 9l-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" /></svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M4 9v6h4l5 5V4L8 9H4z" /><path d="M16 8a4 4 0 0 1 0 8M18.5 5.5a8 8 0 0 1 0 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" /></svg>
          )}
        </button>
      </div>
      <div ref={hostRef} className="absolute w-0 h-0 overflow-hidden pointer-events-none opacity-0" aria-hidden="true" />
    </div>
  );
}
