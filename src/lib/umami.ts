export type UmamiStats = { pageViews: number | null; visitors: number | null };

export async function getUmamiStats(): Promise<UmamiStats> {
  const token = process.env.UMAMI_API_TOKEN;
  const siteId = process.env.UMAMI_SITE_ID;
  const base = process.env.UMAMI_URL ?? "https://api.umami.cloud";
  if (!token || !siteId) return { pageViews: null, visitors: null };

  const now = Date.now();
  const startAt = now - 30 * 24 * 60 * 60 * 1000; // 30 days
  const endAt = now;

  try {
    const res = await fetch(
      `${base}/api/websites/${siteId}/stats?startAt=${startAt}&endAt=${endAt}`,
      { headers: { Authorization: `Bearer ${token}` }, cache: "no-store" }
    );
    if (!res.ok) return { pageViews: null, visitors: null };
    const json = (await res.json()) as { pageviews?: { value: number }; visitors?: { value: number } };
    return {
      pageViews: json.pageviews?.value ?? null,
      visitors: json.visitors?.value ?? null,
    };
  } catch {
    return { pageViews: null, visitors: null };
  }
}
