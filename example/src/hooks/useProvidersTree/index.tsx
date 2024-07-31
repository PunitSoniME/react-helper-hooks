import { lazy, Suspense } from 'react';
import { packageName } from '@/lib/utils';
import Demo from './Demo';

const Documentation = lazy(() => import('@/common/Documentation'));

const hook = 'useProvidersTree';
const info = 'Remove the Provider Hell in your React app and get clean code';

const usage: string = `import { ${hook} } from '${packageName}';

const buildProvidersTree = useProvidersTree();
const ProvidersTree = buildProvidersTree([
    [Provider1],
    [Provider2],
    [QueryClientProvider, { client: queryClient }],
    [ReduxProvider, { state }],
]);

/*
    @returns
        A function that accepts array of an array, check below example
*/`

export default function ProvidersTreeComponent() {

    return (
        <>
            <Suspense fallback={<></>}>

                <Documentation
                    hook={hook}
                    info={info}
                    usage={usage}
                    version="1.11.0"
                >
                    <Demo />
                </Documentation>

            </Suspense>
        </>
    )
}
