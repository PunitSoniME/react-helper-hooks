import { lazy, Suspense, useMemo } from 'react'
import { useHash } from '../../../..';
import { hooks, props } from '@/lib/utils';
import { ScrollArea } from '@/components/ui/scroll-area';
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

                <nav className="fixed bottom-[calc(100vh-theme(spacing.16))] left-0 right-0 top-0 z-50">
                    <Suspense fallback={<></>}>
                        <Header />
                    </Suspense>
                </nav>

                <div className="flex min-h-screen md:divide-x container px-0 md:px-4 mt-2">
                    <aside className="sticky top-16 h-[calc(100vh-theme(spacing.16))] w-[250px] hidden md:block">
                        <Suspense fallback={<></>}>
                            <Sidebar />
                        </Suspense>
                    </aside>

                    <SheetContent className="w-[300px] px-2">
                        <ScrollArea className='h-full'>
                            <div className="pt-3 pl-1 pr-3">
                                <Suspense fallback={<></>}>
                                    <HooksList />
                                </Suspense>
                            </div>
                        </ScrollArea>
                    </SheetContent>

                    <main className="flex-1 mt-14 pr-4 overflow-x-auto">
                        {
                            hash ?
                                <Suspense fallback={<></>}>
                                    {
                                        Component
                                            ? <div className="p-4">
                                                <Component {...propsToPass} />
                                                <RedirectToExample hook={selectedHook} />
                                            </div>
                                            : <Alert variant="destructive">
                                                <AlertCircle className="h-4 w-4" />
                                                <AlertTitle>{selectedHook} hook not found</AlertTitle>
                                            </Alert>
                                    }
                                </Suspense>
                                : <Suspense>
                                    <LandingPage />
                                </Suspense>
                        }
                    </main>
                </div>

            </Sheet>
        </div>

    )
}
