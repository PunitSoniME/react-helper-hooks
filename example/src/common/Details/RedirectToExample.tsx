import { Button } from '@/components/ui/button'
import { examleSandboxLinks, exampleMarkDownPrefixUrl } from '@/lib/utils';
import { MoveUpRightIcon } from 'lucide-react'

export default function RedirectToExample({ hook }: any) {

    const codeSandboxLink = examleSandboxLinks[hook];

    return (
        <>
            <Button size="sm" className='mt-2'
                onClick={() => {
                    window.open(`${exampleMarkDownPrefixUrl}/${hook}.md`, '_blank');
                }}
            >
                Example Code
                <MoveUpRightIcon className='ml-2' size={14} />
            </Button>

            {
                codeSandboxLink ? <Button size="sm" variant="secondary" className='ml-2 mt-2'
                    onClick={() => {
                        window.open(codeSandboxLink, '_blank');
                    }}
                >
                    Example Playground
                    <MoveUpRightIcon className='ml-2' size={14} />
                </Button> : ""
            }
        </>
    )
}
