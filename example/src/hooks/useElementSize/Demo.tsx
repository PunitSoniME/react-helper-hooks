import { useElementSize } from '../../../../';
import Muted from '@/common/Muted';

export default function Demo() {

    const { ref, height, width } = useElementSize();

    return (
        <div className="flex flex-col gap-3">
            <textarea
                ref={ref}
                defaultValue="Resize this element to test this hook"
                className="resize h-[100px] w-[300px] border bg-white rounded-md p-4"
            >
            </textarea>
            
            <Muted>Height - {height}</Muted>

            <Muted>Width - {width}</Muted>
        </div>
    )
}
