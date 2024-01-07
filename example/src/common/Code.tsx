import { cn } from '@/lib/utils'
import React from 'react'

export default function Code({ className, children, ...rest }: any) {
    return (
        <code className={cn('relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold', className)}
            {...rest}
        >
            {children}
        </code>
    )
}
