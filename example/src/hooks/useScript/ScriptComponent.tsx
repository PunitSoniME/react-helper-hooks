import { lazy, Suspense, useState } from 'react';
import { useScript } from '../../../../.';
import { packageName } from '@/lib/utils';
import Muted from '@/common/Muted';

const Title = lazy(() => import('@/common/Details/Title'));
const Block = lazy(() => import('@/common/Details/Block'));
const Api = lazy(() => import('@/common/Details/Api'));
const Lead = lazy(() => import('@/common/Lead'));

const hook = 'useScript';

const api = [
    { execute: 'loading', type: 'Boolean', description: 'Loading state ( true or false )' },
    { execute: 'error', type: 'any', description: 'Error we get when async process rejected' },
];

export default function ScriptComponent() {

    const { loading, error } = useScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js");

    if (loading) return <div>Loading...</div>
    if (error) return <div>Error in loading script</div>

    return (
        <Suspense fallback={<></>}>

            <Title>{hook}</Title>

            <Lead className='text-md'>
                The <code>{hook}</code> will help you to import external script
            </Lead>

            <Block title='Usage'>
                <div className='flex flex-col gap-5'>
                    <code>
                        {`import { ${hook} } from "${packageName}";`}
                    </code>

                    <code>
                        {`const { loading, error } = ${hook}('EXTERNAL_JS_FILE_URL');`}
                    </code>
                </div>
            </Block>

            <Api api={api} />

            <Block title='Example'>

                <Muted>
                    In this example we are using lodash's external url - <code>https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js</code>
                </Muted>

                <div className="flex flex-col gap-4 my-2">

                    <div className="text-sm">
                        <code>
                            (window)._.sum([1, 2, 3]) - {(window as any)?._.sum([1, 2, 3])}
                        </code>
                    </div>

                    <div className="text-sm">
                        <code>
                            (window)._.multiply(2, 5) - {(window as any)?._.multiply(2, 5)}
                        </code>
                    </div>

                </div>
            </Block>

        </Suspense>
    )
}

