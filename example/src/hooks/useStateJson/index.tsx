import { lazy, Suspense, useState, useEffect } from 'react';
import { useStateJson } from '../../../..';
import { packageName } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Muted from '@/common/Muted';

const Block = lazy(() => import('@/common/Details/Block'));
const Documentation = lazy(() => import('@/common/Documentation'));

const hook = 'useStateJson';
const info = `Stores a state as a JSON string to prevent unnecessary render updates.
Updates of values that serialize to the same string are ignored.
Can be used to ignore duplicate updates of the state including object values.`

const usage: string = `import { ${hook} } from '${packageName}';

export default function Component() {
    /*
        @params
            object - Object - Pass an object on which you want to do operation

        @returns
            json - Object - Object that stores data
            setJson - function - A function to update the variable
            
    */
    const [json, setJson] = ${hook}(OBJECT);
}`

export default function StateJsonComponent() {

    const [name, setName] = useState("Punit");
    const [email, setEmail] = useState("punit.soni33@gmail.com");

    const [json, setJson] = useStateJson({ id: 1, name: name, email: email });

    useEffect(() => {
        console.log("json updated - ", json)
    }, [json])

    return (
        <Suspense fallback={<></>}>

            <Documentation
                hook={hook}
                info={info}
                usage={usage}
            >
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

            </Documentation>

        </Suspense>
    )
}
