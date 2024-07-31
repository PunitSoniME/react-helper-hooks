import React, { lazy, Suspense, useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Title = lazy(() => import('@/common/Details/Title'));
const CodeSample = lazy(() => import('@/common/CodeSample'));

export default function Documentation({ hook, info, usage, version, children }: any) {
    const [activeTab, setActiveTab] = useState('docs');

    return (
        <>
            <Suspense fallback={<></>}>
                <div className='flex items-center gap-3'>
                    <Title>{hook}</Title>
                    {
                        version
                            ? <code className='text-primary text-sm'>since v{version}</code>
                            : ""
                    }
                </div>
            </Suspense>

            <Suspense fallback={<>Loading Code Block</>}>
                <h2 className='text-sm'>
                    {info}
                </h2>
            </Suspense>

            <Tabs defaultValue={activeTab} className="w-full" onValueChange={(newTab) => {
                setActiveTab(newTab);
            }}>
                <TabsList className="w-full my-4">
                    <TabsTrigger className="w-1/2" value="docs">Docs</TabsTrigger>
                    <TabsTrigger className="w-1/2" value="demo">Demo</TabsTrigger>
                </TabsList>
                <TabsContent value="docs">
                    <CodeSample code={usage} />
                </TabsContent>
                {
                    activeTab === 'demo'
                        ? <TabsContent value="demo">
                            <div className='border rounded-md p-4 bg-slate-50'>
                                {children}
                            </div>
                        </TabsContent>
                        : ""
                }
            </Tabs>

        </>
    )
}
