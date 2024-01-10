import { lazy, Suspense, useEffect, useState } from 'react';
import { useSpeech } from '../../../../src/';
import { packageName } from '@/lib/utils';
import Muted from '@/common/Muted';
import { Button } from '@/components/ui/button';
import { Textarea } from "@/components/ui/textarea"

const Title = lazy(() => import('@/common/Details/Title'));
const Block = lazy(() => import('@/common/Details/Block'));
const Api = lazy(() => import('@/common/Details/Api'));
const Lead = lazy(() => import('@/common/Lead'));

const hook = 'useSpeech';

const api = [
    { execute: 'loadSpeech', type: 'function', description: 'This function accepts 2 parameters, 1st of is HTMLElement, 2nd one is string, you can pass anyone of them at a time' },
    { execute: 'play', type: 'function', description: 'Call this function to start the speech, before calling this function, make sure you call loadSpeech first' },
    { execute: 'resume', type: 'function', description: 'Call this function to resume the speech' },
    { execute: 'pause', type: 'function', description: 'Call this function to pause the speech' },
    { execute: 'stop', type: 'function', description: 'Call this function to stop the speech' },
    { execute: 'currentPlayingState', type: 'string', description: 'Current playing state among these - initialized | playing | paused | ended | resumed' },
];

export default function SpeechComponent() {

    const [text, setText] = useState("Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum nam veritatis incidunt debitis. Repellendus at corrupti odit, nam deleniti cum fugiat temporibus libero suscipit harum fugit aliquid saepe minima ipsam.");
    const { play, resume, pause, stop, loadSpeech, currentPlayingState } = useSpeech();

    return (
        <Suspense fallback={<></>}>

            <Title>{hook}</Title>

            <Lead className='text-md'>
                The <code>{hook}</code> will help you implement speeching facility
            </Lead>

            <Block title='Usage'>
                <div className='flex flex-col gap-5'>
                    <code>
                        {`import { ${hook} } from "${packageName}";`}
                    </code>

                    <code>
                        {`const { loadSpeech, play, resume, pause, stop, currentPlayingState } = ${hook}();`}
                    </code>
                </div>
            </Block>

            <Api api={api} />

            <Block title='Example'>

                <Textarea
                    defaultValue={text}
                    className='mb-4'
                    onChange={(e) => {
                        setText(e.target.value);
                    }} />

                <div className="flex gap-3 mb-2">
                    <Button size="sm" disabled={!(currentPlayingState === 'initialized')}
                        onClick={() => {
                            loadSpeech(document.getElementById('text-to-speech-content'), text);
                            play();
                        }}>Play</Button>

                    <Button size="sm" disabled={!(['playing', 'resumed'].includes(currentPlayingState))}
                        onClick={() => {
                            pause();
                        }}>Pause</Button>

                    <Button size="sm" disabled={currentPlayingState !== 'paused'}
                        onClick={() => {
                            resume();
                        }}>Resume</Button>

                    <Button size="sm" variant="destructive"
                        disabled={!(['playing', 'resumed', 'paused'].includes(currentPlayingState))}
                        onClick={() => {
                            stop();
                        }}>Stop</Button>
                </div>

                <div className='flex justify-between flex-col items-start gap-3'>

                    <div id="text-to-speech-content"
                        dangerouslySetInnerHTML={{
                            __html: text
                        }}
                    >
                    </div>
                </div>

            </Block>

        </Suspense>
    )
}
