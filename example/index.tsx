import 'react-app-polyfill/ie11';
import React from 'react';
import ReactDOM from 'react-dom/client'
import { lazy, Suspense, Fragment, useState } from 'react'
import './index.css';

const ToggleComponent = lazy(() => import('./components/1-useToggle/ToggleComponent'));
const FetchComponent = lazy(() => import('./components/10-useFetch/FetchComponent'));
const IsAppOfflineComponent = lazy(() => import('./components/101-useIsAppOffline/IsAppOfflineComponent'));
const WindowDimensionsComponent = lazy(() => import('./components/102-useWindowDimensions/WindowDimensionsComponent'));
const AsyncLoopComponent = lazy(() => import('./components/104-useAsyncLoop/AsyncLoopComponent'));
const WindowFocusComponent = lazy(() => import('./components/105-useWindowFocus/WindowFocusComponent'));
const SubdomainComponent = lazy(() => import('./components/106-useSubdomain/SubdomainComponent'));
const StateJsonComponent = lazy(() => import('./components/107-useStateJson/StateJsonComponent'));
const ColorBlendComponent = lazy(() => import('./components/108-useColorBlend/ColorBlendComponent'));
const GroupByFirstLetterComponent = lazy(() => import('./components/109-useGroupByFirstLetter/GroupByFirstLetterComponent'));
const ScriptComponent = lazy(() => import('./components/11-useScript/ScriptComponent'));
const ScrollToTopComponent = lazy(() => import('./components/110-useScrollToTop/ScrollToTopComponent'));
const EventListenerComponent = lazy(() => import('./components/13-useEventListener/EventListenerComponent'));
const GeolocationComponent = lazy(() => import('./components/17-useGeolocation/GeolocationComponent'));
const CopyToClipboardComponent = lazy(() => import('./components/18-useCopyToClipboard/CopyToClipboardComponent'));
const TimeoutComponent = lazy(() => import('./components/2-useTimeout/TimeoutComponent'));
const DebounceComponent = lazy(() => import('./components/3-useDebounce/DebounceComponent'));
const UpdateEffectComponent = lazy(() => import('./components/4-useUpdateEffect/UpdateEffectComponent'));
const ArrayComponent = lazy(() => import('./components/5-useArray/ArrayComponent'));
const PreviousComponent = lazy(() => import('./components/6-usePrevious/PreviousComponent'));
const StateWithHistoryComponent = lazy(() => import('./components/7-useStateWithHistory/StateWithHistoryComponent'));
const StorageComponent = lazy(() => import('./components/8-useStorage/StorageComponent'));
const AsyncComponent = lazy(() => import('./components/9-useAsync/AsyncComponent'));

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
    {
      key: "useScrollToTop",
      component: <ScrollToTopComponent />,
      text: "Use ScrollToTop Hook"
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
          <Suspense fallback="Loading...">
            {selectedItem.component}
          </Suspense>
        </div>

      </div>

    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <App />
);
