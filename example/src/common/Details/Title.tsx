import React from 'react'

export default function Title({ children }: any) {
    return (
        <h2 className="text-primary scroll-m-20 mb-2 text-xl font-semibold tracking-tight transition-colors first:mt-0">
            {children}
        </h2>
    )
}
