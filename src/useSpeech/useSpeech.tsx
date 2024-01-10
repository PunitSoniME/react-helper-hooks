import { useState } from 'react';
import { createSpeechEngine } from './speech';
import { PlayingState } from './utils';

const playingState: PlayingState = 'initialized';

const useSpeech = () => {
  /*
  Implement a custom useSpeech hook that uses a speech engine defined in 'speech.ts'
  to play the sentences that have been fetched and parsed previously.
  
  This hook should return react friendly controls for playing, and pausing audio as well as provide information about
  the currently read word and sentence
  */
  const [currentPlayingState, setCurrentPlayingState] =
    useState<PlayingState>(playingState);
  const [initialText, setInitialText] = useState('');
  const [element, setElement] = useState<HTMLElement | null>(null);

  let allText = '';
  let parentNode: any = null;
  let allTextNodes: any = [];

  const { state, play, resume, pause, cancel, load } = createSpeechEngine({
    onResume: (event: any) => {},
    onBoundary: (event) => {
      if (!parentNode) return;

      const wordStart = event.charIndex;

      let wordLength = event.charLength;
      if (wordLength === undefined) {
        // Safari doesn't provide charLength, so fall back to a regex to find the current word and its length (probably misses some edge cases, but good enough for this demo)
        const match = allText.substring(wordStart).match(/^[a-z\d']*/i);
        wordLength = (match as any)[0].length;
      }

      // wrap word in <mark> tag
      const wordEnd = wordStart + wordLength;
      const word = allText.substring(wordStart, wordEnd);
      const markedText =
        allText.substring(0, wordStart) +
        '<mark>' +
        word +
        '</mark>' +
        allText.substring(wordEnd);
      if (parentNode) (parentNode as any).innerHTML = markedText;
    },
    onEnd: (event: any) => {
      if (parentNode) {
        parentNode.innerHTML = parentNode.innerHTML.replace(
          /(<mark[^>]*>|<\/mark>)/g,
          ''
        );
      }

      cancel();
    },
    onStateUpdate: (event: any) => {
      setCurrentPlayingState(event);
    },
  });

  /**
   *
   * @param htmlElement If you want to highlight text on speech, please pass the element which contains text, else pass null
   * @param text If you only want only text to be announced, pass your text as string in 2nd parameter
   */
  const loadSpeech = (htmlElement?: HTMLElement | null, text = '') => {
    allText = text;

    if (htmlElement) {
      parentNode = htmlElement;
      setElement(htmlElement);

      allText =
        parentNode?.innerHTML
          .split('\n')
          .filter((f: any) => f !== ' ')
          .join(' ') || '';

      if (htmlElement) {
        const treeWalker = document.createTreeWalker(
          htmlElement,
          NodeFilter.SHOW_TEXT
        );

        let currentNode = treeWalker.nextNode();
        while (currentNode) {
          allTextNodes.push(currentNode);
          currentNode = treeWalker.nextNode();
        }
      }
    }

    setInitialText(allText);
    load(allText);
  };

  const stop = () => {
    if (element) element.innerHTML = initialText;
    cancel();
  };

  return {
    state,
    play,
    resume,
    pause,
    stop,
    loadSpeech,
    currentPlayingState,
  };
};

export default useSpeech;
