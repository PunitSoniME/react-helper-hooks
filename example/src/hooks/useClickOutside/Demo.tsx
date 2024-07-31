import React, { useState } from 'react'

import { useClickOutside } from '../../../../';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertCircle } from 'lucide-react';

export default function Demo() {

  const [visible, setVisible] = useState(false);
  const ref = useClickOutside(() => { setVisible(false) });

  return (
    <div className='flex justify-between flex-col items-start gap-3'>

      <Button type="button" onClick={() => {
        setVisible(true);
      }}>Click to see the alert</Button>

      {
        visible ? <Alert ref={ref} variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>This is alert</AlertTitle>
          <AlertDescription>Click Outside to close this alert</AlertDescription>
        </Alert> : ""
      }

    </div>
  )
}
