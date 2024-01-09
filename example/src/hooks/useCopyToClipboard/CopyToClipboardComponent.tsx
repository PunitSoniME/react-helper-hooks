import { lazy, Suspense, useState } from 'react';
import { useCopyToClipboard } from '../../../../.';
import { packageName } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Title = lazy(() => import('@/common/Details/Title'));
const Block = lazy(() => import('@/common/Details/Block'));
const Api = lazy(() => import('@/common/Details/Api'));
const Lead = lazy(() => import('@/common/Lead'));

let timeout: any;
const hook = 'useCopyToClipboard';

const api = [
    { execute: 'copyToClipboard', type: 'Number', description: 'Value of Red color ( 0 - 255 )' },
];

const defaultCopyButtonText = 'Click to copy';

export default function CopyToClipboardComponent() {

    const [textToCopy, setTextToCopy] = useState("Text To Copy")
    const copyToClipboard = useCopyToClipboard();

    const [copyButtonText, setCopyButtonText] = useState(defaultCopyButtonText);

    return (
        <Suspense fallback={<></>}>

            <Title>{hook}</Title>

            <Lead className='text-md'>
                The <code>{hook}</code> will help you to copy a thing which you want
            </Lead>

            <Block title='Usage'>
                <div className='flex flex-col gap-5'>
                    <code>
                        {`import { ${hook} } from "${packageName}";`}
                    </code>
                    <code>
                        {`const copyToClipboard = ${hook}();`}
                    </code>
                </div>
            </Block>

            <Api api={api} />

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

        </Suspense>
    )
}
