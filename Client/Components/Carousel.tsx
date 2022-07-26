import type { NextPage } from 'next'
import Constants from '../../Utils/Constants'
import FRConstants from '../../Utils/FRConstants'
import ARConstants from '../../Utils/ARConstants'
import { useRouter } from 'next/router'
import dynamic from "next/dynamic";
const Select = dynamic(() =>
  import("react-select"), { ssr: false });

import { ArtisanOpenings, ArtisanOpeningsFR, ArtisanOpeningsAR } from '../../Utils/SelectData'
import { useForm, UseControllerProps, useController } from "react-hook-form";
import { styles } from './FormStyles'
import { ArtisanContext } from "../../pages/_app";
import { useContext, useEffect } from "react";
import { Options } from '../../Utils/SelectData'

type FormValues = {
  JobType: string;
};

export const MySelect = (props: {value: any, name:any, onChange: any, onBlur: any, styles: any, selectOptions: readonly Options[] }) => (
  <Select
    instanceId="lang-select"
    styles={props.styles}
    options={props.selectOptions}
    onChange={props.onChange}
    onBlur={props.onBlur}
    value={props.value}
    name={props.name}
  />
);

function InputSelect(props: UseControllerProps<FormValues>) {
  const {
    field: { onChange, onBlur, name, value, ref },
    fieldState: { invalid, isTouched, isDirty },
    formState: { touchedFields, dirtyFields }
  } = useController(props);
  return (
    <div>
      <MySelect onChange={onChange} name={name} value={value} onBlur={onBlur} styles={styles} selectOptions={artisanOpenings}  />
    </div>
  );
}
var selected: string;
var constants: typeof Constants;
var artisanOpenings: typeof ArtisanOpenings;

const setAll = (iconstants: typeof Constants, artisans: typeof ArtisanOpenings) => {
  constants = iconstants;
  artisanOpenings = artisans;
}
const submitted = (router: any, data: any) => {
  router.push(router.push(`/hire/${data.JobType["value" as unknown as number]}`, `/hire/${data.JobType["value" as unknown as number]}`, { shallow: true }));
}
const Carousel: NextPage = () => {
  const { handleSubmit, control, setValue, watch } = useForm<FormValues>({
    defaultValues: {
      JobType: "",
    },
    mode: "onChange"
  });
  let router = useRouter();
  router.locale == "en" ? setAll(Constants, ArtisanOpenings): router.locale == "fr" ? setAll(FRConstants, ArtisanOpeningsFR) : router.locale == "ar" ? setAll(ARConstants, ArtisanOpeningsAR) : setAll(ARConstants, ArtisanOpeningsAR);
    //const options = { delay: 5000 }
    const lang = router.locale;
    const onSubmit = (data: FormValues) => submitted(router, data);
    selected = watch("JobType")["value" as unknown as number];
    const found = artisanOpenings.find(e => e.value === selected);
    useEffect(() => {
        found === undefined ? artisanOpenings[0] : setValue("JobType", found as any);
    }, [lang])
  return (
    <div className='relative'>
      <div className="bg-slider2 overflow-hidden">
              <div className='flex text-center'>
                  <div className='relative flex min-w-screen min-h-sliderMobile min-h-sliderTablet laptop:min-h-slider bg-contain bg-cover bg-center bg-no-repeat object-scale-down'>
                  <div className='m-auto'>
                    <div className='bg-black  pb-10 rounded-lg'>
                      <span className={`${router.locale == "fr" ?'text-white text-bold text-sliderFR tablet:text-sliderT laptop:text-sliderL' : "text-white text-bold text-sliderM tablet:text-sliderT laptop:text-sliderL" }`}>
                        {constants.carousel}
                      </span>
                      <form onSubmit={handleSubmit(onSubmit) }>
                        <div className='my-10 text-2xl tablet:text-3xl laptop:text-6xl'>
                        <InputSelect control={control} name="JobType" rules={{ required: true }} />
                        </div>
                        <input value={constants.startLogin} type="submit" className='bg-rose-600 min-w-screen border-4 border-white rounded-full bg-black text-white text-bold text-3xl tablet:text-5xl laptop:text-7xl' />
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
