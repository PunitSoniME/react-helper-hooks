import React, { useState } from 'react'
import { SheetClose } from '@/components/ui/sheet';
import { cn, hooks, sortBasedOnString } from '@/lib/utils';
import { useHash } from '../../../..';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const components = sortBasedOnString(hooks, 'key');

console.log(components);
export default function HooksList() {

    const [search, setSearch] = useState("");

    const filteredComponents = components.filter(f => f.key.toLowerCase().includes(search.toLowerCase()));

    const [hash, setHash] = useHash();
    const selectedHook = hash ? hash.split('#')[1] : "";

    return (
        <>
            <Input
                type="search"
                value={search}
                placeholder='Search...'
                className='bg-slate-200 mb-1'
                onChange={(e) => { setSearch(e.target.value) }}
            />

            <hr className='my-2' />

            <div className='flex flex-col gap-2'>
                {
                    filteredComponents.map((hook) => {
                        return <SheetClose
                            key={hook.key} asChild>
                            <Button
                                className="font-normal justify-start"
                                onClick={() => {
                                    setHash(hook.key);
                                }}
                                variant={selectedHook === hook.key ? 'default' : 'ghost'}
                            >
                                {hook.key} {
                                    hook.isNew
                                        ? <span className={`ml-2 px-2 rounded-md ${selectedHook === hook.key ? 'bg-white text-blue-600' : 'bg-blue-600 text-white'}`}>New</span>
                                        : ""
                                }
                            </Button>
                        </SheetClose>
                    })
                }

            </div>
        </>
    )
}
