import { useState } from 'react'
import Muted from '@/common/Muted'
import { Check, Copy } from 'lucide-react'
import { useCopyToClipboard } from '../../../../'
import { packageName } from '@/lib/utils'

const npmUrl = 'https://www.npmjs.org/package/react-helper-hooks';

const InstallationCommand = ({ packageManager, installationCommand }: any) => {
    const copyToClipboard = useCopyToClipboard();
    const command = `${packageManager} ${installationCommand} ${packageName}`;

    const [isCopied, setIsCopied] = useState(false);

    return <div className="flex items-center tracking-wide gap-8 py-2 px-4 bg-slate-800 rounded text-white group/item">
        <p>{command}</p>

        {
            isCopied ? <Check size={20} /> : <Copy size={20}
                className='invisible cursor-pointer group-hover/item:visible'
                onClick={() => {
                    copyToClipboard(command);
                    setIsCopied(true);

                    setTimeout(() => {
                        setIsCopied(false)
                    }, 1000)
                }} />
        }
    </div>
}

export default function LandingPage() {

    return (
        <div className='p-4 space-y-10'>
            <div className='flex gap-6 flex-col'>
                <div>
                    <span className='font-bold text-xl tracking-wider text-blue-600'>React Helper Hooks</span>
                    <Muted>Custom React Helper Hooks to save hours of developers</Muted>
                </div>

                <div className='flex flex-col gap-3'>

                    <span className='font-bold text-xl tracking-wider text-blue-600'>Installation Command</span>

                    <InstallationCommand key="yarn" packageManager="yarn" installationCommand="add" />
                    <InstallationCommand key="npm" packageManager="npm" installationCommand="i" />

                </div>
            </div>

            <div className='flex gap-3 h-5 flex-wrap'>

                {
                    [
                        "https://badge.fury.io/js/react-helper-hooks.svg",
                        "https://img.shields.io/npm/l/react-helper-hooks.svg",
                        "https://badgen.net/npm/dw/react-helper-hooks",
                        "https://badgen.net/npm/dm/react-helper-hooks",
                        "https://img.shields.io/npm/dt/react-helper-hooks.svg",
                    ].map((link, index) => (
                        <img key={index} src={link} alt={link}
                            className="cursor-pointer"
                            onClick={() => {
                                window.open(npmUrl, '_blank');
                            }} />
                    ))
                }

                {
                    [
                        "https://badgen.net/npm/types/react-helper-hooks",
                        "https://badgen.net/npm/dependents/react-helper-hooks",
                        "https://badgen.net/jsdelivr/hits/npm/react-helper-hooks",
                        "https://badgen.net/bundlephobia/dependency-count/react-helper-hooks",
                        "https://badgen.net/bundlephobia/min/react-helper-hooks",
                        "https://badgen.net/bundlephobia/minzip/react-helper-hooks"
                    ].map((link, index) => (
                        <img key={index} src={link} alt={link} />
                    ))
                }

            </div>
        </div>
    )
}
