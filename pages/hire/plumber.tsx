import type { NextPage } from 'next'
import Appbar from '../../Client/Components/Appbar'
import Footer from '../../Client/Components/Footer'
import * as React from "react";
import { useForm, useController, UseControllerProps } from "react-hook-form";
import dynamic from "next/dynamic";
const Select = dynamic(() =>
  import("react-select"), { ssr: false });
 
import { CitySelect, CitySelectAR, CitySelectFR, Options } from '../../Utils/SelectData'
import Constants from '../../Utils/Constants'
import FRConstants from '../../Utils/FRConstants'
import ARConstants from '../../Utils/ARConstants'
import { useRouter } from 'next/router'
import { styles } from '../../Client/Components/FormStyles';
import { useContext, useEffect } from 'react';
import { ArtisanContext } from '../index';
import { GroupBase, StylesConfig } from 'react-select';
import Districts from '../../Utils/Districts'

type FormValues = {
  City: string;
  District: string;
};
var constants: typeof Constants;
var districtOptions: readonly Options[];
var citySelect: typeof CitySelect;
const setAll = (iconstants: typeof Constants, artisans: typeof CitySelect) => {
  constants = iconstants;
  citySelect = artisans;
}

function MyCitySelect(props: UseControllerProps<FormValues>) {
  const {
    field: { onChange, onBlur, name, value, ref },
    fieldState: { invalid, isTouched, isDirty },
    formState: { touchedFields, dirtyFields }
  } = useController(props);

  return (
    <div>
      <Select onChange={onChange} onBlur={onBlur} placeholder={constants.city} styles={styles as StylesConfig<unknown, boolean, GroupBase<unknown>>} options={citySelect} />
    </div>
  );
}

function MyDistrictSelect(props: UseControllerProps<FormValues>) {
  const {
    field: { onChange, onBlur, name, value, ref },
    fieldState: { invalid, isTouched, isDirty },
    formState: { touchedFields, dirtyFields }
  } = useController(props);

  return (
    <div>
      <Select onChange={onChange} onBlur={onBlur} placeholder={constants.district} styles={styles as StylesConfig<unknown, boolean, GroupBase<unknown>>} options={districtOptions} />
    </div>
  );
}

const submitted = (router: any, data: any, form: any, setForm: any) => {
  setForm(`jobType: ${data.JobType["value" as unknown as number]}`);
  router.push(router.push(`/hire/${data.JobType["value" as unknown as number]}`, `/hire/${data.JobType["value" as unknown as number]}`, { shallow: true }));
}

const Plumber: NextPage = () => {
  let router = useRouter();
  router.locale == "en" ? setAll(Constants, CitySelect): router.locale == "fr" ? setAll(FRConstants, CitySelectFR) : router.locale == "ar" ? setAll(ARConstants, CitySelectAR) : setAll(Constants, CitySelect);
  const { handleSubmit, control, watch } = useForm<FormValues>({
    defaultValues: {
      City: "",
      District: ""
    },
    mode: "onChange"
  });
  const city = watch("City")["value" as any];
  let lang = router.locale!.toUpperCase();
  useEffect(() => {
    districtOptions = Districts[`${city}${lang}`];
  }, [city]) 
  const { form, setForm } = useContext(ArtisanContext)
  const onSubmit = (data: FormValues) => submitted(router, data, form, setForm);
  return (
    <div className={router.locale === "en" ? "font-Coffee" :  router.locale === "ar" ? "font-arFont" : router.locale === "fr" ? "font-Dreams": "font-Coffee"}>
      <header>
      <Appbar activePage={0}/>
      </header>
      <main className='bg-slider2 flex flex-col min-h-screen min-w-screen'>
      <form onSubmit={handleSubmit(onSubmit) } className="m-auto ">
        <div className='text-2xl tablet:text-3xl laptop:text-6xl'>
          <MyCitySelect control={control} name="City" rules={{ required: true }} />
          <MyDistrictSelect control={control} name="District" rules={{ required: true }}  />
        </div>
        
        <input value={constants.startHiring} type="submit" className='min-w-screen border-4 border-white bg-green-500 rounded-full bg-black text-white text-bold text-3xl tablet:text-5xl laptop:text-7xl' />
      </form>
      </main>
      <footer>
        <Footer />
      </footer>
      </div>
  )
}

export default Plumber
