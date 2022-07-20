import type { NextPage } from 'next'
import { useState } from 'react'
import Constants from '../../Utils/Constants'

const Appbar: NextPage = () => {
  const [activePage, setActive] = useState(0);
  return (
    <div className="min-h-appBar bg-gradient-to-r from-purple-500 to-pink-500">
      <div className='m-auto flex flex-col tablet:flex-row tablet:grid tablet:grid-cols-6 tablet:gap-2'>
        <div className='content-start text-white text-middle text-center text-bold text-xl my-5 text-3xl tablet:text-4xl tablet:my-5 tablet:mt-15 tablet:col-span-2 tablet:my-auto laptop:col-span-4 laptop:text-5xl laptop:my-8  laptop:align-start laptop:place-content-start laptop:justify-start laptop:text-left laptop:pl-10'>
          MAROC ARTISAN
        </div>
        <div className='flex gap-1 mb-5 flex-col tablet:my-auto tablet:py-3 tablet:grid text-middle text-center text-bold my-0 tablet:col-span-4 tablet:mx-3 laptop:col-span-2 laptop:text-3xl laptop:grid laptop:grid-cols-6 laptop:my-8 laptop:py-0'>
          <button className={`${activePage == 0 ? "border-4 border-black text-black bg-white text-2xl tablet:text-3xl laptop:col-span-2 laptop:max-w-link": "border-4 border-white text-white rounded-lg bg-black tablet:text-3xl laptop:col-span-2 text-2xl laptop:max-w-link"}`}>
            {Constants.Hiring}
          </button>
          <button className={`${activePage == 1 ? "border-4 border-black text-black bg-white text-2xl tablet:text-3xl laptop:col-span-2 laptop:max-w-link": "border-4 border-white text-white rounded-lg bg-black tablet:text-3xl laptop:col-span-2 text-2xl laptop:max-w-link"}`}>
            {Constants.Artisan}
          </button>
          <button className={`${activePage == 2 ? "border-4 border-black text-black bg-white text-2xl tablet:text-3xl laptop:col-span-2 laptop:max-w-link": "border-4 border-white text-white rounded-lg bg-black tablet:text-3xl laptop:col-span-2 text-2xl laptop:max-w-link"}`}>
            {Constants.Support}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Appbar
