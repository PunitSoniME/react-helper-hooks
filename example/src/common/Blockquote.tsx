import { cn } from '@/lib/utils'
import React from 'react'

export default function Blockquote({ className, children, ...rest }: any) {
    return (
        <blockquote className={cn('mt-6 border-l-2 pl-6 italic', className)}
            {...rest}
        >
            {children}
        </blockquote>
    )
}
