import { cn } from '@/lib/utils'
import React from 'react'

export default function Lead({ className, children, ...rest }: any) {
    return (
        <pre className={cn('text-xl text-muted-foreground whitespace-pre-wrap', className)}
            {...rest}
        >
            {children}
        </pre>
    )
}
