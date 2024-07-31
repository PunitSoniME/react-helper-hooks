import { lazy, Suspense, useMemo } from 'react'
import { useHash } from '../../../..';
import { hooks, props } from '@/lib/utils';
import { ScrollArea } from '@/components/ui/scroll-area';
import classes from './Layout.module.css';
import RedirectToExample from '@/common/Details/RedirectToExample';
import { Sheet, SheetContent } from '@/components/ui/sheet';
import { Alert, AlertTitle } from '@/components/ui/alert';
import { AlertCircle } from 'lucide-react';

const Header = lazy(() => import('../Header'));
const Sidebar = lazy(() => import('../Sidebar'));
const HooksList = lazy(() => import('../Sidebar/HooksList'));
const LandingPage = lazy(() => import('../LandingPage'));

export default function Layout() {

    const [hash,] = useHash();
    // const selectedHook: string = hash ? (hash as string).split('#')[1] : "";

    const selectedHook = useMemo(() => {
        if (hash) {
            const splittedHookName = (hash as string).split('#')[1];
            if (splittedHookName) {
                const splittedHookNameInLowerCase = splittedHookName.toLowerCase();
                const hookDetails = hooks.find(f => f.key.toLowerCase() === splittedHookNameInLowerCase);
                return hookDetails ? hookDetails?.key : splittedHookName;
            }
            return "";
        }
        return "";
    }, [hash]);

    // @ts-ignore
    const Component = hooks.find(f => f.key === selectedHook)?.Component || null;

    // @ts-ignore
    const propsToPass = selectedHook && props[selectedHook] ? props[selectedHook] : {};

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
                            <div className="pt-3 pl-1 pr-3">
                                <Suspense fallback={<></>}>
                                    <HooksList />
                                </Suspense>
                            </div>
                        </ScrollArea>
                    </SheetContent>

                    {
                        hash ?
                            <div className='px-4 pt-2 pb-32 overflow-x-auto'>
                                <Suspense fallback={<></>}>
                                    {
                                        Component
                                            ? <>
                                                <Component {...propsToPass} />
                                                <RedirectToExample hook={selectedHook} />
                                            </>
                                            : <Alert variant="destructive">
                                                <AlertCircle className="h-4 w-4" />
                                                <AlertTitle>{selectedHook} hook not found</AlertTitle>
                                            </Alert>
                                    }
                                </Suspense>
                            </div>
                            : <Suspense>
                                <LandingPage />
                            </Suspense>
                    }
                </div>

            </Sheet>
        </div>

    )
}
