import { useState, lazy, Suspense } from 'react';
import { useDebounce } from '../../../..';
import { packageName } from '@/lib/utils';
import { Input } from "@/components/ui/input"

const Block = lazy(() => import('@/common/Details/Block'));
const Documentation = lazy(() => import('@/common/Documentation'));

const hook = 'useDebounce';
const info = 'This hook execution will wait for sometime once user stop typing anything';

const usage: string = `import { ${hook} } from '${packageName}';

export default function Component() {
    /*
        @params
            CALLBACK_FUNCTION - function - A function to execute on debounce.
            TIMER - number - Pass seconds in milliseconds format.
            DEPENDENCIES - Array - Collection of dependencies, Callback function will execute when the value of any dependencies change
    */
    ${hook}(() => { CODE_TO_EXECUTE }, 1000, [DEPENDENCIES]);
}`

const timer = 1000;

export default function DebounceComponent() {

    const [search, setSearch] = useState("");
    const [debounced, setDebounced] = useState('');

    useDebounce(() => {
        setDebounced(search);
    }, timer, [search]);

    return (
        <Suspense fallback={<></>}>

            <Documentation
                hook={hook}
                info={info}
                usage={usage}
            >
                <Block title='Example'>
                    <div className="flex flex-col gap-3">
                        <p>This hook will change the value of debounced variable after {timer/1000} second whenever you stop typing.</p>

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

            </Documentation>

        </Suspense>
    )
}
