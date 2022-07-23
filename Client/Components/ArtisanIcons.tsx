import type { NextPage } from 'next'
import { MdPeople } from "react-icons/md"
import { MdTrendingUp } from "react-icons/md"
import { MdMoney } from "react-icons/md"
import { MdPaid } from "react-icons/md"
import Constants from '../../Utils/Constants'
import FRConstants from '../../Utils/FRConstants'
import ARConstants from '../../Utils/ARConstants'
import { useRouter } from 'next/router'

const ArtisanIcons: NextPage = () => {

  let router = useRouter();
  var constants;
  router.locale == "en" ? constants = Constants : router.locale == "fr" ? constants = FRConstants : router.locale == "ar" ? constants = ARConstants : constants = Constants;
  return (
    <div className={`${router.locale == "en" ? "text-3xl text-center tablet:text-4xl laptop:text-6xl bg-slider2 flex flex-col gap-2 p-10" : router.locale == "fr" ? "text-2xl text-center tablet:text-2xl laptop:text-5xl bg-slider2 flex flex-col gap-2 p-10" : router.locale == "ar" ? "text-3xl text-center tablet:text-3xl laptop:text-5xl bg-slider2 flex flex-col gap-2 p-10" : "text-3xl text-center tablet:text-3xl laptop:text-5xl bg-slider2 flex flex-col gap-2 p-10" }`}>
        <div className='flex flex-col tablet:flex-row gap-2'>
          <div className='relative border-4 border-rose-500  min-h-icon max-h-icon  bg-white flex flex-row  text-black flex-row min-w-iconM tablet:min-w-iconT laptop:min-w-iconL   place-content-center align-center items-center justify-center'>
          <div className='mx-10 absolute left-0'>
          
              <MdPeople className='text-7xl tablet:text-9xl'/>

          </div>
            <span className='text-black absolute left-36 tablet:left-48 laptop:left-56'>{constants.artisansNumber}</span>
          </div>
          <div className='relative border-4 border-rose-500  min-h-icon max-h-icon  bg-white flex flex-row  text-black flex-row min-w-iconM tablet:min-w-iconT laptop:min-w-iconL   place-content-center align-center items-center justify-center'>
          <div className='mx-10 absolute left-0'>
            
              <MdTrendingUp className='text-7xl tablet:text-9xl'/>
          </div>
            <span className='text-black absolute left-36 tablet:left-48 laptop:left-56'>{constants.jobOffersNumber}</span>
          </div>
        </div>
        <div className='flex flex-col tablet:flex-row gap-2'>
          <div className='relative border-4 border-rose-500  min-h-icon max-h-icon  bg-white flex flex-row  text-black flex-row min-w-iconM tablet:min-w-iconT laptop:min-w-iconL   place-content-center align-center items-center justify-center'>
          <div className='mx-10 absolute left-0'>
            
              <MdMoney className='text-7xl tablet:text-9xl'/>

          </div>
          <span className='text-black absolute left-36 tablet:left-48 laptop:left-56'>{constants.hiresNumbers}</span>
          </div>
            <div className='relative border-4 border-rose-500  min-h-icon max-h-icon  bg-white flex flex-row  text-black flex-row min-w-iconM tablet:min-w-iconT laptop:min-w-iconL   place-content-center align-center items-center justify-center'>
            <div className='mx-10 absolute left-0'>
            
              <MdPaid className='text-7xl tablet:text-9xl' />
          </div>
              <span className='text-black absolute left-36 tablet:left-48 laptop:left-56'>{constants.estimationsSentNumber}</span>
            </div>
          </div>
        </div>
  );

} 
export default ArtisanIcons