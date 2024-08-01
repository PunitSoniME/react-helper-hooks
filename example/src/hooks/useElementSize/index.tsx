import { lazy, Suspense } from 'react';
import { packageName } from '@/lib/utils';
import Demo from './Demo';

const Documentation = lazy(() => import('@/common/Documentation'));

const hook = 'useElementSize';
const info = "Custom hook to get the size (width and height) of a DOM element."

const usage: string = `import { ${hook} } from '${packageName}';

const { ref, height, width } = ${hook}();

/*
    @returns
        ref - use this property to attach reference
        height - get updated the height of the element 
        width - get updated the width of the element
*/`;

export default function ElementSizeComponent() {

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
