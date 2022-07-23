import type { NextPage } from 'next'
import Carousel from './Carousel'
import Download from './Download'
import Icons from './Icons'
import Appbar from './Appbar'
import Footer from './Footer'

const Main: NextPage = () => {
  return (
    <div className="">
      <header>
      <Appbar activePage={0}/>
      </header>
      <main>
        <Carousel />
        <Download />
        <Icons />
      </main>
      <footer>
        <Footer />
      </footer>
      </div>
  )
}

export default Main
