import { cn } from '@/lib/utils'
import React from 'react'

export default function Lead({ className, children, ...rest }: any) {
    return (
        <p className={cn('text-xl text-muted-foreground', className)}
            {...rest}
        >
            {children}
        </p>
    )
}
