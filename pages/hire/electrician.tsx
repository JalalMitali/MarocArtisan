import type { NextPage } from 'next'
import Appbar from '../../Client/Components/Appbar'
import Footer from '../../Client/Components/Footer'
import * as React from "react";
import { useForm, useController, UseControllerProps } from "react-hook-form";
import dynamic from "next/dynamic";
const Select = dynamic(() =>
  import("react-select"), { ssr: false });
 
import { VilleSelect, VilleSelectAR, VilleSelectFR } from '../../Utils/SelectData'
import Constants from '../../Utils/Constants'
import FRConstants from '../../Utils/FRConstants'
import ARConstants from '../../Utils/ARConstants'
import { useRouter } from 'next/router'
import { styles } from '../../Client/Components/FormStyles';
import { useContext } from 'react';
import { ArtisanContext } from '../index';
import { GroupBase, StylesConfig } from 'react-select';

type FormValues = {
  JobType: string;
};
var constants: typeof Constants;
var villeSelect: typeof VilleSelect;

const setAll = (iconstants: typeof Constants, artisans: typeof VilleSelect) => {
  constants = iconstants;
  villeSelect = artisans;
}

function MyVilleSelect(props: UseControllerProps<FormValues>) {
  const {
    field: { onChange, onBlur, name, value, ref },
    fieldState: { invalid, isTouched, isDirty },
    formState: { touchedFields, dirtyFields }
  } = useController(props);
  return (
    <div>
      <Select onChange={onChange} onBlur={onBlur} placeholder={constants.city} styles={styles as StylesConfig<unknown, boolean, GroupBase<unknown>>} options={villeSelect} />
    </div>
  );
}

const submitted = (router: any, data: any, form: any, setForm: any) => {
  setForm(`jobType: ${data.JobType["value" as unknown as number]}`);
  router.push(router.push(`/hire/${data.JobType["value" as unknown as number]}`, `/hire/${data.JobType["value" as unknown as number]}`, { shallow: true }));
}

const Electrician: NextPage = () => {
  const { handleSubmit, control } = useForm<FormValues>({
    defaultValues: {
      JobType: "",
    },
    mode: "onChange"
  });
  let router = useRouter();
  router.locale == "en" ? setAll(Constants, VilleSelect): router.locale == "fr" ? setAll(FRConstants, VilleSelectFR) : router.locale == "ar" ? setAll(ARConstants, VilleSelectAR) : setAll(Constants, VilleSelect);
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
          <MyVilleSelect control={control} name="JobType" rules={{ required: true }} />
        </div>
        <input value={constants.startHiring} type="submit" className='min-w-screen border-4 border-white bg-rose-500 rounded-full bg-black text-white text-bold text-3xl tablet:text-5xl laptop:text-7xl' />
      </form>
      </main>
      <footer>
        <Footer />
      </footer>
      </div>
  )
}

export default Electrician
