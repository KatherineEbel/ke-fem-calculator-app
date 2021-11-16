import Head from 'next/head'
import { PropsWithChildren } from 'react'
import AppHeader from '../components/AppHeader'
import AppFooter from '../components/AppFooter'

export default function Layout({ children }: PropsWithChildren<any>) {
  return (
    <div className="h-full grid sm:w-calculator">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Frontend Mentor Calculator App Challenge Solution"
        />
        <title>Frontend Mentor | Calculator app</title>
      </Head>
      <AppHeader />
      <main>{children}</main>
      <AppFooter />
    </div>
  )
}
