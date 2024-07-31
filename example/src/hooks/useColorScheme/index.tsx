import { lazy, Suspense } from 'react';
import { packageName } from '@/lib/utils';
import Demo from './Demo';

const Documentation = lazy(() => import('@/common/Documentation'));

const hook = 'useColorScheme';
const info = "Use this hook to get the current color scheme either 'dark' or 'light'"

const usage: string = `import { ${hook} } from '${packageName}';

const colorScheme = ${hook}();

/*
    @returns - Current color scheme - 'light' or 'dark'
*/`;

export default function ColorSchemeComponent() {

    return (
        <Suspense fallback={<></>}>

            <Documentation
                hook={hook}
                info={info}
                usage={usage}
                version="1.12.0"
            >
                <Demo />
            </Documentation>

        </Suspense>
    )
}
