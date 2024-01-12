import { lazy, Suspense } from 'react';
import { useHash } from '../../../..';
import { Button } from '@/components/ui/button';
import { packageName } from '@/lib/utils';
import Muted from '@/common/Muted';

const Block = lazy(() => import('@/common/Details/Block'));
const Documentation = lazy(() => import('@/common/Documentation'));

const hook = 'useHash';
const info = 'Helps you to get current hash and allows you to update hash of URL';

const usage: string = `import { ${hook} } from '${packageName}';

export default function Component() {
    /*
        @returns
            hash - any - Variable name
            useHash - function - The function to update the value of the variable
    */
    const [isSelected, toggleSelected] = ${hook}(INITIAL_VALUE);
}`

export default function HashComponent() {

    const [hash, setHash] = useHash();

    return (
        <Suspense fallback={<></>}>

            <Documentation
                hook={hook}
                info={info}
                usage={usage}
            >
                <Block title='Example'>
                    <div className="mb-2">Current Hash - {hash}</div>

                    <Button size="sm"
                        className='mt-4'
                        onClick={() => {
                            setHash("testing-hook");
                        }}>Update Hash</Button>

                    <Muted className="mt-2">
                        Clicking on above button will update the hash in url, but also it will redirect you to 404 page
                    </Muted>
                </Block>

            </Documentation>

        </Suspense>

    )
}
