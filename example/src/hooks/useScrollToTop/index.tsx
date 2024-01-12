import { lazy, Suspense } from 'react';
import { useScrollToTop } from '../../../..';
import { packageName } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const Block = lazy(() => import('@/common/Details/Block'));
const Documentation = lazy(() => import('@/common/Documentation'));

const hook = 'useScrollToTop';
const info = 'Helps you to scroll the screen or any html element';

const usage: string = `import { ${hook} } from '${packageName}';

export default function Component() {
    /*
        @returns
            scrollToTop - function - Returns a function that accepts 1 options parameter, Call this function to scroll to top, you can pass the id of an element which you want to scroll, default is body element
    */
    const scrollToTop = ${hook}();
}`

export default function ScrollToTopComponent() {

    const scrollToTop = useScrollToTop();

    return (
        <Suspense fallback={<></>}>

            <Documentation
                hook={hook}
                info={info}
                usage={usage}
            >

                <Block title='Example'>
                    <div id="scroll-block" className='rounded-md bg-slate-100 mt-4 p-2 border h-[400px] overflow-y-scroll'>

                        <div className='h-[600px]'>
                            Scroll bottom to get scroll to top button
                        </div>

                        <Button
                            size="sm"
                            onClick={() => {
                                scrollToTop('scroll-block');
                            }}>Scroll To Top</Button>

                    </div>
                </Block>

            </Documentation>
        </Suspense>
    )
}

