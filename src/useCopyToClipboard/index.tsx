/*  eslint-disable */
export default function useCopyToClipboard() {
  const copyToClipboard = async (textToCopy: string) => {
    return new Promise(async (resolve, reject) => {
      if (!navigator.clipboard) {
        reject('Clipboard API is not supported in this browser')
      } else {
        try {
          await navigator.clipboard.writeText(textToCopy)
          resolve('Copied to clipboard')
        } catch (error: any) {
          reject(error.message)
        }
      }
    })
  }

  return copyToClipboard
}

/* eslint-enable */
