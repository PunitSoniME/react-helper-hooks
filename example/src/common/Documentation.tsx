import React, { lazy, Suspense } from 'react'

const Title = lazy(() => import('@/common/Details/Title'));
const Lead = lazy(() => import('@/common/Lead'));
const CodeSample = lazy(() => import('@/common/CodeSample'));

export default function Documentation({ hook, info, usage, children }: any) {
    return (
        <>
            <Suspense fallback={<></>}>
                <Title>{hook}</Title>
            </Suspense>

            <Suspense fallback={<>Loading Code Block</>}>
                <Lead className='text-md'>
                    {info}
                </Lead>
            </Suspense>

            <Suspense fallback={<></>}>
                <CodeSample code={usage} />
            </Suspense>

            {children}
        </>
    )
}
