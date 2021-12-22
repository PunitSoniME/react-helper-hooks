import React from 'react'

import ToggleComponent from './components/1-useToggle/ToggleComponent'
import FetchComponent from './components/10-useFetch/FetchComponent';
import IsAppOfflineComponent from './components/101-useIsAppOffline/IsAppOfflineComponent';
import WindowDimensionsComponent from './components/102-useWindowDimensions/WindowDimensionsComponent';
import AsyncLoopComponent from './components/104-useAsyncLoop/AsyncLoopComponent';
import WindowFocusComponent from './components/105-useWindowFocus/WindowFocusComponent';
import ScriptComponent from './components/11-useScript/ScriptComponent';
import EventListenerComponent from './components/13-useEventListener/EventListenerComponent';
import GeolocationComponent from './components/17-useGeolocation/GeolocationComponent';
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
  ]

  return (
    <div className="h-100vh">

      <div className="main">

        {
          components.map(m => (
            <div key={m.key} className="card mt-3">

              <div className="card-header">
                <h4>{m.text}</h4>
              </div>

              <div className="card-body">
                {m.component}
              </div>

            </div>
          ))
        }
      </div>

    </div>
  );
}

export default App
