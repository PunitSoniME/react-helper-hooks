import React from 'react'

import ToggleComponent from './components/1-useToggle/ToggleComponent'
import TimeoutComponent from './components/2-useTimeout/TimeoutComponent';
import DebounceComponent from './components/3-useDebounce/DebounceComponent';
import UpdateEffectComponent from './components/4-useUpdateEffect/UpdateEffectComponent';
import ArrayComponent from './components/5-useArray/ArrayComponent';
import PreviousComponent from './components/6-usePrevious/PreviousComponent';

import './index.css';

const App = () => {

  // const [selectedValue, setSelectedValue] = useState("toggle");
  // const [selectedComponent, setSelectedComponent] = useState(<ToggleComponent />);
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
    }
  ]

  return (
    <div className="h-100vh w-100 flex justify-center items-center">

      <div className="flex gap-3 flex-column">

        {
          components.map(m => (
            <div key={m.key} className="card">

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
