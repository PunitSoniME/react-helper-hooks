import React from 'react'
import { SheetClose } from '@/components/ui/sheet';
import { cn, hooks } from '@/lib/utils';
import { useHash } from '../../../..';
import { Button } from '@/components/ui/button';

const components = [...Object.keys(hooks)].sort();

export default function HooksList() {

    const [hash, setHash] = useHash();
    const selectedHook = hash ? hash.split('#')[1] : "";

    return (
        <div className='flex flex-col gap-1'>
            {
                components.map((key) => {
                    return <SheetClose
                        key={key} asChild>
                        <Button
                            className={cn('font-normal justify-start', selectedHook === key ? 'font-semibold' : '')}
                            onClick={() => {
                                setHash(key);
                            }}
                            variant={selectedHook === key ? 'default' : 'ghost'}
                        >
                            {key}
                        </Button>
                    </SheetClose>
                })
            }

        </div>
    )
}
