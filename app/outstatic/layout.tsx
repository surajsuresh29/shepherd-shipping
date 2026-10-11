import './outstatic-globals.css'
import 'outstatic/outstatic.css'

export default function OutstaticLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var orig = console.error;
                console.error = function() {
                  if (typeof arguments[0] === 'string' && arguments[0].indexOf('flushSync was called from inside a lifecycle method') !== -1) {
                    return;
                  }
                  return orig.apply(console, arguments);
                };
              })();
            `,
          }}
        />
      </head>
      <body id="outstatic" suppressHydrationWarning>{children}</body>
    </html>
  )
}
