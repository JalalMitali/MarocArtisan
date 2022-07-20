import type { NextPage } from 'next'
import Constants from '../../Utils/Constants'

const Footer: NextPage = () => {
  return (
    <div className='bg-slider1 flex flex-col p-10 min-w-screen min-h-footer'>
        <div className='m-auto'>
            <button className='border-black tablet:pl-0 border-2 bg-rose-700 text-white px-10 text-center rounded-full mx-10 my-5 text-2xl tablet:text-3xl px-10 laptop:text-6xl '>{Constants.PrivacyPolicy}</button>
            <button className='border-black tablet:pl-0 border-2 bg-rose-700 text-white px-10 text-center rounded-full mx-10 my-5 text-2xl tablet:text-3xl px-10 laptop:text-6xl '>{Constants.AboutUs}</button>
            <button className='border-black tablet:pl-0 border-2 bg-rose-700 text-white px-10 text-center rounded-full mx-10 my-5 text-2xl tablet:text-3xl px-10 laptop:text-6xl '>{Constants.TermsOfService}</button>
        </div>
        
    </div>
  )
}

export default Footer
