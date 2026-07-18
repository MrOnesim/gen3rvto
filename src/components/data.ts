import type { ReactNode } from "react";
import { AppleMusicIcon, SpotifyIcon, YouTubeIcon } from "./brands";

export type Release = {
  title: string;
  date: string;
  tone: "silver" | "red" | "dark";
  status: string;
  spotify: string;
  apple: string;
  youtube?: string;
};

export const releases: Release[] = [
  {
    title: "FLIP FLAP",
    date: "SINGLE · 2026",
    tone: "red",
    status: "OUT NOW",
    spotify: "https://open.spotify.com/track/5JYxhuPatEgskofFAtAlPd",
    apple: "https://music.apple.com/bj/album/flip-flap/1895343964?i=6763499470&l=fr-FR",
    youtube: "https://youtu.be/Nqxhg-oOw7M",
  },
  {
    title: "KICHTA",
    date: "SINGLE · 2026",
    tone: "silver",
    status: "OUT NOW",
    spotify: "https://open.spotify.com/track/4VtpBu0OAx0ERx2KRQQ0kM",
    apple: "https://music.apple.com/bj/album/kichta/1863204089?i=1863204090&l=fr-FR",
    youtube: "https://youtu.be/LYl44nH3y4I",
  },
  {
    title: "JSL3KIP 1",
    date: "SINGLE · 2026",
    tone: "dark",
    status: "OUT NOW",
    spotify: "https://open.spotify.com/track/4avHOd6uLgXhNPy3Le9E8p",
    apple: "https://music.apple.com/bj/album/jamais-sans-l3kip-1-jsl3kip-1/1849673590?i=1849673594&l=fr-FR",
    youtube: "https://youtu.be/VY1FnTEN9z0",
  },
  {
    title: "VILLE AKA BOY",
    date: "AIFTÉ ft. GEN3RVTO",
    tone: "silver",
    status: "FEAT",
    spotify: "https://open.spotify.com/track/7zfveLBglN6cZJa44c790q",
    apple: "https://music.apple.com/bj/album/ville-aka-boy-feat-g3nervto/1839219739?i=1839219742&l=fr-FR",
  },
];

export const latestRelease = releases[0];

export const social = {
  spotify: "https://open.spotify.com/intl-fr/artist/0frrK6SVY9FkZhvaJYnHJU",
  apple: "https://music.apple.com/bj/artist/gen3rvto/1849757626?l=fr-FR",
  youtube: "https://www.youtube.com/@GEN3RVTO",
  whatsapp: "https://wa.me/22997257629",
  instagram: "https://www.instagram.com/gen3rvtofficial",
  tiktok: "https://www.tiktok.com/@gen3rvtoff",
  facebook: "https://www.facebook.com/share/1DricQWsoV/",
};

export type Video = { title: string; youtubeId: string };

export const videos: Video[] = [
  { title: "FLIP FLAP", youtubeId: "Nqxhg-oOw7M" },
  { title: "JSL3KIP 1", youtubeId: "VY1FnTEN9z0" },
  { title: "KICHTA", youtubeId: "LYl44nH3y4I" },
];

export const platformNames = [
  "Spotify",
  "Apple Music",
  "Deezer",
  "YouTube Music",
  "Boomplay",
  "Audiomack",
  "SoundCloud",
];

export const platformLinks: Record<string, string> = {
  Spotify: social.spotify,
  "Apple Music": social.apple,
  Deezer: "https://www.deezer.com/fr/artist/gen3rvto",
  "YouTube Music": social.youtube,
  Boomplay: "https://www.boomplay.com/search/gen3rvto",
  Audiomack: "https://audiomack.com/gen3rvto",
  SoundCloud: "https://soundcloud.com/gen3rvto",
  YouTube: social.youtube,
};

export type PlatformIcon = (props: { size?: number; className?: string }) => ReactNode;

export const platformIcons: Record<string, PlatformIcon> = {
  Spotify: SpotifyIcon,
  "Apple Music": AppleMusicIcon,
  Deezer: SpotifyIcon,
  "YouTube Music": YouTubeIcon,
  Boomplay: SpotifyIcon,
  Audiomack: SpotifyIcon,
  SoundCloud: SpotifyIcon,
  YouTube: YouTubeIcon,
};
