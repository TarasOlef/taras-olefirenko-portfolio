const pad = (n: number) => String(n).padStart(2, "0");

export function SectionHead({ index, total, title, children }: { index: number; total: number; title: string; children?: React.ReactNode }) {
  return (
    <>
      <p className="tabular border-t border-line pt-3.5 font-mono text-xs tracking-[0.04em] text-foreground">
        {pad(index)} / {pad(total)}
      </p>
      <div className="mt-7 mb-9 grid items-end gap-3.5 md:grid-cols-2 md:gap-[clamp(24px,4vw,72px)]">
        <h2 className="display-condensed text-[clamp(48px,6.4vw,96px)] leading-[0.9] font-extrabold tracking-[-0.005em] [font-stretch:68%] text-balance">{title}</h2>
        {children && <div className="max-w-[48ch] text-[17px] text-muted-foreground">{children}</div>}
      </div>
    </>
  );
}
