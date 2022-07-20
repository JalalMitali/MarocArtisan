import type { NextPage } from 'next'
import Head from 'next/head'
import Carousel from '../Client/Components/Carousel'
import Download from '../Client/Components/Download'
import Icons from '../Client/Components/Icons'
import Appbar from '../Client/Components/Appbar'
import Footer from '../Client/Components/Footer'

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
