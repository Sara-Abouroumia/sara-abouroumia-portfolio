interface SectionLabelProps {
  text: string
}

export default function SectionLabel({ text }: SectionLabelProps) {
  return (
    <div className="flex items-center gap-2 mb-2">
      <div className="w-6 h-px bg-accent"></div>
      <span className="font-mono text-[11px] text-accent tracking-[0.12em] uppercase">{text}</span>
    </div>
  )
}
