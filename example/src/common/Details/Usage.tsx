import React from 'react'

export default function Usage({ title, children }: any) {
    return (
        <div className='mt-4 border rounded-md bg-slate-50'>
            <p className='text-lg p-4 font-semibold tracking-wider text-slate-800'>
                {title || "Usage"}
            </p>

            {children}
        </div>
    )
}
