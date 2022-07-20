import type { NextPage } from 'next'
import Carousel from '../Client/Components/Carousel'
import Download from '../Client/Components/Download'
import Icons from '../Client/Components/Icons'
import Appbar from '../Client/Components/Appbar'
import Footer from '../Client/Components/Footer'

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
