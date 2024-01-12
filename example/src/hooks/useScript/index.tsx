import { lazy, Suspense, useState } from 'react';
import { useScript } from '../../../..';
import { packageName } from '@/lib/utils';
import Muted from '@/common/Muted';

const Block = lazy(() => import('@/common/Details/Block'));
const Documentation = lazy(() => import('@/common/Documentation'));

const hook = 'useScript';
const info = 'Help you to import external javascript library';

const usage: string = `import { ${hook} } from '${packageName}';

export default function Component() {
    /*
        @params
            URL - string - Pass url of the script which you want to add in your application

        @returns
            loading - boolean - Loading state ( true or false )
            error - any - Data we get when async process rejected
    */
    ${hook}(EVENT_NAME, CALLBACK_FUNCTION);
}`

export default function ScriptComponent() {

    const { loading, error } = useScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js");

    if (loading) return <div>Loading...</div>
    if (error) return <div>Error in loading script</div>

    return (
        <Suspense fallback={<></>}>

            <Documentation
                hook={hook}
                info={info}
                usage={usage}
            >

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

            </Documentation>

        </Suspense>
    )
}

