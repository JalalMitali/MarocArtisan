import type { NextPage } from 'next'

const Download: NextPage = () => {
  return (
      <div className='bg-slider2 flex flex-col tablet:flex-row tablet:gap-4'>
            <div className='bg-googlePlay rounded-lg min-w-downloadM max-w-downloadM tablet:min-w-downloadT tablet:max-w-downloadT laptop:min-w-downloadL laptop:max-w-downloadL min-h-downloadGPM max-h-downloadM tablet:min-h-downloadT tablet:max-h-downloadT laptop:min-h-downloadL laptop:max-h-downloadL bg-contain bg-center bg-no-repeat object-scale-down m-auto'>
            </div>
            <div className='bg-appStore rounded-lg min-w-downloadM max-w-downloadM tablet:min-w-downloadT tablet:max-w-downloadT laptop:min-w-downloadL laptop:max-w-downloadL min-h-downloadM max-h-downloadM tablet:min-h-downloadT tablet:max-h-downloadT laptop:min-h-downloadL laptop:max-h-downloadL bg-contain bg-center bg-no-repeat object-scale-down m-auto mb-10'>
            </div>
        </div>
  );

}
export default Download;