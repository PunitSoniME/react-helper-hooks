import React, { useCallback, useEffect } from 'react'
import { useAsyncLoop } from '../../../..';

export default function Demo() {
  const executeLoop = useAsyncLoop();

  const data = [
    "https://reqres.in/api/users?page=1",
    "https://reqres.in/api/users?page=2",
    "https://reqres.in/api/users?page=3",
    "https://reqres.in/api/users?page=4",
    "https://reqres.in/api/users?page=5"
  ]

  const executeAsyncLoop = useCallback(async () => {
    await executeLoop(data, async (d: any) => {
      await fetch(d).then((response) => {
        if (response.status !== 200) {
          console.error('Looks like there was a problem. Status Code: ' +
            response.status);
          return null;
        }

        return response.json().then(function (data) {
          console.log(data);
        });
      })
    })

    console.log("All Executed");

  }, [data, executeLoop]);

  useEffect(() => {
    executeAsyncLoop();
  }, [executeAsyncLoop])


  return (
    <>
      <p>This example will help you to write a code which can execute after completing all async calls ( api calls )</p>
      <br />
      <p>Check console for the sequences</p>
    </>
  )
}
