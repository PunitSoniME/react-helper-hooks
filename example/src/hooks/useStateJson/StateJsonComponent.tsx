import { lazy, Suspense, useState, useEffect } from 'react';
import { useStateJson } from '../../../../.';
import { packageName } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Muted from '@/common/Muted';

const Title = lazy(() => import('@/common/Details/Title'));
const Block = lazy(() => import('@/common/Details/Block'));
const Api = lazy(() => import('@/common/Details/Api'));
const Lead = lazy(() => import('@/common/Lead'));

const hook = 'useStateJson';

const api = [
    { execute: 'json', type: 'Object', description: 'Object that stores data' },
    { execute: 'setJson', type: 'function', description: 'Call this function to scroll to top' },
];


export default function StateJsonComponent() {

    const [name, setName] = useState("Punit");
    const [email, setEmail] = useState("punit.soni33@gmail.com");

    const [json, setJson] = useStateJson({ id: 1, name: name, email: email });

    useEffect(() => {
        console.log("json updated - ", json)
    }, [json])


    return (
        <Suspense fallback={<></>}>

            <Title>{hook}</Title>

            <Lead className='text-md'>
                The <code>{hook}</code> hook stores a state as a JSON string to prevent unnecessary render updates.<br />
                Updates of values that serialize to the same string are ignored.<br />
                Can be used to ignore duplicate updates of the state including object values.
            </Lead>

            <Block title='Usage'>
                <div className='flex flex-col gap-5'>
                    <code>
                        {`import { ${hook} } from "${packageName}";`}
                    </code>

                    <code>
                        {`const [json, setJson] = ${hook}(OBJECT);`}
                    </code>
                </div>
            </Block>

            <Api api={api} />

            <Block title='Example'>

                <div className='flex justify-between flex-col items-start gap-3'>
                    <div>Json - {JSON.stringify(json)}</div>

                    <Muted>
                        Note: Check console log for json updated ( When you click Update JSON button continuously without changing name or email, it will not rerender the component )
                    </Muted>
                    
                    <Input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

                    <Button size="sm" onClick={() => {
                        setJson({
                            ...json,
                            name: name,
                            email: email
                        })
                    }}>Update JSON</Button>
                </div>
            </Block>

        </Suspense>
    )
}
