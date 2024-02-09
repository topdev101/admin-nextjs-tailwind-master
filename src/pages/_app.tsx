import React from 'react'
import Script from 'next/script'
import type { AppProps } from 'next/app'
import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { store } from '../stores/store'
import { Provider } from 'react-redux'
import '../css/main.css'

export type NextPageWithLayout<P = Record<string, unknown>, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page)


  return (
    <Provider store={store}>
      {getLayout(
        <>
          <Head>

            <meta property="og:image:type" content="image/png" />

            <meta property="twitter:card" content="summary_large_image" />

            <link rel="icon" href="/admin-one-react-tailwind/favicon.png" />
          </Head>

          <Script
            src="https://www.googletagmanager.com/gtag/js?id=UA-130795909-1"
            strategy="afterInteractive"
          />

          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'UA-130795909-1');
            `}
          </Script>

          <Component {...pageProps} />
        </>
      )}
    </Provider>
  )
}

export default MyApp
