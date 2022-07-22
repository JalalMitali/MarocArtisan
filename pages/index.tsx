import type { NextPage } from 'next'
import Head from 'next/head'
import Main from './Main'
import { useRouter } from 'next/router'
import { createContext } from 'react';
import { useState } from 'react';

export const ArtisanContext  = createContext({} as any);
const Home: NextPage = () => {
  let router = useRouter();
  const [form, setForm] = useState({JobType: "Electrican"});
  return (
    <div className='overflow-hidden'>
       <Head>
        <title>Maroc Artisan</title>
        <meta name="description" content="Maroc Artisan #1 Site For Hiring Artisans in Morocco." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ArtisanContext.Provider value={{form, setForm}}>
      <div className={router.locale === "en" ? "font-Coffee" :  router.locale === "ar" ? "font-arFont" : router.locale === "fr" ? "font-Dreams": "font-Coffee"}>
      <Main />
      </div>
      </ArtisanContext.Provider>
    </div>
  )
}

export default Home
