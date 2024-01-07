import { useState, lazy, Suspense } from 'react';
import { useDebounce } from '../../../../.';
import { packageName } from '@/lib/utils';
import { Input } from "@/components/ui/input"

const Title = lazy(() => import('@/common/Details/Title'));
const Block = lazy(() => import('@/common/Details/Block'));
const Lead = lazy(() => import('@/common/Lead'));

const hook = 'useDebounce';

export default function DebounceComponent() {

    const [search, setSearch] = useState("");
    const [debounced, setDebounced] = useState('');

    useDebounce(() => {
        setDebounced(search);
    }, 1000, [search]);

    return (
        <Suspense fallback={<></>}>

            <Title>{hook}</Title>

            <Lead className='text-md'>
                The <code>{hook}</code> will wait for sometime once user stop typing anything
            </Lead>

            <Block title='Usage'>
                <div className='flex flex-col gap-5'>
                    <code>
                        {`import { ${hook} } from "${packageName}";`}
                    </code>
                    <code>
                        {`${hook}(() => { CODE_TO_EXECUTE }, 1000, [DEPENDENCIES]);`}
                    </code>
                </div>
            </Block>

            <Block title='Example'>
                <div className="flex flex-col gap-3">
                    <p>This hook will change the value of debounced variable after 1 second whenever you stop typing.</p>

                    <Input
                        className="w-full lg:w-1/2"
                        type="search"
                        placeholder="Type something..."
                        value={search}
                        onChange={(e) => { setSearch(e.target.value) }}
                    />

                    <div className="flex flex-col gap-1 mt-2">
                        <p className="text-sm">Value - {search}</p>
                        <p className="text-sm">Debounced Value - {debounced}</p>
                    </div>
                </div>
            </Block>

        </Suspense>
    )
}
