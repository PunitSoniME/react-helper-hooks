import { lazy, Suspense, useState } from 'react';
import { useColorBlend } from '../../../../.';
import { packageName } from '@/lib/utils';
import Blockquote from '@/common/Blockquote';
import { Slider } from "@/components/ui/slider"
import {
    Table,
    TableBody,
    TableCell,
    TableRow,
} from "@/components/ui/table";

const Title = lazy(() => import('@/common/Details/Title'));
const Block = lazy(() => import('@/common/Details/Block'));
const Api = lazy(() => import('@/common/Details/Api'));
const Lead = lazy(() => import('@/common/Lead'));

const hook = 'useColorBlend';

const api = [
    { execute: 'red', type: 'Number', description: 'Value of Red color ( 0 - 255 )' },
    { execute: 'green', type: 'Number', description: 'Value of Green color ( 0 - 255 )' },
    { execute: 'blue', type: 'Number', description: 'Value of Blue color ( 0 - 255 )' },
];

const SliderLabel = ({ color, section, value }: any) => {
    return <div className={`text-${color.toLowerCase()}-600 mb-2 font-semibold`}>{color} {section} - {value}</div>
}

export default function ColorBlendComponent() {

    const [redA, setRedA] = useState(100);
    const [greenA, setGreenA] = useState(65);
    const [blueA, setBlueA] = useState(250);

    const [redB, setRedB] = useState(3);
    const [greenB, setGreenB] = useState(204);
    const [blueB, setBlueB] = useState(99);

    const [red, green, blue] = useColorBlend([redA, greenA, blueA], [redB, greenB, blueB]);

    return (
        <Suspense fallback={<></>}>

            <Title>{hook}</Title>

            <Lead className='text-md'>
                The <code>{hook}</code> generates blend color by passing 2 array, Values must be between 0 to 255, you can pass either 205 or "205"
            </Lead>

            <Block title='Usage'>
                <div className='flex flex-col gap-5'>
                    <code>
                        {`import { ${hook} } from "${packageName}";`}
                    </code>
                    <code>
                        {`const { red, green, blue } = ${hook}([RED, GREEN, BLUE], [RED, GREEN, BLUE]);`}
                    </code>

                    <Blockquote className="mt-4">RED - value between 0 to 255</Blockquote>
                    <Blockquote className="mt-0">GREEN - value between 0 to 255</Blockquote>
                    <Blockquote className="mt-0">BLUE - value between 0 to 255</Blockquote>
                </div>
            </Block>

            <Api api={api} />

            <Block title='Example'>

                <Table className='border-x border-y my-2'>
                    <TableBody>
                        <TableRow>

                            <TableCell width="50%">

                                <SliderLabel color="Red" section="A" value={redA} />

                                <Slider
                                    defaultValue={[redA]}
                                    onValueChange={(newValue) => {
                                        setRedA(newValue[0])
                                    }}
                                    max={255}
                                    min={0}
                                    step={1}
                                />
                            </TableCell>

                            <TableCell width="50%">
                                <SliderLabel color="Red" section="B" value={redB} />

                                <Slider defaultValue={[redB]} onValueChange={(newValue) => {
                                    setRedB(newValue[0])
                                }} max={255} min={0} step={1} />
                            </TableCell>

                        </TableRow>

                        <TableRow>

                            <TableCell>
                                <SliderLabel color="Green" section="A" value={greenA} />

                                <Slider defaultValue={[greenA]} onValueChange={(newValue) => {
                                    setGreenA(newValue[0])
                                }} max={255} min={0} step={1} />
                            </TableCell>

                            <TableCell>
                                <SliderLabel color="Green" section="B" value={greenB} />

                                <Slider defaultValue={[greenB]} onValueChange={(newValue) => {
                                    setGreenB(newValue[0])
                                }} max={255} min={0} step={1} />
                            </TableCell>
                        </TableRow>

                        <TableRow>

                            <TableCell>
                                <SliderLabel color="Blue" section="A" value={blueA} />

                                <Slider defaultValue={[blueA]} onValueChange={(newValue) => {
                                    setBlueA(newValue[0])
                                }} max={255} min={0} step={1} />
                            </TableCell>

                            <TableCell>
                                <SliderLabel color="Blue" section="B" value={blueB} />

                                <Slider defaultValue={[blueB]} onValueChange={(newValue) => {
                                    setBlueB(newValue[0])
                                }} max={255} min={0} step={1} />
                            </TableCell>

                        </TableRow>

                    </TableBody>
                </Table>

                <div className='px-6 py-4 rounded' style={{ background: `rgb(${red},${green},${blue})` }}>
                    <div>Red - {red}</div>
                    <div>Green - {green}</div>
                    <div>Blue - {blue}</div>
                </div>
            </Block>

        </Suspense>
    )
}
