import { cn } from '@/lib/utils'
import React from 'react'

export default function Muted({ className, children, ...rest }: any) {
    return (
        <p className={cn('text-sm text-muted-foreground', className)}
            {...rest}
        >
            {children}
        </p>
    )
}
