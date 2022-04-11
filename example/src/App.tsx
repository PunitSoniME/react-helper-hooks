import React, { Fragment, useState } from 'react'

import ToggleComponent from './components/1-useToggle/ToggleComponent'
import FetchComponent from './components/10-useFetch/FetchComponent';
import IsAppOfflineComponent from './components/101-useIsAppOffline/IsAppOfflineComponent';
import WindowDimensionsComponent from './components/102-useWindowDimensions/WindowDimensionsComponent';
import AsyncLoopComponent from './components/104-useAsyncLoop/AsyncLoopComponent';
import WindowFocusComponent from './components/105-useWindowFocus/WindowFocusComponent';
import SubdomainComponent from './components/106-useSubdomain/SubdomainComponent';
import StateJsonComponent from './components/107-useStateJson/StateJsonComponent';
import ColorBlendComponent from './components/108-useColorBlend/ColorBlendComponent';
import GroupByFirstLetterComponent from './components/109-useGroupByFirstLetter/GroupByFirstLetterComponent';
import ScriptComponent from './components/11-useScript/ScriptComponent';
import EventListenerComponent from './components/13-useEventListener/EventListenerComponent';
import GeolocationComponent from './components/17-useGeolocation/GeolocationComponent';
import CopyToClipboardComponent from './components/18-useCopyToClipboard/CopyToClipboardComponent';
import TimeoutComponent from './components/2-useTimeout/TimeoutComponent';
import DebounceComponent from './components/3-useDebounce/DebounceComponent';
import UpdateEffectComponent from './components/4-useUpdateEffect/UpdateEffectComponent';
import ArrayComponent from './components/5-useArray/ArrayComponent';
import PreviousComponent from './components/6-usePrevious/PreviousComponent';
import StateWithHistoryComponent from './components/7-useStateWithHistory/StateWithHistoryComponent';
import StorageComponent from './components/8-useStorage/StorageComponent';
import AsyncComponent from './components/9-useAsync/AsyncComponent';

import './index.css';

const App = () => {

  const components = [
    {
      key: "useToggle",
      component: <ToggleComponent />,
      text: "Toggle Hook"
    },
    {
      key: "useTimeout",
      component: <TimeoutComponent defaultTimeout={3000} />,
      text: "Timeout Hook - 3 Seconds"
    },
    {
      key: "useDebounce",
      component: <DebounceComponent />,
      text: "Debounce Hook"
    },
    {
      key: "useUpdateEffect",
      component: <UpdateEffectComponent />,
      text: "Update EffectHook"
    },
    {
      key: "useArray",
      component: <ArrayComponent />,
      text: "Array Hook"
    },
    {
      key: "usePrevious",
      component: <PreviousComponent />,
      text: "Previous Hook"
    },
    {
      key: "useStateWithHistory",
      component: <StateWithHistoryComponent />,
      text: "State With History Hook"
    },
    {
      key: "useStorage",
      component: <StorageComponent />,
      text: "Storage Hook"
    },
    {
      key: "useAsync",
      component: <AsyncComponent />,
      text: "Use Async Hook"
    },
    {
      key: "useFetch",
      component: <FetchComponent />,
      text: "Use Fetch Hook"
    },
    {
      key: "useScript",
      component: <ScriptComponent />,
      text: "Use Script Hook"
    },
    {
      key: "useEventListener",
      component: <EventListenerComponent />,
      text: "Use EventListener Hook"
    },
    {
      key: "useIsAppOffline",
      component: <IsAppOfflineComponent />,
      text: "Use IsAppOffline Hook"
    },
    {
      key: "useWindowDimensions",
      component: <WindowDimensionsComponent />,
      text: "Use WindowDimensions Hook"
    },
    {
      key: "useGeolocation",
      component: <GeolocationComponent />,
      text: "Use GoeLocation Hook"
    },
    {
      key: "useAsyncLoop",
      component: <AsyncLoopComponent />,
      text: "Use AsyncLoop Hook"
    },
    {
      key: "useWindowFocus",
      component: <WindowFocusComponent />,
      text: "Use WindowFocus Hook"
    },
    {
      key: "useSubdmoain",
      component: <SubdomainComponent />,
      text: "Use Subdomain Hook"
    },
    {
      key: "useCopyToClipboard",
      component: <CopyToClipboardComponent />,
      text: "Use CopyToClipboard Hook"
    },
    {
      key: "useStateJson",
      component: <StateJsonComponent />,
      text: "Use StateJson Hook"
    },
    {
      key: "useColorBlend",
      component: <ColorBlendComponent />,
      text: "Use ColorBlend Hook"
    },
    {
      key: "useGroupByFirstLetter",
      component: <GroupByFirstLetterComponent />,
      text: "Use GroupByFirstLetter Hook"
    },
  ]

  const [selectedItem, setSelectedItem] = useState<any>(components[components.length - 1])

  return (
    <div className="h-100vh main">

      <div className="flex gap-3 flex-wrap">
        {
          components.map(m => (
            <Fragment key={m.key}>
              <div className="flex gap-2">
                <input type="radio" checked={selectedItem.key === m.key} name="components" id={m.key} key={m.key} value={m.key} onChange={(d: any) => {
                  setSelectedItem(components.find(dd => dd.key === d.target.value))
                }} />
                <label htmlFor={m.key}>{m.text}</label>
              </div>
            </Fragment>
          ))
        }
      </div>


      <div className="card mt-3">

        <div className="card-header">
          <h4>{selectedItem.text} - ( Hook: {selectedItem.key} )</h4>
        </div>

        <div className="card-body">
          {selectedItem.component}
        </div>

      </div>

    </div>
  );
}

export default App
