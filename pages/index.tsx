import type { NextPage } from 'next'
import Head from 'next/head'
import Artisan from './Artisan'
import Main from './Main'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Maroc Artisan</title>
        <meta name="description" content="Maroc Artisan #1 Site For Hiring Artisans in Morocco." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main />
      </div>
  )
}

export default Home
