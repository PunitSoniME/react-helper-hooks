import { useState } from 'react';
import { useSpeech } from '../../../..';
import { Button } from '@/components/ui/button';
import { Textarea } from "@/components/ui/textarea"
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function Demo() {

    const [text, setText] = useState("Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum nam veritatis incidunt debitis. Repellendus at corrupti odit, nam deleniti cum fugiat temporibus libero suscipit harum fugit aliquid saepe minima ipsam.");
    const { play, resume, pause, stop, loadSpeech, currentPlayingState } = useSpeech();

    const disablePlayButton = !(currentPlayingState === 'initialized');
    const disablePauseButton = !(['playing', 'resumed'].includes(currentPlayingState));
    const disableResumeButton = currentPlayingState !== 'paused';
    const disableStopButton = !(['playing', 'resumed', 'paused'].includes(currentPlayingState));

    const isSpeechSynthesisSupported = 'speechSynthesis' in window;

    return (
        <>
            {
                isSpeechSynthesisSupported ?
                    <>

                        <Alert className='my-3 bg-green-400 text-green-800'>
                            <AlertDescription>Your browser <b>supports</b> speech synthesis.</AlertDescription>
                        </Alert>

                        <Textarea
                            defaultValue={text}
                            className='mb-4'
                            disabled={disablePlayButton}
                            onChange={(e) => {
                                setText(e.target.value);
                            }} />

                        <div className="flex gap-3 mb-2">
                            <Button size="sm" disabled={disablePlayButton}
                                onClick={() => {
                                    loadSpeech(document.getElementById('text-to-speech-content'), text);
                                    play();
                                }}>Play</Button>

                            <Button size="sm" disabled={disablePauseButton}
                                onClick={() => {
                                    pause();
                                }}>Pause</Button>

                            <Button size="sm" disabled={disableResumeButton}
                                onClick={() => {
                                    resume();
                                }}>Resume</Button>

                            <Button size="sm" variant="destructive"
                                disabled={disableStopButton}
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

                    </> : <Alert className="my-3" variant="destructive">
                        <AlertTitle>Oooops...</AlertTitle>
                        <AlertDescription>Your browser <b>sdoenn't supports</b> speech synthesis.</AlertDescription>
                    </Alert>
            }
        </>
    )
}
