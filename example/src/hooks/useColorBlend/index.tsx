import { lazy, Suspense } from 'react';
import { packageName } from '@/lib/utils';
import Demo from './Demo';
const Documentation = lazy(() => import('@/common/Documentation'));

const hook = 'useColorBlend';
const info = 'Generate blend color by passing 2 array, Values must be between 0 to 255, you can pass either 205 or "205"';

const usage: string = `import { ${hook} } from '${packageName}';

const { red, green, blue } = ${hook}([RED, GREEN, BLUE], [RED, GREEN, BLUE]);

/*
    @params - Array
        [RED, GREEN, BLUE] - Array - Pass value from 0 - 255 either in number or string, eg. [25, 53, 243]
          
    @returns - Object
        red - number - Value of Red color ( 0 - 255 )
        green - number - Value of Green color ( 0 - 255 )
        blue - number - Value of Blue color ( 0 - 255 )
*/`;

export default function ColorBlendComponent() {

    return (
        <Suspense fallback={<></>}>

            <Documentation
                hook={hook}
                info={info}
                usage={usage}
                version="1.6.0"
            >

                <Demo />

            </Documentation>
        </Suspense>
    )
}
