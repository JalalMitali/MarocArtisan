import type { NextPage } from 'next'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Constants from '../../Utils/Constants'
import Select from './Select'
import { artisanOpenings } from '../../Utils/SelectData'

const Carousel: NextPage = () => {
    const options = { delay: 5000 }
    const autoplay = Autoplay(options)
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [autoplay])
  return (
    <div className='relative'>
      <div ref={emblaRef} className="overflow-hidden">
              <div className='flex text-center'>
                  <div className='relative flex bg-slider1 min-w-screen min-h-sliderMobile min-h-sliderTablet laptop:min-h-slider bg-contain bg-cover bg-center bg-no-repeat object-scale-down'>
                  <div className='m-auto'>
                    <div className='bg-pink-400 pb-10 rounded-lg'>
                      <span className='text-white text-bold text-sliderM tablet:text-sliderT laptop:text-sliderL'>
                        {Constants.carousel}
                      </span>
                      <div className='my-10 text-2xl tablet:text-3xl laptop:text-6xl'>
                          <Select selectOptions={artisanOpenings } />
                      </div>
                      <button className='min-w-screen border-4 border-white rounded-full bg-black text-white text-bold text-3xl tablet:text-5xl laptop:text-7xl'>
                        {Constants.startHiring}
                      </button>
                    </div>
                  </div>
                  </div>
              </div>
      </div>
    </div>
  )
}

export default Carousel
