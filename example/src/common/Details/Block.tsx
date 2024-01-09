import React from 'react'

export default function Usage({ title, children }: any) {
    return (
        <div className='mt-4 border rounded-md p-4 bg-slate-50'>
            <p className='text-lg border-b pb-2 font-semibold tracking-wider mb-4 text-slate-800'>
                {title}
            </p>

            {children}
        </div>
    )
}
