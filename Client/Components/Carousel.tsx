import type { NextPage } from 'next'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Constants from '../../Utils/Constants'
import FRConstants from '../../Utils/FRConstants'
import ARConstants from '../../Utils/ARConstants'
import { useRouter } from 'next/router'
import Select from 'react-select'
import { ArtisanOpenings, ArtisanOpeningsFR, ArtisanOpeningsAR } from '../../Utils/SelectData'
import { useContext } from "react";
import { useForm, UseControllerProps, useController } from "react-hook-form";
import { styles } from './FormStyles'
import { ArtisanContext } from "../../pages/index";

type FormValues = {
  JobType: string;
};

function InputSelect(props: UseControllerProps<FormValues>) {
  const {
    field: { onChange, onBlur, name, value, ref },
    fieldState: { invalid, isTouched, isDirty },
    formState: { touchedFields, dirtyFields }
  } = useController(props);
  return (
    <div>
      <Select onChange={onChange} onBlur={onBlur} styles={styles} options={artisanOpenings} />
    </div>
  );
}
var constants: typeof Constants;
var artisanOpenings: typeof ArtisanOpenings;

const setAll = (iconstants: typeof Constants, artisans: typeof ArtisanOpenings) => {
  constants = iconstants;
  artisanOpenings = artisans;
}
const submitted = (router: any, data: any, form: any, setForm: any) => {
  setForm(`jobType: ${data.JobType["value" as unknown as number]}`);
  router.push(router.push(`/hire/${data.JobType["value" as unknown as number]}`, `/hire/${data.JobType["value" as unknown as number]}`, { shallow: true }));
}
const Carousel: NextPage = () => {
  const { handleSubmit, control } = useForm<FormValues>({
    defaultValues: {
      JobType: "",
    },
    mode: "onChange"
  });
  let router = useRouter();
  router.locale == "en" ? setAll(Constants, ArtisanOpenings): router.locale == "fr" ? setAll(FRConstants, ArtisanOpeningsFR) : router.locale == "ar" ? setAll(ARConstants, ArtisanOpeningsAR) : setAll(Constants, ArtisanOpenings);
    const options = { delay: 5000 }
    const autoplay = Autoplay(options)
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [autoplay])
    const { form, setForm } = useContext(ArtisanContext)
    const onSubmit = (data: FormValues) => submitted(router, data, form, setForm);
  
  return (
    <div className='relative'>
      <div ref={emblaRef} className="overflow-hidden">
              <div className='flex text-center'>
                  <div className='relative flex bg-slider2 min-w-screen min-h-sliderMobile min-h-sliderTablet laptop:min-h-slider bg-contain bg-cover bg-center bg-no-repeat object-scale-down'>
                  <div className='m-auto'>
                    <div className='bg-black pb-10 rounded-lg'>
                      <span className='text-white text-bold text-sliderM tablet:text-sliderT laptop:text-sliderL'>
                        {constants.carousel}
                      </span>
                      <form onSubmit={handleSubmit(onSubmit) }>
                        <div className='my-10 text-2xl tablet:text-3xl laptop:text-6xl'>
                        <InputSelect control={control} name="JobType" rules={{ required: true }} />
                        </div>
                        <input value={constants.startHiring} type="submit" className='min-w-screen border-4 border-white bg-rose-500 rounded-full bg-black text-white text-bold text-3xl tablet:text-5xl laptop:text-7xl' />
                      </form>
                    </div>
                  </div>
                  </div>
              </div>
      </div>
    </div>
  )
}

export default Carousel
