import { lazy, Suspense } from 'react';
import { useProvidersTree } from '../../../..';
import { packageName } from '@/lib/utils';
import Context1Provider from './Context1';
import Context2Provider from './Context2';
import ContextUsage from './ContextUsage';

const Block = lazy(() => import('@/common/Details/Block'));
const Documentation = lazy(() => import('@/common/Documentation'));

const hook = 'useProvidersTree';
const info = 'Remove the Provider Hell in your React app and get clean code';

const usage: string = `import { ${hook} } from '${packageName}';

export default function ProvidersTreeComponent() {
    /*
        @returns - A function that accepts array of an array, check below example
    */
    const buildProvidersTree = useProvidersTree();
    const ProvidersTree = buildProvidersTree([
        [Provider1],
        [Provider2],
        [QueryClientProvider, { client: queryClient }],
        [ReduxProvider, { state }],
    ]);
}`

const api = [
    { execute: 'buildProvidersTree', type: 'Array of array', description: 'Pass array of an array as shown above' },
];

export default function ProvidersTreeComponent() {

    const buildProvidersTree = useProvidersTree();
    const ProvidersTree = buildProvidersTree([
        [Context1Provider],
        [Context2Provider],
    ]);

    return (
        <>
            <Suspense fallback={<></>}>

                <Documentation
                    hook={hook}
                    info={info}
                    usage={usage}
                >

                    <Block title='Example'>

                        <ProvidersTree>
                            <div className='space-y-4'>
                                <p>Context Tree</p>
                                <ContextUsage />
                            </div>
                        </ProvidersTree>
                    </Block>
                </Documentation>

            </Suspense>
        </>
    )
}
