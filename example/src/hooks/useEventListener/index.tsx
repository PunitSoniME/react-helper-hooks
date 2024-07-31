import { lazy, Suspense } from 'react';
import { packageName } from '@/lib/utils';
import Demo from './Demo';

const Documentation = lazy(() => import('@/common/Documentation'));

const hook = 'useEventListener';
const info = 'Helps you to handle eventListener functionalities';

const usage: string = `import { ${hook} } from '${packageName}';

${hook}(EVENT_NAME, CALLBACK_FUNCTION);

/*
    @params
        EVENT_NAME - string - An event name on which you want to execute the callback function
        CALLBACK_FUNCTION - function - A function to execute on event catch.
*/`

export default function EventListenerComponent() {

    return (
        <Suspense fallback={<></>}>

            <Documentation
                hook={hook}
                info={info}
                usage={usage}
                version="1.2.0"
            >
                <Demo />

            </Documentation>

        </Suspense>
    )
}
