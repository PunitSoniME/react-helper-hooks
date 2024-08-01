import { lazy, Suspense } from 'react';
import { packageName } from '@/lib/utils';
import Demo from './Demo';

const Documentation = lazy(() => import('@/common/Documentation'));

const hook = 'useCopyToClipboard';
const info = 'Helps you to copy a thing which you want';

const usage: string = `import { ${hook} } from '${packageName}';

const copyToClipboard = useCopyToClipboard();

/*
    @returns
        copyToClipboard - function - Returns async function.
*/`


export default function CopyToClipboardComponent() {

    return (
        <Suspense fallback={<></>}>

            <Documentation
                hook={hook}
                info={info}
                usage={usage}
            >
                <Demo />
                
            </Documentation>

        </Suspense>
    )
}
