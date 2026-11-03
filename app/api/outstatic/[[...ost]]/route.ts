import { OutstaticApi } from 'outstatic'
import { NextRequest } from 'next/server'

function fixRequest(req: NextRequest) {
  const forwardedHost = req.headers.get('x-forwarded-host') || req.headers.get('host')
  const forwardedProto = req.headers.get('x-forwarded-proto') || (req.url.startsWith('https') ? 'https' : 'http')

  if (forwardedHost && !forwardedHost.includes('localhost:3000')) {
    try {
      const url = new URL(req.url)
      url.host = forwardedHost
      url.protocol = forwardedProto.endsWith(':') ? forwardedProto : `${forwardedProto}:`
      url.port = ''
      return { req: new NextRequest(url.toString(), req), host: forwardedHost, proto: forwardedProto }
    } catch {
      // fallback
    }
  }
  return { req, host: forwardedHost || 'localhost:3000', proto: forwardedProto }
}

function fixResponse(response: Response, host: string, proto: string) {
  if (!response) return response

  let hasChanges = false
  const newHeaders = new Headers(response.headers)

  // 1. Fix redirect Location header if it points to localhost:3000
  if (response.headers.has('location')) {
    const location = response.headers.get('location')!
    if (location.includes('localhost:3000')) {
      const fixedLocation = location.replace(/https?:\/\/localhost:3000/, `${proto}://${host}`)
      newHeaders.set('location', fixedLocation)
      hasChanges = true
    }
  }

  // 2. If running over plain HTTP (e.g. testing with sslip.io), strip '; Secure' so the browser doesn't discard cookies
  if (proto === 'http' && typeof newHeaders.getSetCookie === 'function') {
    const cookies = newHeaders.getSetCookie()
    if (cookies.some(c => /;\s*Secure/i.test(c))) {
      newHeaders.delete('set-cookie')
      for (const c of cookies) {
        newHeaders.append('set-cookie', c.replace(/;\s*Secure/gi, ''))
      }
      hasChanges = true
    }
  }

  if (hasChanges) {
    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers: newHeaders,
    })
  }

  return response
}

export async function GET(req: NextRequest, ctx: any) {
  const { req: effectiveReq, host, proto } = fixRequest(req)
  const response = await OutstaticApi.GET(effectiveReq, ctx)
  return fixResponse(response, host, proto)
}

export async function POST(req: NextRequest, ctx: any) {
  const { req: effectiveReq, host, proto } = fixRequest(req)
  const response = await OutstaticApi.POST(effectiveReq, ctx)
  return fixResponse(response, host, proto)
}
