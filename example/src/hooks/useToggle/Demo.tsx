
import { useToggle } from '../../../..';
import { Button } from '@/components/ui/button';

export default function Demo() {

    const [isSelected, toggleSelected] = useToggle(false);

    return (
        <>
            <div className="mb-2">{isSelected.toString()}</div>
            <div className='flex gap-3'>
                <Button size="sm" onClick={toggleSelected}>Toggle</Button>
                <Button size="sm" onClick={() => toggleSelected(true)}>Make True</Button>
                <Button size="sm" onClick={() => toggleSelected(false)}>Make False</Button>
            </div>
        </>
    )
}
