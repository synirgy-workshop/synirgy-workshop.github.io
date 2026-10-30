interface PageBannerProps { title: string; description?: string }

export default function PageBanner({ title, description }: PageBannerProps) {
  return (
    <header className="page-banner">
      <div className="page-content py-10 md:py-14">
        <p className="banner-edition">SynIRgy / The Web Conference 2027</p>
        <h1>{title}</h1>
        {description && <p className="mt-3 text-lg text-muted-foreground">{description}</p>}
      </div>
    </header>
  )
}
