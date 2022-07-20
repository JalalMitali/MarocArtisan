import type { NextPage } from 'next'
import ArtisanDownload from '../Client/Components/ArtisanDownload'
import ArtisanIcons from '../Client/Components/ArtisanIcons'
import Appbar from '../Client/Components/Appbar'
import Footer from '../Client/Components/Footer'
import ArtisanCarousel from '../Client/Components/ArtisanCarousel'

const Artisan: NextPage = () => {
  return (
    <div className="">
      <header>
        <Appbar activePage={1}/>
      </header>
      <main>
        <ArtisanCarousel />
        <ArtisanDownload />
        <ArtisanIcons />
      </main>
      <footer>
        <Footer />
      </footer>
      </div>
  )
}

export default Artisan
