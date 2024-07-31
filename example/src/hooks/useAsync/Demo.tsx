import React from 'react'
import { useAsync } from '../../../..';

export default function Demo() {
  const { loading, value, error } = useAsync(() => {
    return new Promise((resolve, reject) => {
      const success = true;

      setTimeout(() => {
        success ? resolve("Success") : reject("Error");
      }, 1500)
    })
  })

  return (
    <>
      <div>Loading: {loading.toString()}</div>

      <div className="flex flex-row flex-wrap gap-3 mt-2">
        <div className='text-green-600 font-semibold'>{value}</div>
        <div className='text-red-600 font-semibold'>{error}</div>
      </div>
    </>
  )
}
