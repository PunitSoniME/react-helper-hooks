import { Button } from '@/components/ui/button'
import { githubUrl } from '@/lib/utils';
import { GithubIcon, Menu } from 'lucide-react'
import { useHash } from '../../../..';
import { SheetTrigger } from '@/components/ui/sheet';

export default function Header() {
    const [, setHash] = useHash();

    return (
        <div className='bg-primary sticky top-0 z-10 '>
            <div className="container flex items-center h-16 px-4 justify-between">
                <Button variant="link" className='hover:no-underline p-0 font-bold text-xl tracking-wider text-white cursor-pointer'
                    onClick={() => {
                        //@ts-ignore
                        setHash("");
                    }}>React Helper Hooks</Button>

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
        </div>
    )
}
