import { lazy, Suspense } from 'react';
import { packageName } from '@/lib/utils';
import Demo from './Demo';

const Documentation = lazy(() => import('@/common/Documentation'));

const hook = 'useResizeObserver';
const info = "Custom hook to observe and get the bounding client rect of a DOM element."

const usage: string = `import { ${hook} } from '${packageName}';

const { ref, rect } = ${hook}();

/*
    @returns
        ref - React ref to be attached to the target element
        rect - Current bounding client rect of the element.
*/`;

export default function ResizeObserverComponent() {

    return (
        <Suspense fallback={<></>}>

            <Documentation
                hook={hook}
                info={info}
                usage={usage}
                version="1.12.0"
            >
                <Demo />
            </Documentation>

        </Suspense>
    )
}
