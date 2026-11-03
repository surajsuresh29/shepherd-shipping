'use client'

import { useEffect } from 'react'
import { OstClient } from 'outstatic/client'

if (typeof window !== 'undefined') {
  // Suppress known upstream React 19 + Radix UI/TipTap flushSync warning in Outstatic admin
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

  // Intercept Outstatic login fetch to force browser navigation to GitHub OAuth URL
  // (Next.js App Router's router.push() fails silently on external URLs like https://github.com)
  const origFetch = window.fetch
  window.fetch = async function (...args: any[]) {
    const res = await origFetch.apply(this, args as any)
    try {
      const url = typeof args[0] === 'string' ? args[0] : (args[0] && 'url' in args[0] ? (args[0] as any).url : '')
      if (typeof url === 'string' && url.includes('/api/outstatic/login')) {
        const clone = res.clone()
        const data = await clone.json().catch(() => null)
        if (data && typeof data.url === 'string' && data.url.startsWith('https://github.com')) {
          window.location.assign(data.url)
        }
      }
    } catch {
      // ignore
    }
    return res
  }
}

export default function OstClientWrapper(props: any) {
  useEffect(() => {
    // Fallback: capture click on "Sign in with GitHub" to guarantee immediate navigation
    const handleClick = async (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest('a, button')
      if (!target) return
      const text = target.textContent || ''
      if (text.includes('Sign in with GitHub')) {
        try {
          const res = await fetch('/api/outstatic/login')
          const data = await res.json()
          if (data && data.url) {
            window.location.assign(data.url)
          }
        } catch (err) {
          console.error('Failed to initiate GitHub OAuth:', err)
        }
      }
    }

    document.addEventListener('click', handleClick, true)
    return () => document.removeEventListener('click', handleClick, true)
  }, [])

  return <OstClient {...props} />
}
