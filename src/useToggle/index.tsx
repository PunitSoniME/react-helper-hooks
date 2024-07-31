import { useState } from 'react';

/**
 * @since 1.0.0
 */
export default function useToggle(defaultValue: boolean) {
  const [value, setValue] = useState(defaultValue);

  function toggleValue(value: boolean) {
    setValue((currentValue) =>
      typeof value === 'boolean' ? value : !currentValue
    );
  }

  return [value, toggleValue];
}
