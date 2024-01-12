import { Button } from '@/components/ui/button'
import { MoveUpRightIcon } from 'lucide-react'

const githubUrl = 'https://github.com/PunitSoniME/react-helper-hooks/blob/main'
const hookCodeUrl = `${githubUrl}/src`;
const exampleCodeUrl = `${githubUrl}/example/src/hooks`;

export default function RedirectToExample({ hook }: any) {

    return (
        <>
            <Button size="sm" className='mt-2'
                onClick={() => {
                    window.open(`${hookCodeUrl}/${hook}/index.tsx`, '_blank');
                }}
            >
                Example Code
                <MoveUpRightIcon className='ml-2' size={14} />
            </Button>

            <Button size="sm" variant="secondary" className='ml-2 mt-2'
                onClick={() => {
                    window.open(`${exampleCodeUrl}/${hook}/index.tsx`, '_blank');
                }}
            >
                Source code of hook
                <MoveUpRightIcon className='ml-2' size={14} />
            </Button>
        </>
    )
}
