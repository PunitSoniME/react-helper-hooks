import { lazy, Suspense } from 'react';
import { packageName } from '@/lib/utils';
import Demo from './Demo';

const Documentation = lazy(() => import('@/common/Documentation'));

const hook = 'useScript';
const info = 'Helps you to import external javascript library';

const usage: string = `import { ${hook} } from '${packageName}';

${hook}(EVENT_NAME, CALLBACK_FUNCTION);

/*
    @params
        URL - string - Pass url of the script which you want to add in your application

    @returns
        loading - boolean - Loading state ( true or false )
        error - any - Data we get when async process rejected
*/`

export default function ScriptComponent() {

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

