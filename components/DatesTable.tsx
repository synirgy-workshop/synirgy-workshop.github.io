'use client'

import { useEffect, useState } from 'react'
import { IMPORTANT_DATES } from '@/lib/conference'
import { cn } from '@/lib/utils'

export default function DatesTable() {
  const [nextDeadline, setNextDeadline] = useState<string>()

  useEffect(() => {
    const now = Date.now()
    const next = IMPORTANT_DATES.find(
      (item) => item.deadline && new Date(`${item.deadline}T23:59:59-12:00`).getTime() >= now
    )
    setNextDeadline(next?.event)
  }, [])

  return (
    <table className="w-full text-left">
      <tbody className="divide-y divide-border border-y border-border">
        {IMPORTANT_DATES.map((item) => (
          <tr key={item.event} className={cn(item.event === nextDeadline && 'bg-muted')}>
            <th scope="row" className="py-3 pl-3 pr-4 font-medium">
              {item.event}
              {item.event === nextDeadline && (
                <span className="ml-2 text-xs font-semibold text-primary">Next</span>
              )}
            </th>
            <td className="py-3 pr-3 text-right text-muted-foreground">{item.date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
