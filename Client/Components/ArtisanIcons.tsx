import type { NextPage } from 'next'
import PeopleIcon from '@mui/icons-material/People'
import MoneyIcon from '@mui/icons-material/Money'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import PaidIcon from '@mui/icons-material/Paid'
import Constants from '../../Utils/Constants'
import FRConstants from '../../Utils/FRConstants'
import ARConstants from '../../Utils/ARConstants'
import { useRouter } from 'next/router'

const ArtisanIcons: NextPage = () => {
  let router = useRouter();
  var constants;
  router.locale == "en" ? constants = Constants : router.locale == "fr" ? constants = FRConstants : router.locale == "ar" ? constants = ARConstants : constants = Constants;
  
  return (
        <div className='bg-slider2 flex flex-col gap-2 p-10 text-2xl tablet:text-4xl laptop:text-5xl'>
        <div className='flex flex-col tablet:flex-row gap-2-'>
          <div className='relative border-4 border-rose-500  min-h-icon max-h-icon bg-white flex flex-row text-black flex-row min-w-iconM tablet:min-w-iconT laptop:min-w-iconL place-content-center align-center items-center justify-center'>
            <div className='visible mx-10 absolute left-0  tablet:invisible laptop:invisible'>
              <PeopleIcon sx={{fontSize: 50, color: "#000 "}} />
            </div>
            <div className='invisible  mx-10  absolute left-0  tablet:visible laptop:invisible'>
              <PeopleIcon sx={{fontSize: 100, color: "#000" }} />
            </div>
            <div className='invisible  mx-10  absolute left-0 tablet:invisible laptop:visible'>
              <PeopleIcon sx={{fontSize: 150, color: "#000" }} />
            </div>
            <span className='text-black ml-20'>{constants.clientsNumber}</span>
          </div>
          <div className='relative border-4 border-rose-500 tablet:ml-10 laptop:ml-20  min-h-icon max-h-icon  bg-white text-black flex flex-row flex-row min-w-iconM tablet:min-w-iconT laptop:min-w-iconL   place-content-center align-center items-center justify-center'>
          <div className='visible  mx-10 absolute left-0  tablet:invisible laptop:invisible'>
              <TrendingUpIcon sx={{fontSize: 50, color: "#000" }} />
            </div>
            <div className='invisible  mx-10 absolute left-0  tablet:visible laptop:invisible'>
              <TrendingUpIcon sx={{fontSize: 100, color: "#000" }} />
            </div>
            <div className='invisible   mx-10 absolute left-0  tablet:invisible laptop:visible'>
              <TrendingUpIcon sx={{fontSize: 150, color: "#000" }} />
            </div>
          <span className='text-black ml-20'>{constants.jobOffersNumber}</span>
          </div>
        </div>
        <div className='flex flex-col tablet:flex-row gap-2'>
          <div className='relative border-4 border-rose-500  min-h-icon max-h-icon  bg-white flex flex-row  text-black flex-row min-w-iconM tablet:min-w-iconT laptop:min-w-iconL   place-content-center align-center items-center justify-center'>
          <div className='visible  mx-10 absolute left-0  tablet:invisible laptop:invisible'>
              <MoneyIcon sx={{fontSize: 50, color: "#000" }} />
            </div>
            <div className='invisible mx-10  absolute left-0  tablet:visible laptop:invisible'>
              <MoneyIcon sx={{fontSize: 100, color: "#000" }} />
            </div>
            <div className='invisible  mx-10 absolute left-0  tablet:invisible laptop:visible'>
              <MoneyIcon sx={{fontSize: 150, color: "#000" }} />
            </div>
          <span className=' text-black ml-20'>{constants.hiresNumbers}</span>
          </div>
            <div className='relative border-4 border-rose-500 tablet:ml-10 laptop:ml-20  min-h-icon max-h-icon  bg-white flex flex-row  text-black flex-row min-w-iconM tablet:min-w-iconT laptop:min-w-iconL   place-content-center align-center items-center justify-center'>
              <div className='visible  mx-10 absolute left-0  tablet:invisible laptop:invisible'>
              <PaidIcon sx={{fontSize: 50, color: "#000" }} />
            </div>
            <div className='invisible  mx-10 absolute left-0  tablet:visible laptop:invisible'>
              <PaidIcon sx={{fontSize: 100, color: "#000" }} />
            </div>
            <div className='invisible  mx-10 absolute left-0  tablet:invisible laptop:visible'>
              <PaidIcon sx={{fontSize: 150, color: "#000" }} />
            </div>
              <span className=' text-black ml-20'>{constants.hireRate}</span>
            </div>
          </div>
        </div>
  );

}
export default ArtisanIcons