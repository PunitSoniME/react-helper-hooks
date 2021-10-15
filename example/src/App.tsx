import React from 'react'

import ToggleComponent from './components/1-useToggle/ToggleComponent'
import FetchComponent from './components/10-useFetch/FetchComponent';
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
      key: "toggle",
      component: <ToggleComponent />,
      text: "Toggle Hook"
    },
    {
      key: "timeout",
      component: <TimeoutComponent defaultTimeout={3000} />,
      text: "Timeout Hook - 3 Seconds"
    },
    {
      key: "debounce",
      component: <DebounceComponent />,
      text: "Debounce Hook"
    },
    {
      key: "update-effect",
      component: <UpdateEffectComponent />,
      text: "Update EffectHook"
    },
    {
      key: "array",
      component: <ArrayComponent />,
      text: "Array Hook"
    },
    {
      key: "previous",
      component: <PreviousComponent />,
      text: "Previous Hook"
    },
    {
      key: "stateWithHistory",
      component: <StateWithHistoryComponent />,
      text: "State With History Hook"
    },
    {
      key: "storage",
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
