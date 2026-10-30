interface PageBannerProps {
  title: string
  description?: string
}

export default function PageBanner({ title, description }: PageBannerProps) {
  return (
    <header className="border-b border-border">
      <div className="page-content py-10 md:py-14">
        <h1>{title}</h1>
        {description && (
          <p className="mt-3 text-lg text-muted-foreground">{description}</p>
        )}
      </div>
    </header>
  )
}
