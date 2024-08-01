import { lazy, Suspense } from 'react'
import { ScrollArea } from '@/components/ui/scroll-area';
import classes from './Sidebar.module.css';

const HooksList = lazy(() => import('./HooksList'));

export default function Sidebar() {

    return (
        <ScrollArea className={`${classes.sidebar_height} w-[250px] rounded-none`}>
            <div className="pl-2 pr-3 pt-2">

                <Suspense fallback={<></>}>
                    <HooksList />
                </Suspense>
                
            </div>
        </ScrollArea>
    )
}
