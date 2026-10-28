export function SectionHead({ index, total, label, title, children }: { index: number; total: number; label: string; title: string; children?: React.ReactNode }) {
  const pad = (n: number) => String(n).padStart(2, "0");
  return (
    <>
      <p className="flex items-baseline gap-[18px] border-t border-line pt-3.5 font-mono text-xs tracking-[0.04em] text-muted-foreground uppercase">
        <b className="tabular font-medium text-tally">
          {pad(index)} / {pad(total)}
        </b>
        <span>{label}</span>
      </p>
      <div className="mt-7 mb-9 grid items-end gap-3.5 md:grid-cols-2 md:gap-[clamp(24px,4vw,72px)]">
        <h2 className="display-condensed text-[clamp(48px,6.4vw,96px)] leading-[0.9] font-extrabold tracking-[-0.005em] [font-stretch:68%] text-balance">{title}</h2>
        {children && <div className="max-w-[48ch] text-[17px] text-muted-foreground">{children}</div>}
      </div>
    </>
  );
}
