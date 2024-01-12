import { lazy, Suspense, useState } from 'react';
import { useSpeech } from '../../../..';
import { packageName } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Textarea } from "@/components/ui/textarea"

const Block = lazy(() => import('@/common/Details/Block'));
const Documentation = lazy(() => import('@/common/Documentation'));

const hook = 'useSpeech';
const info = 'Helps will help you implement speeching facility';

const usage: string = `import { ${hook} } from '${packageName}';

export default function Component() {
    /*
        @returns
            loadSpeech - function - This function accepts 2 parameters, 1st one is HTMLElement, 2nd one is string, you can pass anyone of them at a time
            play - function - Call this function to start the speech, before calling this function, make sure you call loadSpeech first
            resume - function - Call this function to resume the speech
            pause - function - Call this function to pause the speech
            stop - function - Call this function to stop the speech
            currentPlayingState - string - Current playing state among these - initialized | playing | paused | ended | resumed
            
    */
    const { play, resume, pause, stop, loadSpeech, currentPlayingState } = ${hook}();
}`

export default function SpeechComponent() {

    const [text, setText] = useState("Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum nam veritatis incidunt debitis. Repellendus at corrupti odit, nam deleniti cum fugiat temporibus libero suscipit harum fugit aliquid saepe minima ipsam.");
    const { play, resume, pause, stop, loadSpeech, currentPlayingState } = useSpeech();

    return (
        <Suspense fallback={<></>}>

            <Documentation
                hook={hook}
                info={info}
                usage={usage}
            >

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
            </Documentation>
            
        </Suspense>
    )
}
