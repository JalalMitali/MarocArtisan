import type { NextPage } from 'next'
import Constants from '../../Utils/Constants'
import FRConstants from '../../Utils/FRConstants'
import ARConstants from '../../Utils/ARConstants'
import { useRouter } from 'next/router'
import { MdArrowCircleDown } from 'react-icons/md'
const ArtisanCarousel: NextPage = () => {
  let router = useRouter();
  var constants;
  router.locale == "en" ? constants = Constants : router.locale == "fr" ? constants = FRConstants : router.locale == "ar" ? constants = ARConstants : constants = Constants;
  return (
    <div className='relative'>
      <div className="overflow-hidden bg-slider2">
              <div className='flex text-center'>
                  <div className='relative flex min-w-screen min-h-sliderMobile min-h-sliderTablet laptop:min-h-slider bg-contain bg-cover bg-center bg-no-repeat object-scale-down'>
                  <div className='m-auto'>
                    <div className='bg-black pb-10 rounded-lg'>
                      <span className='text-white text-bold text-sliderM tablet:text-sliderT laptop:text-sliderL'>
                        {constants.carouselArtisan}
                      </span>
                    </div>
                    <div className='mt-20'>
                        <MdArrowCircleDown className='text-8xl tablet:text-9xl' />
                    </div>
                  </div>
                  </div>
              </div>
      </div>
    </div>
  )
}

export default ArtisanCarousel
