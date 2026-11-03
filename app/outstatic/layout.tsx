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
                // 1. Suppress upstream React 19 flushSync console warning
                var origError = console.error;
                console.error = function() {
                  if (typeof arguments[0] === 'string' && arguments[0].indexOf('flushSync was called from inside a lifecycle method') !== -1) {
                    return;
                  }
                  return origError.apply(console, arguments);
                };

                // 2. Intercept router.push / history.pushState when navigating to external OAuth URLs
                if (typeof window !== 'undefined' && window.history) {
                  var origPush = window.history.pushState.bind(window.history);
                  window.history.pushState = function(state, title, url) {
                    if (url) {
                      var str = String(url);
                      if ((str.indexOf('http://') === 0 || str.indexOf('https://') === 0) && str.indexOf(window.location.origin) !== 0) {
                        window.location.href = str;
                        return;
                      }
                    }
                    return origPush(state, title, url);
                  };

                  var origReplace = window.history.replaceState.bind(window.history);
                  window.history.replaceState = function(state, title, url) {
                    if (url) {
                      var str = String(url);
                      if ((str.indexOf('http://') === 0 || str.indexOf('https://') === 0) && str.indexOf(window.location.origin) !== 0) {
                        window.location.href = str;
                        return;
                      }
                    }
                    return origReplace(state, title, url);
                  };
                }

                // 3. Intercept fetch to /api/outstatic/login
                if (typeof window !== 'undefined') {
                  var origFetch = window.fetch;
                  window.fetch = function() {
                    var args = arguments;
                    return origFetch.apply(this, args).then(function(res) {
                      try {
                        var rawUrl = args[0];
                        var urlStr = typeof rawUrl === 'string' ? rawUrl : (rawUrl && rawUrl.href ? rawUrl.href : (rawUrl && rawUrl.url ? rawUrl.url : ''));
                        if (urlStr && urlStr.indexOf('/api/outstatic/login') !== -1) {
                          var clone = res.clone();
                          clone.json().then(function(data) {
                            if (data && data.url && data.url.indexOf('https://github.com') === 0) {
                              window.location.href = data.url;
                            }
                          }).catch(function() {});
                        }
                      } catch (e) {}
                      return res;
                    });
                  };

                  // 4. Click interceptor on Sign in with GitHub button
                  document.addEventListener('click', function(e) {
                    var el = e.target && e.target.closest ? e.target.closest('a, button') : null;
                    if (el && (el.textContent || '').indexOf('Sign in with GitHub') !== -1) {
                      e.preventDefault();
                      e.stopPropagation();
                      fetch('/api/outstatic/login')
                        .then(function(r) { return r.json(); })
                        .then(function(d) {
                          if (d && d.url) {
                            window.location.href = d.url;
                          }
                        })
                        .catch(function(err) {
                          console.error('Login error:', err);
                        });
                    }
                  }, true);
                }
              })();
            `,
          }}
        />
      </head>
      <body id="outstatic" suppressHydrationWarning>{children}</body>
    </html>
  )
}
