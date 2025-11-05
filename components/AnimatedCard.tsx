import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'

interface AnimatedCardProps {
  title?: string
  description?: string
  children?: React.ReactNode
  className?: string
  delay?: number
  hover3d?: boolean
}

export default function AnimatedCard({
  title,
  description,
  children,
  className,
  delay = 0,
  hover3d = true,
}: AnimatedCardProps) {
  return (
    <div className={cn("h-full", className)}>
      <Card className="h-full border border-border bg-card">
        {(title || description) && (
          <CardHeader>
            {title && <CardTitle className="text-2xl">{title}</CardTitle>}
            {description && <CardDescription>{description}</CardDescription>}
          </CardHeader>
        )}
        {children && (
          <CardContent>
            {children}
          </CardContent>
        )}
      </Card>
    </div>
  )
}
