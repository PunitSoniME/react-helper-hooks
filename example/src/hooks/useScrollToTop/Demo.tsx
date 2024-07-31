import { useScrollToTop } from '../../../..';
import { Button } from '@/components/ui/button';

export default function Demo() {

    const scrollToTop = useScrollToTop();

    return (
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
    )
}
