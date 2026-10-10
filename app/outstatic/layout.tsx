import './outstatic-globals.css'
import 'outstatic/outstatic.css'

export default function OutstaticLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body id="outstatic" suppressHydrationWarning>{children}</body>
    </html>
  )
}
