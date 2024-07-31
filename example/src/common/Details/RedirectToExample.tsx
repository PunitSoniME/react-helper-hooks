import { Button } from '@/components/ui/button'
import { githubUrl } from '@/lib/utils';
import { MoveUpRightIcon } from 'lucide-react'

const extendedGithubUrl = `${githubUrl}/blob/main`;
const hookCodeUrl = `${extendedGithubUrl}/src`;
const exampleCodeUrl = `${extendedGithubUrl}/example/src/hooks`;

export default function RedirectToExample({ hook }: any) {

    return (
        <>
            <Button size="sm" className='mt-2'
                onClick={() => {
                    window.open(`${exampleCodeUrl}/${hook}/Demo.tsx`, '_blank');
                }}
            >
                Example Code
                <MoveUpRightIcon className='ml-2' size={14} />
            </Button>

            <Button size="sm" variant="secondary" className='ml-2 mt-2'
                onClick={() => {
                    window.open(`${hookCodeUrl}/${hook}/index.tsx`, '_blank');
                }}
            >
                Source code of hook
                <MoveUpRightIcon className='ml-2' size={14} />
            </Button>
        </>
    )
}
