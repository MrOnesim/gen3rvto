export function BarChart({ items }: { items: { label: string; value: number; ratio: number }[] }) {
  return (
    <div className="flex flex-col gap-3">
      {items.map((item) => (
        <div key={item.label}>
          <div className="flex justify-between text-[11px] mb-1">
            <span className="text-[#cfcfcf]">{item.label}</span>
            <span className="text-[#9a9a9a]">{item.value.toLocaleString("fr-FR")}</span>
          </div>
          <div className="h-[6px] bg-[#1c1c1c] overflow-hidden">
            <div
              className="h-full bg-brand"
              style={{ width: `${Math.max(4, Math.round(item.ratio * 100))}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
