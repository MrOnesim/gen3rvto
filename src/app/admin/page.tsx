import { getDashboardData } from "@/lib/stats";
import { getUmamiStats } from "@/lib/umami";
import { StatCard } from "@/components/admin/stat-card";
import { BarChart } from "@/components/admin/bar-chart";

export const dynamic = "force-dynamic";

export default async function AdminDashboard() {
  const [data, umami] = await Promise.all([getDashboardData(), getUmamiStats()]);

  const maxTrack = Math.max(1, ...data.clicksByTrack.map((t) => t.count));
  const maxPlatform = Math.max(1, ...data.clicksByPlatform.map((p) => p.count));

  return (
    <div>
      <div className="flex items-end justify-between mb-7">
        <h1 className="font-display text-[clamp(36px,5vw,64px)] leading-none">Tableau de bord</h1>
        <span className="text-[10px] text-[#9a9a9a]">30 derniers jours</span>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard label="Vues (Umami)" value={umami.pageViews} hint={umami.pageViews === null ? "Umami non configuré" : undefined} />
        <StatCard label="Visiteurs" value={umami.visitors} hint={umami.visitors === null ? "Umami non configuré" : undefined} />
        <StatCard label="Clics musique" value={data.totalClicks} />
        <StatCard label="Inscriptions news" value={data.newsletter} />
      </div>

      <div className="grid lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-[#0b0b0b] border border-[#1c1c1c] p-6">
          <h2 className="text-[11px] tracking-[2px] uppercase text-[#cfcfcf] mb-5">Clics par titre</h2>
          {data.clicksByTrack.length === 0 ? (
            <p className="text-[12px] text-[#777]">Aucun clic enregistré pour l&apos;instant.</p>
          ) : (
            <BarChart
              items={data.clicksByTrack.map((t) => ({ label: t.target, value: t.count, ratio: t.count / maxTrack }))}
            />
          )}
        </div>

        <div className="bg-[#0b0b0b] border border-[#1c1c1c] p-6">
          <h2 className="text-[11px] tracking-[2px] uppercase text-[#cfcfcf] mb-5">Clics par plateforme</h2>
          {data.clicksByPlatform.length === 0 ? (
            <p className="text-[12px] text-[#777]">Aucun clic enregistré pour l&apos;instant.</p>
          ) : (
            <BarChart
              items={data.clicksByPlatform.map((p) => ({ label: p.platform, value: p.count, ratio: p.count / maxPlatform }))}
            />
          )}
        </div>
      </div>

      <div className="bg-[#0b0b0b] border border-[#1c1c1c] p-6">
        <h2 className="text-[11px] tracking-[2px] uppercase text-[#cfcfcf] mb-5">Dernières demandes</h2>
        {data.recentInquiries.length === 0 ? (
          <p className="text-[12px] text-[#777]">Aucune demande reçue.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-[12px]">
              <thead className="text-[#777] uppercase text-[9px] tracking-[1px]">
                <tr>
                  <th className="py-2 pr-4 font-normal">Nom</th>
                  <th className="py-2 pr-4 font-normal">Email</th>
                  <th className="py-2 pr-4 font-normal">Type</th>
                  <th className="py-2 font-normal">Date</th>
                </tr>
              </thead>
              <tbody>
                {data.recentInquiries.map((r, i) => (
                  <tr key={i} className="border-t border-[#1c1c1c]">
                    <td className="py-3 pr-4">{r.name}</td>
                    <td className="py-3 pr-4 text-[#cfcfcf]">{r.email}</td>
                    <td className="py-3 pr-4">
                      <span className="text-brand uppercase text-[9px] tracking-[1px]">{r.type}</span>
                    </td>
                    <td className="py-3 text-[#9a9a9a]">{new Date(r.createdAt).toLocaleDateString("fr-FR")}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
