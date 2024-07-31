import React, { useState } from 'react'
import { useColorBlend, useCopyToClipboard } from '../../../..';
import { Slider } from "@/components/ui/slider"
import {
    Table,
    TableBody,
    TableCell,
    TableRow,
} from "@/components/ui/table";
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const SliderLabel = ({ color, section, value }: any) => {
    return <div className={`text-${color.toLowerCase()}-600 mb-2 font-semibold`}>{color} {section} - {value}</div>
}

const COPY_TO_CLIP_BOARD_TEXTS = {
    default: 'Copy RGB Blend Color Combination',
    copied: 'Copied'
}

export default function Demo() {

    const copyToClipboard = useCopyToClipboard();
    const [copyToClipBoardText, setCopyToClipBoardText] = useState(COPY_TO_CLIP_BOARD_TEXTS.default);

    const [redA, setRedA] = useState(100);
    const [greenA, setGreenA] = useState(65);
    const [blueA, setBlueA] = useState(250);

    const [redB, setRedB] = useState(3);
    const [greenB, setGreenB] = useState(204);
    const [blueB, setBlueB] = useState(99);

    const [red, green, blue] = useColorBlend([redA, greenA, blueA], [redB, greenB, blueB]);

    return (
        <>
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

            <div className='px-6 py-4 rounded' style={{ backgroundColor: `rgb(${red}, ${green}, ${blue})` }}>
                <div>Red - {red} - ( Mixture of Red A and Red B )</div>
                <div>Green - {green} - ( Mixture of Green A and Green B )</div>
                <div>Blue - {blue} - ( Mixture of Blue A and Blue B )</div>
            </div>

            <Button
                disabled={copyToClipBoardText === COPY_TO_CLIP_BOARD_TEXTS.copied}
                className="mt-3 min-w-[150px]"
                onClick={() => {
                    copyToClipboard(`rgb(${red}, ${green}, ${blue})`).then(() => {
                        setCopyToClipBoardText(COPY_TO_CLIP_BOARD_TEXTS.copied);

                        setTimeout(() => {
                            setCopyToClipBoardText(COPY_TO_CLIP_BOARD_TEXTS.default);
                        }, 3000)
                    });
                }}
            >
                {
                    copyToClipBoardText === 'Copied' ? <Check className="pr-2 h-6 w-6" /> : ""
                }
                {copyToClipBoardText}
            </Button>
        </>
    )
}
