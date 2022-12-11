import '../styles/globals.css'

// import '../styles/organism/home/home-banner.scss'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
