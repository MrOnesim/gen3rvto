export function StatCard({ label, value, hint }: { label: string; value: number | null; hint?: string }) {
  return (
    <div className="bg-[#0b0b0b] border border-[#1c1c1c] p-5">
      <p className="text-[9px] tracking-[1.5px] uppercase text-[#9a9a9a]">{label}</p>
      <p className="font-display text-[44px] leading-none mt-3">
        {value === null ? "—" : value.toLocaleString("fr-FR")}
      </p>
      {hint && <p className="text-[9px] text-[#777] mt-2">{hint}</p>}
    </div>
  );
}
