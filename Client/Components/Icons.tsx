import type { NextPage } from 'next'
import GroupWorkIcon from '@mui/icons-material/GroupWork'
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter'
import LocalOfferIcon from '@mui/icons-material/LocalOffer'
import PaidIcon from '@mui/icons-material/Paid'
import Constants from '../../Utils/Constants'
import FRConstants from '../../Utils/FRConstants'
import ARConstants from '../../Utils/ARConstants'
import { useRouter } from 'next/router'

const Icons: NextPage = () => {
  let router = useRouter();
  var constants;
  router.locale == "en" ? constants = Constants : router.locale == "fr" ? constants = FRConstants : router.locale == "ar" ? constants = ARConstants : constants = Constants;
  
  return (
        <div className='bg-slider2 flex flex-col gap-2 p-10 text-2xl tablet:text-4xl laptop:text-5xl'>
        <div className='flex flex-col tablet:flex-row gap-2-'>
          <div className='relative border-4 border-rose-500  min-h-icon max-h-icon bg-white flex flex-row text-black flex-row min-w-iconM tablet:min-w-iconT laptop:min-w-iconL place-content-center align-center items-center justify-center'>
            <div className='visible mx-10 absolute left-0  tablet:invisible laptop:invisible'>
              <GroupWorkIcon sx={{fontSize: 50, color: "#000 "}} />
            </div>
            <div className='invisible  mx-10  absolute left-0  tablet:visible laptop:invisible'>
              <GroupWorkIcon sx={{fontSize: 100, color: "#000" }} />
            </div>
            <div className='invisible  mx-10  absolute left-0 tablet:invisible laptop:visible'>
              <GroupWorkIcon sx={{fontSize: 150, color: "#000" }} />
            </div>
            <span className='text-black ml-20'>{constants.artisansNumber}</span>
          </div>
          <div className='relative border-4 border-rose-500 tablet:ml-10 laptop:ml-20  min-h-icon max-h-icon  bg-white text-black flex flex-row flex-row min-w-iconM tablet:min-w-iconT laptop:min-w-iconL   place-content-center align-center items-center justify-center'>
          <div className='visible  mx-10 absolute left-0  tablet:invisible laptop:invisible'>
              <LocalOfferIcon sx={{fontSize: 50, color: "#000" }} />
            </div>
            <div className='invisible  mx-10 absolute left-0  tablet:visible laptop:invisible'>
              <LocalOfferIcon sx={{fontSize: 100, color: "#000" }} />
            </div>
            <div className='invisible   mx-10 absolute left-0  tablet:invisible laptop:visible'>
              <LocalOfferIcon sx={{fontSize: 150, color: "#000" }} />
            </div>
          <span className='text-black ml-20'>{constants.jobOffersNumber}</span>
          </div>
        </div>
        <div className='flex flex-col tablet:flex-row gap-2'>
          <div className='relative border-4 border-rose-500  min-h-icon max-h-icon  bg-white flex flex-row  text-black flex-row min-w-iconM tablet:min-w-iconT laptop:min-w-iconL   place-content-center align-center items-center justify-center'>
          <div className='visible  mx-10 absolute left-0  tablet:invisible laptop:invisible'>
              <BusinessCenterIcon sx={{fontSize: 50, color: "#000" }} />
            </div>
            <div className='invisible mx-10  absolute left-0  tablet:visible laptop:invisible'>
              <BusinessCenterIcon sx={{fontSize: 100, color: "#000" }} />
            </div>
            <div className='invisible  mx-10 absolute left-0  tablet:invisible laptop:visible'>
              <BusinessCenterIcon sx={{fontSize: 150, color: "#000" }} />
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
              <span className=' text-black ml-20'>{constants.estimationsSentNumber}</span>
            </div>
          </div>
        </div>
  );

}
export default Icons