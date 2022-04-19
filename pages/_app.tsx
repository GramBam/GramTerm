import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { FormspreeProvider } from '@formspree/react';

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <FormspreeProvider project="1924643868255452458">
      <Component {...pageProps} />
    </FormspreeProvider>
  )
}

export default MyApp
