import { lazy, Suspense } from 'react'
import { useHash } from '../../../../.';
import { hooks, props } from '@/lib/utils';
import { ScrollArea } from '@/components/ui/scroll-area';
import classes from './Layout.module.css';
import RedirectToExample from '@/common/Details/RedirectToExample';
import { Sheet, SheetContent } from '@/components/ui/sheet';

const Header = lazy(() => import('../Header'));
const Sidebar = lazy(() => import('../Sidebar'));
const HooksList = lazy(() => import('../Sidebar/HooksList'));
const LandingPage = lazy(() => import('../LandingPage'));

export default function Layout() {

    const [hash,] = useHash();
    const selectedHook: string = hash ? (hash as string).split('#')[1] : "";

    // @ts-ignore
    const Component = selectedHook ? hooks[selectedHook] : <></>;

    // @ts-ignore
    const propsToPass = selectedHook ? props[selectedHook] : {};

    return (
        <div>
            <Sheet>

                <Suspense fallback={<></>}>
                    <Header />
                </Suspense>

                <div className={`${classes.main_height} grid md:grid-cols-[250px_1fr] grid-cols-1`}>

                    <div className="hidden md:block">
                        <Suspense fallback={<></>}>
                            <Sidebar />
                        </Suspense>
                    </div>

                    <SheetContent className="w-[300px] px-2">
                        <ScrollArea className='h-full'>
                            <div className="pt-3 pr-3">
                                <Suspense fallback={<></>}>
                                    <HooksList />
                                </Suspense>
                            </div>
                        </ScrollArea>
                    </SheetContent>

                    {
                        hash ?
                            <ScrollArea className="w-full rounded-none">
                                <div className='px-4 pt-2 pb-32'>
                                    <Suspense fallback={<></>}>
                                        <Component {...propsToPass} />

                                        <RedirectToExample hook={selectedHook} />
                                    </Suspense>
                                </div>
                            </ScrollArea>
                            : <Suspense>
                                <LandingPage />
                            </Suspense>
                    }
                </div>

            </Sheet>
        </div>

    )
}
