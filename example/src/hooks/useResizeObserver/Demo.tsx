import { useResizeObserver } from '../../../..';
import Muted from '@/common/Muted';

export default function Demo() {

    const [ref, rect] = useResizeObserver();

    return (
        <div className="flex flex-col gap-3">
            <textarea
                ref={ref}
                defaultValue="Resize this element to test this hook"
                className="resize h-[100px] w-[300px] border bg-white rounded-md p-4"
            >
            </textarea>
            
            <Muted>Rect - <code>{JSON.stringify(rect)}</code></Muted>
        </div>
    )
}
