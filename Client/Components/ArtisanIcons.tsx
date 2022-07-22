import type { NextPage } from 'next'
import PeopleIcon from '@mui/icons-material/People'
import MoneyIcon from '@mui/icons-material/Money'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import PaidIcon from '@mui/icons-material/Paid'
import Constants from '../../Utils/Constants'
import FRConstants from '../../Utils/FRConstants'
import ARConstants from '../../Utils/ARConstants'
import { useRouter } from 'next/router'
import { useMediaQuery } from 'react-responsive'

const ArtisanIcons: NextPage = () => {
  const Desktop = ({ children }: any) => {
    const isDesktop = useMediaQuery({ minWidth: 992 })
    return isDesktop ? children : null
  }
  const Tablet = ({ children }: any) => {
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
    return isTablet ? children : null
  }
  const Mobile = ({ children }: any) => {
    const isMobile = useMediaQuery({ maxWidth: 767 })
    return isMobile ? children : null
  }
  const Default = ({ children}: any) => {
    const isNotMobile = useMediaQuery({ minWidth: 768 })
    return isNotMobile ? children : null
  }
  let router = useRouter();
  var constants;
  router.locale == "en" ? constants = Constants : router.locale == "fr" ? constants = FRConstants : router.locale == "ar" ? constants = ARConstants : constants = Constants;
  return (
    <div className={`${router.locale == "en" ? "text-3xl text-center tablet:text-4xl laptop:text-6xl bg-slider2 flex flex-col gap-2 p-10" : router.locale == "fr" ? "text-2xl text-center tablet:text-2xl laptop:text-5xl bg-slider2 flex flex-col gap-2 p-10" : router.locale == "ar" ? "text-3xl text-center tablet:text-3xl laptop:text-5xl bg-slider2 flex flex-col gap-2 p-10" : "text-3xl text-center tablet:text-3xl laptop:text-5xl bg-slider2 flex flex-col gap-2 p-10" }`}>
        <div className='flex flex-col tablet:flex-row gap-2'>
          <div className='relative border-4 border-rose-500  min-h-icon max-h-icon  bg-white flex flex-row  text-black flex-row min-w-iconM tablet:min-w-iconT laptop:min-w-iconL   place-content-center align-center items-center justify-center'>
          <div className='mx-10 absolute left-0'>
            <Desktop>
              <PeopleIcon sx={{ fontSize: 150, color: 'black'}} />
            </Desktop>
            <Tablet>
              <PeopleIcon sx={{ fontSize: 125, color: 'black'}} />
            </Tablet>
            <Mobile>
              <PeopleIcon sx={{ fontSize: 100, color: 'black'}} />
            </Mobile>
          </div>
            <span className='text-black absolute left-36 tablet:left-48 laptop:left-56'>{constants.artisansNumber}</span>
          </div>
          <div className='relative border-4 border-rose-500  min-h-icon max-h-icon  bg-white flex flex-row  text-black flex-row min-w-iconM tablet:min-w-iconT laptop:min-w-iconL   place-content-center align-center items-center justify-center'>
          <div className='mx-10 absolute left-0'>
            <Desktop>
              <TrendingUpIcon sx={{ fontSize: 150, color: 'black'}} />
            </Desktop>
            <Tablet>
              <TrendingUpIcon sx={{ fontSize: 125, color: 'black'}} />
            </Tablet>
            <Mobile>
              <TrendingUpIcon sx={{ fontSize: 100, color: 'black'}} />
            </Mobile>
          </div>
            <span className='text-black absolute left-36 tablet:left-48 laptop:left-56'>{constants.jobOffersNumber}</span>
          </div>
        </div>
        <div className='flex flex-col tablet:flex-row gap-2'>
          <div className='relative border-4 border-rose-500  min-h-icon max-h-icon  bg-white flex flex-row  text-black flex-row min-w-iconM tablet:min-w-iconT laptop:min-w-iconL   place-content-center align-center items-center justify-center'>
          <div className='mx-10 absolute left-0'>
            <Desktop>
              <MoneyIcon sx={{ fontSize: 150, color: 'black'}} />
            </Desktop>
            <Tablet>
              <MoneyIcon sx={{ fontSize: 125, color: 'black'}} />
            </Tablet>
            <Mobile>
              <MoneyIcon sx={{ fontSize: 100, color: 'black'}} />
            </Mobile>
          </div>
          <span className='text-black absolute left-36 tablet:left-48 laptop:left-56'>{constants.hiresNumbers}</span>
          </div>
            <div className='relative border-4 border-rose-500  min-h-icon max-h-icon  bg-white flex flex-row  text-black flex-row min-w-iconM tablet:min-w-iconT laptop:min-w-iconL   place-content-center align-center items-center justify-center'>
            <div className='mx-10 absolute left-0'>
            <Desktop>
              <PaidIcon sx={{ fontSize: 150, color: 'black'}} />
            </Desktop>
            <Tablet>
              <PaidIcon sx={{ fontSize: 125, color: 'black'}} />
            </Tablet>
            <Mobile>
              <PaidIcon sx={{ fontSize: 100, color: 'black'}} />
            </Mobile>
          </div>
              <span className='text-black absolute left-36 tablet:left-48 laptop:left-56'>{constants.estimationsSentNumber}</span>
            </div>
          </div>
        </div>
  );

} 
export default ArtisanIcons