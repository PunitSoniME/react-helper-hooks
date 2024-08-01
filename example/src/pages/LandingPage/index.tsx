import Muted from '@/common/Muted'
import CodeSample from '@/common/CodeSample'
import Title from '@/common/Details/Title';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { groupByBasedOnKey, hooks } from '@/lib/utils';
import { useHash } from '../../../..';

const npmUrl = 'https://www.npmjs.org/package/react-helper-hooks';

const hooksList = Object.entries(groupByBasedOnKey(hooks, 'version'));

export default function LandingPage() {

    const [, updateHash] = useHash();

    return (
        <div className='p-4 space-y-7'>
            <div className='flex gap-6 flex-col'>
                <div>
                    <Title>React Helper Hooks</Title>
                    <Muted>Custom React Helper Hooks to save hours of developers</Muted>
                </div>

                <div className='flex flex-col gap-3'>

                    <Title>Installation Command</Title>

                    <CodeSample code="npm i react-helper-hooks" allowCopy={true} />
                    <CodeSample code="yarn add react-helper-hooks" allowCopy={true} />

                </div>
            </div>

            <div className='flex gap-3 min-h-5 flex-wrap'>

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

            <div>
                <Title>Hooks available since versions</Title>

                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">Version</TableHead>
                            <TableHead>Hooks</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {
                            hooksList.map((hookDetail: any) => (
                                <TableRow key={hookDetail[0]}>
                                    <TableCell className="font-medium">
                                        {hookDetail[0]}
                                    </TableCell>
                                    <TableCell className='flex gap-2 flex-wrap'>
                                        {
                                            hookDetail[1].map((m: any) => {
                                                return <span key={m.key} className="cursor-pointer text-blue-700" onClick={() => {
                                                    updateHash(m.key);
                                                }}>{m.key},</span>
                                            })
                                        }
                                    </TableCell>
                                </TableRow>
                            ))
                        }

                    </TableBody>
                </Table>

            </div>

        </div>
    )
}
