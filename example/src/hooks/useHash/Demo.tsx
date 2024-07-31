
import { useHash } from '../../../..';
import { Button } from '@/components/ui/button';
import Muted from '@/common/Muted';

export default function Demo() {

    const [hash, updateHash] = useHash();

    return (
        <>
            <div className="mb-2">Current Hash - {hash}</div>

            <Button size="sm"
                className='mt-4'
                onClick={() => {
                    updateHash("testing-hook");
                }}>Update Hash</Button>

            <Muted className="mt-2">
                Clicking on above button will update the hash in url, but also it will redirect you to 404 page
            </Muted>
        </>
    )
}
