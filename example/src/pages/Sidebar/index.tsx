import { lazy, Suspense } from 'react'
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn, hooks } from '@/lib/utils';
import { useHash } from '../../../../.';
import classes from './Sidebar.module.css';

const HooksList = lazy(() => import('./HooksList'));


export default function Sidebar() {

    return (
        <ScrollArea className={`${classes.sidebar_height} w-[250px] rounded-none border`}>
            <div className="pl-2 pr-3 pt-2">

                <Suspense fallback={<></>}>
                    <HooksList />
                </Suspense>
                
            </div>
        </ScrollArea>
    )
}
