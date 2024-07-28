import { lazy, Suspense, useState } from 'react';
import { useClickOutside } from '../../../../';
import { packageName } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertCircle } from 'lucide-react';

const Block = lazy(() => import('@/common/Details/Block'));
const Documentation = lazy(() => import('@/common/Documentation'));

const hook = 'useClickOutside';
const info = "The 'useClickOutside' hook is a custom React hook designed to handle click events that occur outside of a specified HTML element. It provides a straightforward way to detect and respond to clicks outside a given component, making it particularly useful for closing dropdowns, modals, tooltips, or any other pop-up elements."

const usage: string = `import { ${hook} } from '${packageName}';

export default function Component() {
    /*
        @returns
            ref - Returns ref to handle the click outside functionality
    */
    const ref = ${hook}(CALLBACK_FUNCTION);
}`

export default function ClickOutsideComponent() {

    const [visible, setVisible] = useState(false);
    const ref = useClickOutside(() => { setVisible(false) });

    return (
        <Suspense fallback={<></>}>

            <Documentation
                hook={hook}
                info={info}
                usage={usage}
            >

                <Block title='Example'>

                    <div className='flex justify-between flex-col items-start gap-3'>

                        <Button type="button" onClick={() => {
                            setVisible(true);
                        }}>Click to see the alert</Button>

                        {
                            visible ? <Alert ref={ref} variant="destructive">
                                <AlertCircle className="h-4 w-4" />
                                <AlertTitle>This is alert</AlertTitle>
                                <AlertDescription>Click Outside to close this alert</AlertDescription>
                            </Alert> : ""
                        }

                    </div>

                </Block>
            </Documentation>

        </Suspense>
    )
}
