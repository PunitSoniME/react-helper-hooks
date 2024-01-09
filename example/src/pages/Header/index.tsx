import { Button } from '@/components/ui/button'
import { githubUrl } from '@/lib/utils';
import { GithubIcon, Menu } from 'lucide-react'
import { useHash } from '../../../..';
import { SheetTrigger } from '@/components/ui/sheet';

export default function Header() {
    const [, setHash] = useHash();

    return (
        <div className='h-16 flex items-center px-4 bg-blue-600 sticky top-0 z-10 justify-between'>
            <span className='font-bold text-xl tracking-wider text-white cursor-pointer'
                onClick={() => {
                    //@ts-ignore
                    setHash("");
                }}>React Helper Hooks</span>

            <div className='flex gap-3'>
                <Button variant="outline" size="icon"
                    onClick={() => {
                        window.open(githubUrl, '_blank');
                    }}>
                    <GithubIcon size={18} />
                </Button>


                <SheetTrigger asChild>
                    <Button variant="outline" size="icon" className='md:hidden visible'>
                        <Menu size={18} />
                    </Button>
                </SheetTrigger>

            </div>
        </div>
    )
}
