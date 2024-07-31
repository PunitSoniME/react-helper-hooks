import { useState } from 'react';
import { useCopyToClipboard } from '../../../..';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

let timeout: any;
const COPY_TO_CLIP_BOARD_TEXTS = {
    default: 'Click to copy',
    copied: 'Copied'
}

export default function Demo() {

    const [textToCopy, setTextToCopy] = useState("Text To Copy")
    const copyToClipboard = useCopyToClipboard();

    const [copyButtonText, setCopyButtonText] = useState(COPY_TO_CLIP_BOARD_TEXTS.default);

    return (
        <div className="flex w-full max-w-sm items-center space-x-2">
            <Input
                placeholder="Type something..."
                value={textToCopy}
                onChange={(e) => { setTextToCopy(e.target.value) }}
            />

            <Button
                size="sm"
                variant={copyButtonText === COPY_TO_CLIP_BOARD_TEXTS.copied ? 'outline' : 'default'}
                disabled={copyButtonText === COPY_TO_CLIP_BOARD_TEXTS.copied}
                onClick={() => {
                    copyToClipboard(textToCopy).then(() => {
                        setCopyButtonText(COPY_TO_CLIP_BOARD_TEXTS.copied);

                        timeout = setTimeout(() => {
                            setCopyButtonText(COPY_TO_CLIP_BOARD_TEXTS.default);
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
    )
}
