import { lazy, Suspense, useState } from 'react';
import { useCopyToClipboard } from '../../../..';
import { packageName } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Block = lazy(() => import('@/common/Details/Block'));
const Documentation = lazy(() => import('@/common/Documentation'));

const hook = 'useCopyToClipboard';
const info = 'Help you to copy a thing which you want';

const usage: string = `import { ${hook} } from '${packageName}';

export default function Component() {
    /*
        @returns
            copyToClipboard - function - Returns async function.
    */
    const copyToClipboard = useCopyToClipboard();
}`

let timeout: any;
const defaultCopyButtonText = 'Click to copy';

export default function CopyToClipboardComponent() {

    const [textToCopy, setTextToCopy] = useState("Text To Copy")
    const copyToClipboard = useCopyToClipboard();

    const [copyButtonText, setCopyButtonText] = useState(defaultCopyButtonText);

    return (
        <Suspense fallback={<></>}>

            <Documentation
                hook={hook}
                info={info}
                usage={usage}
            >
                <Block title='Example'>

                    <div className="flex w-full max-w-sm items-center space-x-2">
                        <Input
                            placeholder="Type something..."
                            value={textToCopy}
                            onChange={(e) => { setTextToCopy(e.target.value) }}
                        />

                        <Button
                            size="sm"
                            variant={copyButtonText === 'Copied' ? 'outline' : 'default'}
                            disabled={copyButtonText === 'Copied'}
                            onClick={() => {
                                copyToClipboard(textToCopy).then(() => {
                                    setCopyButtonText('Copied');

                                    timeout = setTimeout(() => {
                                        setCopyButtonText(defaultCopyButtonText);
                                        clearTimeout(timeout);
                                    }, 3000);
                                }).catch((error) => {
                                    alert(error)
                                });
                            }}
                        >
                            {copyButtonText}
                        </Button>

                    </div>

                </Block>
                
            </Documentation>

        </Suspense>
    )
}
