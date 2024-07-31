import { lazy, Suspense } from 'react';
import { packageName } from '@/lib/utils';
import Demo from './Demo';

const Documentation = lazy(() => import('@/common/Documentation'));

const hook = 'useClickOutside';
const info = "The 'useClickOutside' hook is a custom React hook designed to handle click events that occur outside of a specified HTML element. It provides a straightforward way to detect and respond to clicks outside a given component, making it particularly useful for closing dropdowns, modals, tooltips, or any other pop-up elements."

const usage: string = `import { ${hook} } from '${packageName}';

const ref = ${hook}(CALLBACK_FUNCTION);

/*
    @returns
        ref - Returns ref to handle the click outside functionality
*/`

export default function ClickOutsideComponent() {

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
