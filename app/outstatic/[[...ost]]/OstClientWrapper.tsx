'use client'

import { OstClient } from 'outstatic/client'

// Suppress known upstream React 19 + Radix UI/TipTap flushSync warning in Outstatic admin
if (typeof window !== 'undefined') {
  const origError = console.error
  console.error = function (...args: any[]) {
    if (
      typeof args[0] === 'string' &&
      args[0].includes('flushSync was called from inside a lifecycle method')
    ) {
      return
    }
    return origError.apply(console, args)
  }
}

export default function OstClientWrapper(props: any) {
  return <OstClient {...props} />
}
