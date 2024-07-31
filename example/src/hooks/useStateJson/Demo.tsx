import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useStateJson } from '../../../..';
import { Input } from '@/components/ui/input';
import Muted from '@/common/Muted';

export default function Demo() {

    const [name, setName] = useState("Punit");
    const [email, setEmail] = useState("punit.soni33@gmail.com");

    const [json, setJson] = useStateJson({ id: 1, name: name, email: email });

    useEffect(() => {
        console.log("json updated - ", json)
    }, [json])

    return (
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
    )
}
