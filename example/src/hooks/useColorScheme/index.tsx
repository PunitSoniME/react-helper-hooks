import { lazy, Suspense } from 'react';
import { useColorScheme } from '../../../../';
import { packageName } from '@/lib/utils';

const Block = lazy(() => import('@/common/Details/Block'));
const Documentation = lazy(() => import('@/common/Documentation'));

const hook = 'useColorScheme';
const info = "Use this hook to get the current color scheme either 'dark' or 'light'"

const usage: string = `import { ${hook} } from '${packageName}';

export default function Component() {
    /*
        @returns - Current color scheme
    */
    const colorScheme = ${hook}();
}`

export default function ColorSchemeComponent() {

    const colorScheme = useColorScheme();

    return (
        <Suspense fallback={<></>}>

            <Documentation
                hook={hook}
                info={info}
                usage={usage}
            >

                <Block title='Example'>

                    Current color scheme is - <b>{colorScheme}</b>

                </Block>
            </Documentation>

        </Suspense>
    )
}
