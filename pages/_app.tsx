import type { AppProps } from 'next/app'

import 'normalize.css/normalize.css'
import '../styles/new.scss'
import 'bootstrap/dist/css/bootstrap-grid.css'
import 'bootstrap/dist/css/bootstrap-utilities.css'
import 'inter-ui/inter.css'
import '../styles/globals.scss'

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
