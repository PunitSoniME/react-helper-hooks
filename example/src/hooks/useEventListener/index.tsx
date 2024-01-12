import { lazy, Suspense, useState } from 'react';
import { useEventListener } from '../../../..';
import { packageName } from '@/lib/utils';

const Block = lazy(() => import('@/common/Details/Block'));
const Documentation = lazy(() => import('@/common/Documentation'));

const hook = 'useEventListener';
const info = 'Help you to handle eventListener functionalities';

const usage: string = `import { ${hook} } from '${packageName}';

export default function Component() {
    /*
        @params
            EVENT_NAME - string - An event name on which you want to execute the callback function
            CALLBACK_FUNCTION - function - A function to execute on event catch.
    */
    ${hook}(EVENT_NAME, CALLBACK_FUNCTION);
}`

export default function EventListenerComponent() {

    const [key, setKey] = useState("");
    useEventListener("keydown", (e: any) => {
        setKey(e.key);
    });

    return (
        <Suspense fallback={<></>}>

            <Documentation
                hook={hook}
                info={info}
                usage={usage}
            >

                <Block title='Example'>

                    Press any key to test the keydown event listener: <b>{key}</b>

                </Block>

            </Documentation>

        </Suspense>
    )
}
