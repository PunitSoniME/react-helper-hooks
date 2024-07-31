import { lazy, Suspense } from 'react';
import { packageName } from '@/lib/utils';
import Demo from './Demo';

const Documentation = lazy(() => import('@/common/Documentation'));

const hook = 'useScrollToTop';
const info = 'Helps you to scroll the screen or any html element';

const usage: string = `import { ${hook} } from '${packageName}';

const scrollToTop = ${hook}();

/*
    @returns
        scrollToTop - function - Returns a function that accepts 1 options parameter, Call this function to scroll to top, you can pass the id of an element which you want to scroll, default is body element
*/`

export default function ScrollToTopComponent() {

    return (
        <Suspense fallback={<></>}>

            <Documentation
                hook={hook}
                info={info}
                usage={usage}
                version="1.7.0"
            >
                <Demo />
            </Documentation>
        </Suspense>
    )
}

