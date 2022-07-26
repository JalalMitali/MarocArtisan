import type { NextPage } from 'next'
import Head from 'next/head'
import Main from '../Client/Components/Main'
import { useRouter } from 'next/router'

const Home: NextPage = () => {
  let router = useRouter();
  return (
    <div className='overflow-hidden'>
       <Head>
        <title>Maroc Artisan</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta name="description" content="Maroc Artisan #1 Site For Hiring Artisans in Morocco." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={router.locale === "en" ? "font-Coffee" :  router.locale === "ar" ? "font-arFont" : router.locale === "fr" ? "font-Dreams": "font-Coffee"}>
      <Main />
      </div>
    </div>
  )
}

export default Home
