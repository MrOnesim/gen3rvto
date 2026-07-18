type IconProps = { size?: number; className?: string };

export function FacebookIcon({ size = 18, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M13.5 22v-8h2.7l.4-3.1h-3.1V8.9c0-.9.25-1.5 1.55-1.5H17V4.6c-.29-.04-1.27-.13-2.41-.13-2.39 0-4.03 1.46-4.03 4.14v2.31H7.8V14h2.76v8h2.94z" />
    </svg>
  );
}

export function TikTokIcon({ size = 18, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M16.6 5.82a4.28 4.28 0 0 1-1.05-2.82h-3.11v12.4a2.59 2.59 0 1 1-2.59-2.59c.27 0 .53.04.78.12v-3.2a5.8 5.8 0 0 0-.78-.05 5.79 5.79 0 1 0 5.79 5.79V9.01a7.35 7.35 0 0 0 4.29 1.37V7.27a4.28 4.28 0 0 1-3.33-1.45z" />
    </svg>
  );
}

export function InstagramIcon({ size = 18, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function SpotifyIcon({ size = 18, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm4.59 14.43a.62.62 0 0 1-.86.21c-2.35-1.44-5.3-1.76-8.79-.96a.62.62 0 1 1-.28-1.21c3.81-.87 7.08-.5 9.72 1.1.3.18.39.57.21.86zm1.23-2.74a.78.78 0 0 1-1.07.26c-2.69-1.65-6.79-2.13-9.97-1.17a.78.78 0 1 1-.45-1.49c3.63-1.1 8.15-.57 11.24 1.33.37.23.49.71.25 1.07zm.11-2.85C14.8 8.98 9.3 8.8 6.22 9.74a.93.93 0 1 1-.54-1.78c3.56-1.08 9.63-.87 13.39 1.35a.93.93 0 0 1-.94 1.6z" />
    </svg>
  );
}

export function AppleMusicIcon({ size = 18, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.6 3H6.4A3.4 3.4 0 0 0 3 6.4v11.2A3.4 3.4 0 0 0 6.4 21h11.2a3.4 3.4 0 0 0 3.4-3.4V6.4A3.4 3.4 0 0 0 17.6 3zm-1.1 4.9c0 2.1-1.6 3.8-4.6 3.8-2.6 0-4.3-1.2-4.3-3.1 0-1.6 1.3-2.6 3.4-3l-.2-1.4h1.5l.2 1.3c.8-.1 1.7-.3 2.3-.6l.5 1.4c-.8.4-1.8.7-2.9.8.9.2 1.2.8 1.2 1.6zm-5.3 9.2c-2 0-3.6-1.3-3.6-2.9 0-1.5 1.3-2.5 3.3-2.9v-.3c-.9-.3-1.3-1-1.3-1.9 0-1.2 1-2 2.5-2 .5 0 1 .1 1.4.3l.3-1.3h1.4l-.2 1.5c.6 0 1.1.2 1.5.4l-.4 1.4c-.5-.2-1.1-.3-1.7-.3-.7 0-1.1.3-1.1.7 0 .5.4.6 1.4.8 1.8.4 2.7 1.2 2.7 2.7 0 1.4-1.1 2.4-2.8 2.7v.3c.7.2 1.1.7 1.1 1.4 0 1-.8 1.7-2.2 1.7-.5 0-1-.1-1.4-.3l-.3 1.3H10l.2-1.5c-.6 0-1.1-.1-1.5-.4l.4-1.4c.5.2 1.1.3 1.7.3z" />
    </svg>
  );
}

export function YouTubeIcon({ size = 18, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8zM9.6 15.6V8.4l6.2 3.6-6.2 3.6z" />
    </svg>
  );
}
