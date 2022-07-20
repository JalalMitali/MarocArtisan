import type { NextPage } from 'next'
import Constants from '../../Utils/Constants'

const Footer: NextPage = () => {
  return (
    <div className='bg-gradient-to-r from-purple-500 to-pink-500 flex flex-col p-10 min-w-screen min-h-footer'>
        <div className='m-auto'>
            <button className='pl-10 tablet:pl-0 border-2 border-white mx-10 my-5 text-white text-2xl tablet:text-3xl px-10 laptop:text-6xl'>{Constants.PrivacyPolicy}</button>
            <button className='pl-10 tablet:pl-0 border-2 border-white mx-10 my-5 text-white text-2xl tablet:text-3xl px-10 laptop:text-6xl'>{Constants.AboutUs}</button>
            <button className='pl-10 tablet:pl-0 border-2 border-white mx-10 my-5 text-white text-2xl tablet:text-3xl px-10 laptop:text-6xl'>{Constants.TermsOfService}</button>
        </div>
        
    </div>
  )
}

export default Footer
