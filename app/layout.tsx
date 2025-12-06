import type { Metadata } from 'next'
import Script from 'next/script'
import '../css/normalize.css'
import '../css/webflow.css'
import '../css/wegems.webflow.css'
import '../css/swiper-bundle.min.css'

export const metadata: Metadata = {
  title: 'Wegems | We build websites that convert leads',
  description: 'We design, develop and deliver awesome Webflow websites that helps you to start, grow & scale your business.',
  openGraph: {
    title: 'Wegems | We build websites that convert leads',
    description: 'We design, develop and deliver awesome Webflow websites that helps you to start, grow & scale your business.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wegems | We build websites that convert leads',
    description: 'We design, develop and deliver awesome Webflow websites that helps you to start, grow & scale your business.',
  },
  verification: {
    google: 'Fdht1xqex2JqX-4KQgvY3IkQEuEpOwXFdjoP8IVYfNI',
  },
  icons: {
    icon: '/images/favicon.png',
    apple: '/images/webclip.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-wf-page="66bc49de949c024a2f86c1b1" data-wf-site="64f95d3b2324ecc4fb0d5ff1">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="generator" content="Webflow" />
        <style dangerouslySetInnerHTML={{
          __html: `
            .swiper-button-prev,
            .swiper-button-next {
              position: relative;
              margin-top: 0;
              left: auto;
              right: auto;
              width: auto;
              height: auto;
            }
            .swiper-button-prev:after,
            .swiper-button-next:after {
              display: none;
            }
          `
        }} />
      </head>
      <body>
        {/* Webflow JS detection */}
        <Script id="webflow-js-detection" strategy="beforeInteractive">
          {`
            !(function (o, c) {
              var n = c.documentElement,
                t = ' w-mod-';
              (n.className += t + 'js'),
                ('ontouchstart' in o ||
                  (o.DocumentTouch && c instanceof DocumentTouch)) &&
                  (n.className += t + 'touch');
            })(window, document);
          `}
        </Script>

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-PN89RPB8DB"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag() {
              dataLayer.push(arguments);
            }
            gtag('js', new Date());
            gtag('set', 'developer_id.dZGVlNj', true);
            gtag('config', 'G-PN89RPB8DB');
          `}
        </Script>

        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function (w, d, s, l, i) {
              w[l] = w[l] || [];
              w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
              var f = d.getElementsByTagName(s)[0],
                j = d.createElement(s),
                dl = l != 'dataLayer' ? '&l=' + l : '';
              j.async = true;
              j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
              f.parentNode.insertBefore(j, f);
            })(window, document, 'script', 'dataLayer', 'GTM-N4GMQJKG');
          `}
        </Script>

        {/* Clarity */}
        <Script id="clarity" strategy="afterInteractive">
          {`
            (function (c, l, a, r, i, t, y) {
              c[a] =
                c[a] ||
                function () {
                  (c[a].q = c[a].q || []).push(arguments);
                };
              t = l.createElement(r);
              t.async = 1;
              t.src = 'https://www.clarity.ms/tag/' + i;
              y = l.getElementsByTagName(r)[0];
              y.parentNode.insertBefore(t, y);
            })(window, document, 'clarity', 'script', 'jek38fxyko');
          `}
        </Script>

        {children}

        {/* External JS files */}
        <Script
          src="/js/jquery-3.5.1.min.dc5e7f18c8.js"
          strategy="beforeInteractive"
          crossOrigin="anonymous"
        />
        <Script
          src="/js/webflow.js"
          strategy="lazyOnload"
        />
        <Script
          src="/js/swiper-bundle.min.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  )
}

