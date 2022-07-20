import type { NextPage } from 'next'
import Head from 'next/head'
import Carousel from '../src/Client/Components/Carousel'
import Download from '../src/Client/Components/Download'
import Icons from '../src/Client/Components/Icons'
import Appbar from '../src/Client/Elements/Appbar'
import Footer from '../src/Client/Elements/Footer'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Maroc Artisan</title>
        <meta name="description" content="Maroc Artisan #1 Site For Hiring Artisans in Morocco." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Appbar />
      </header>
      <main>
        <Carousel />
        <Icons />
        <Download />
      </main>
      <footer>
        <Footer />
      </footer>
      </div>
  )
}

export default Home
