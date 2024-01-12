import { lazy, Suspense, useState } from 'react';
import { useColorBlend } from '../../../..';
import { packageName } from '@/lib/utils';
import { Slider } from "@/components/ui/slider"
import {
    Table,
    TableBody,
    TableCell,
    TableRow,
} from "@/components/ui/table";

const Block = lazy(() => import('@/common/Details/Block'));
const Documentation = lazy(() => import('@/common/Documentation'));

const hook = 'useColorBlend';
const info = 'Generate blend color by passing 2 array, Values must be between 0 to 255, you can pass either 205 or "205"';

const usage: string = `import { ${hook} } from '${packageName}';

export default function Component() {
    /*
        @params
            [RED, GREEN, BLUE] - Array - Pass value from 0 - 255 either in number or string, eg. [25, 53, 243]
            [RED, GREEN, BLUE] - Array - Pass value from 0 - 255 either in number or string, eg. ["25", "53", "243"]

        @returns
            red - number - Value of Red color ( 0 - 255 )
            green - number - Value of Green color ( 0 - 255 )
            blue - number - Value of Blue color ( 0 - 255 )
    */
    const { red, green, blue } = ${hook}([RED, GREEN, BLUE], [RED, GREEN, BLUE]);
}`

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

            <Documentation
                hook={hook}
                info={info}
                usage={usage}
            >

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
                        <div>Red - {red} - ( Mixture of Red A and Red B )</div>
                        <div>Green - {green} - ( Mixture of Green A and Green B )</div>
                        <div>Blue - {blue} - ( Mixture of Blue A and Blue B )</div>
                    </div>
                </Block>

            </Documentation>
        </Suspense>
    )
}
