import { lazy, Suspense } from 'react';
import { packageName } from '@/lib/utils';
import Demo from './Demo';

const Documentation = lazy(() => import('@/common/Documentation'));

const hook = 'useToggle';
const info = 'Used to handle the toggeling of the variable';

const usage: string = `import { ${hook} } from '${packageName}';

const [isSelected, toggleSelected] = ${hook}(INITIAL_VALUE);

/*
    @params
        INITIAL_VALUE - any - Initial value of variable

    @returns
        isSelected - any - Variable name
        toggleSelected - function - The function to update the value of the variable
*/`

export default function ToggleComponent() {

    return (
        <Suspense fallback={<></>}>

            <Documentation
                hook={hook}
                info={info}
                usage={usage}
            >
                <Demo />
            </Documentation>

        </Suspense>

    )
}
