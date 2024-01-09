import React from 'react'

export default function Title({ children }: any) {
    return (
        <h2 className="text-blue-600 scroll-m-20 mb-2 text-2xl font-semibold tracking-tight transition-colors first:mt-0">
            {children}
        </h2>
    )
}
