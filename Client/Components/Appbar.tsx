import type { NextPage } from 'next'
import Constants from '../../Utils/Constants'
import FRConstants from '../../Utils/FRConstants'
import ARConstants from '../../Utils/ARConstants'
import { useRouter } from 'next/router'
import { languages } from '../../Utils/SelectData'
import LangSelect from './LangSelect'
import { styles } from './FormStyles'

const Appbar: NextPage<{activePage: number}> = (props: {activePage: number}) => {
  let router = useRouter();
  var constants;
  router.locale == "en" ? constants = Constants : router.locale == "fr" ? constants = FRConstants : router.locale == "ar" ? constants = ARConstants : constants = Constants;
  return (
    <div className="min-h-appBar bg-slider1">
      <div className='m-auto flex flex-col tablet:flex-row tablet:grid tablet:grid-cols-6 tablet:gap-2'>
        <div className='font-Coffee content-start text-white text-middle text-center text-bold text-xl my-5 text-3xl tablet:text-4xl tablet:my-5 tablet:mt-15 tablet:col-span-2 tablet:my-auto laptop:col-span-4 laptop:text-5xl laptop:my-8  laptop:align-start laptop:place-content-start laptop:justify-start laptop:text-left laptop:pl-10'>
          MAROC ARTISAN
        </div>
        <div className='flex gap-1 mb-5 flex-col tablet:my-auto tablet:py-3 tablet:grid text-middle text-center text-bold my-0 tablet:col-span-4 tablet:mx-3 laptop:col-span-2 laptop:text-3xl laptop:grid laptop:grid-cols-6 laptop:my-8 laptop:py-0'>
          <button  onClick={() => router.push(`/`, undefined, { shallow: true })} className={`${props.activePage == 0 ? "border-4 border-black text-black bg-white text-2xl tablet:text-3xl laptop:col-span-2 laptop:max-w-link": "border-4 border-white text-white rounded-lg bg-black tablet:text-3xl laptop:col-span-2 text-2xl laptop:max-w-link"}`}>
            {constants.Hiring}
          </button>
          <button onClick={() => router.push(`/artisan`, undefined, { shallow: true })} className={`${props.activePage == 1 ? "border-4 border-black text-black bg-white text-2xl tablet:text-3xl laptop:col-span-2 laptop:max-w-link": "border-4 border-white text-white rounded-lg bg-black tablet:text-3xl laptop:col-span-2 text-2xl laptop:max-w-link"}`}>
            {constants.Artisan}
          </button>
          <LangSelect styles={styles} router={router} selectOptions={languages} langStyles="border-4 font-Roboto border-white text-white rounded-lg bg-black tablet:text-3xl laptop:col-span-2 text-2xl laptop:max-w-link" />
        </div>
      </div>
    </div>
  )
}

export default Appbar
