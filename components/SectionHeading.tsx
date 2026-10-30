interface SectionHeadingProps {
  children: React.ReactNode
  subtitle?: string
}

export default function SectionHeading({ children, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-5">
      <h2>{children}</h2>
      {subtitle && <p className="mt-1 text-muted-foreground">{subtitle}</p>}
    </div>
  )
}
