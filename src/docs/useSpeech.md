## useSpeech

### This hook will help you implement speeching facility

<br />

> Example

```jsx
import { useState } from 'react'; 
import { useSpeech } from 'react-helper-hooks';

export default function SpeechComponent() {
    const { loadSpeech, play, resume, pause, stop, currentPlayingState } =  useSpeech();
    const [text, setText] = useState("");

    return (
        <div>

            <textarea
                value={text}
                onChange={(e) => {
                    setText(e.target.value);
                }} 
            ></textarea>

           <button type="button" disabled={!(currentPlayingState === 'initialized')}
                onClick={() => {
                    loadSpeech(document.getElementById('text-to-speech-content'), text);
                    play();
                }}>Play</button>

            <button type="button" disabled={!(['playing', 'resumed'].includes(currentPlayingState))}
                onClick={() => {
                    pause();
                }}>Pause</button>

            <button type="button" disabled={currentPlayingState !== 'paused'}
                onClick={() => {
                    resume();
                }}>Resume</button>

            <button type="button" 
                disabled={!(['playing', 'resumed', 'paused'].includes(currentPlayingState))}
                onClick={() => {
                    stop();
                }}>Stop</button>

            <br />

            <div id="text-to-speech-content"
                dangerouslySetInnerHTML={{
                    __html: text
                }}
            >
            </div>
        </div>
    )
}


```
