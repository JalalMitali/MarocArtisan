import type { NextPage } from 'next'
import Constants from '../../Utils/Constants'
import FRConstants from '../../Utils/FRConstants'
import ARConstants from '../../Utils/ARConstants'
import { useRouter } from 'next/router'

const Footer: NextPage = () => {
  let router = useRouter();
  var constants;
  router.locale == "en" ? constants = Constants : router.locale == "fr" ? constants = FRConstants : router.locale == "ar" ? constants = ARConstants : constants = Constants;
  
  return (
    <div className='bg-slider1 flex flex-col p-10 min-w-screen min-h-footer gap-4'>
        <div className='tablet:m-auto'>
            <button className='border-black border-2 bg-rose-700 text-white mr-10 text-center rounded-full text-2xl tablet:text-3xl laptop:text-6xl tablet:mr-5 laptop:mr-10'>{constants.PrivacyPolicy}</button>
            <button className='border-black border-2 bg-rose-700 text-white mr-10 text-center rounded-full text-2xl tablet:text-3xl laptop:text-6xl tablet:mr-5 laptop:mr-10'>{constants.AboutUs}</button>
            <button className='border-black border-2 bg-rose-700 text-white mr-10 text-center rounded-full text-2xl tablet:text-3xl laptop:text-6xl tablet:mr-5 laptop:mr-10'>{constants.TermsOfService}</button>
        </div>
        
    </div>
  )
}

export default Footer
