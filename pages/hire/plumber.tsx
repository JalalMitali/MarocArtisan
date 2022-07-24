import type { NextPage } from 'next'
import Appbar from '../../Client/Components/Appbar'
import Footer from '../../Client/Components/Footer'
import * as React from "react";
import { useForm, useController, UseControllerProps } from "react-hook-form";
import dynamic from "next/dynamic";
const Select = dynamic(() =>
  import("react-select"), { ssr: false });
 
import { CitySelect, CitySelectAR, CitySelectFR } from '../../Utils/SelectData'
import Constants from '../../Utils/Constants'
import FRConstants from '../../Utils/FRConstants'
import ARConstants from '../../Utils/ARConstants'
import { useRouter } from 'next/router'
import { styles } from '../../Client/Components/FormStyles';
import { useContext, useEffect } from 'react';
import { ArtisanContext } from '../index';
import { GroupBase, StylesConfig } from 'react-select';
import Districts from '../../Utils/Districts'
import Head from 'next/head';

type FormValues = {
  City: string;
  District: string;
};
var constants: typeof Constants;
var districtOptions: typeof Districts; 
var citySelect: typeof CitySelect;
var city: string;
const setAll = (iconstants: typeof Constants, cities: typeof CitySelect) => {
  constants = iconstants;
  citySelect = cities;
}

function MyCitySelect(props: UseControllerProps<FormValues>) {
  const {
    field: { onChange, onBlur, name, value, ref },
    fieldState: { invalid, isTouched, isDirty },
    formState: { touchedFields, dirtyFields }
  } = useController(props);

  return (
    <div>
      <Select onChange={onChange} onBlur={onBlur} value={value} placeholder={constants.city} styles={styles as StylesConfig<unknown, boolean, GroupBase<unknown>>} options={citySelect} />
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
      <Select onChange={onChange} onBlur={onBlur} value={value} placeholder={constants.district} styles={styles as StylesConfig<unknown, boolean, GroupBase<unknown>>} options={districtOptions} />
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
  const { handleSubmit, control, watch, setValue } = useForm<FormValues>({
    defaultValues: {
      City: "",
      District: ""
    },
    mode: "onChange"
  });
  
  let lang = router.locale!.toUpperCase();
  city = watch("City")["value" as any];
  districtOptions = Districts[`${city}${lang}`];
  useEffect(() => {
    return () => {
      Districts[`${city}${lang}`] === undefined ? setValue("District", (Districts[`${citySelect[0]["value"]}${lang}`][0])) : setValue("District", (Districts[`${city}${lang}`][0])); 
 
    }
     }, [city, districtOptions])
  const { form, setForm } = useContext(ArtisanContext)
  const onSubmit = (data: FormValues) => submitted(router, data, form, setForm);
  return (
    <div className={router.locale === "en" ? "font-Coffee" :  router.locale === "ar" ? "font-arFont" : router.locale === "fr" ? "font-Dreams": "font-Coffee"}>
      <Head>
        <title>Maroc Artisan | {constants.Hiring}</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta name="description" content="Maroc Artisan #1 Site For Hiring Artisans in Morocco." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
      <Appbar activePage={0}/>
      </header>
      <main className='bg-slider2 flex flex-col min-h-screen min-w-screen'>
      <form onSubmit={handleSubmit(onSubmit) } className="m-auto ">
        <div className='text-2xl tablet:text-3xl laptop:text-6xl'>
          <MyCitySelect control={control} name="City" rules={{ required: true }} />
          <MyDistrictSelect control={control} name="District" rules={{ required: true }}  />
        </div>
        
        <input value={constants.startHiring} type="submit" className='min-w-screen border-4 border-white bg-rose-500 rounded-full text-white text-bold text-3xl tablet:text-5xl laptop:text-7xl' />
      </form>
      </main>
      <footer>
        <Footer />
      </footer>
      </div>
  )
}

export default Plumber
