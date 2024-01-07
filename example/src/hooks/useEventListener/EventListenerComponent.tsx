import { lazy, Suspense, useState } from 'react';
import { useEventListener } from '../../../../.';
import { packageName } from '@/lib/utils';

const Title = lazy(() => import('@/common/Details/Title'));
const Block = lazy(() => import('@/common/Details/Block'));
const Lead = lazy(() => import('@/common/Lead'));

const hook = 'useEventListener';

export default function EventListenerComponent() {

    const [key, setKey] = useState("");
    useEventListener("keydown", (e: any) => {
        setKey(e.key);
    });

    return (
        <Suspense fallback={<></>}>

            <Title>{hook}</Title>

            <Lead className='text-md'>
                The <code>{hook}</code> will help you to handle eventListener functionalities
            </Lead>

            <Block title='Usage'>
                <div className='flex flex-col gap-5'>
                    <code>
                        {`import { ${hook} } from "${packageName}";`}
                    </code>
                    <code>
                        {`${hook}(EVENT_NAME, CALLBACK_FUNCTION);`}
                    </code>
                </div>
            </Block>

            <Block title='Example'>

                Last key pressed: {key}

            </Block>

        </Suspense>
    )
}
