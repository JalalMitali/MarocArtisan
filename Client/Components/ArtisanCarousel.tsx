import type { NextPage } from 'next'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Constants from '../../Utils/Constants'
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';

const ArtisanCarousel: NextPage = () => {
    const options = { delay: 5000 }
    const autoplay = Autoplay(options)
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [autoplay])
  return (
    <div className='relative'>
      <div ref={emblaRef} className="overflow-hidden">
              <div className='flex text-center'>
                  <div className='relative flex bg-slider2 min-w-screen min-h-sliderMobile min-h-sliderTablet laptop:min-h-slider bg-contain bg-cover bg-center bg-no-repeat object-scale-down'>
                  <div className='m-auto'>
                    <div className='bg-black pb-10 rounded-lg'>
                      <span className='text-white text-bold text-sliderM tablet:text-sliderT laptop:text-sliderL'>
                        {Constants.carouselArtisan}
                      </span>
                    </div>
                    <div className='mt-20'>
                        <ArrowCircleDownIcon sx={{fontSize: 200, color: '#000'}} />
                    </div>
                  </div>
                  </div>
              </div>
      </div>
    </div>
  )
}

export default ArtisanCarousel
