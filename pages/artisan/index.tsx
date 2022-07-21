import type { NextPage } from 'next'
import Head from 'next/head'
import Artisan from './Artisan'
import { useRouter } from 'next/router'

const Home: NextPage = () => {
  let router = useRouter();
  
  return (
    <div className='overflow-hidden'>
       <Head>
        <title>Maroc Artisan</title>
        <meta name="description" content="Maroc Artisan #1 Site For Hiring Artisans in Morocco." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={router.locale === "en" ? "font-Coffee" :  router.locale === "ar" ? "font-arFont" : router.locale === "fr" ? "font-Dreams": "font-Coffee"}>
          <Artisan />
      </div>
    </div>
  )
}

export default Home
