import type { NextPage } from 'next'
import Appbar from '../../Client/Components/Appbar'
import Footer from '../../Client/Components/Footer'
import * as React from "react";
import { useForm, useController, UseControllerProps } from "react-hook-form";
import Select from 'react-select'
import { ArtisanOpenings, ArtisanOpeningsAR, ArtisanOpeningsFR } from '../../Utils/SelectData'
import Constants from '../../Utils/Constants'
import FRConstants from '../../Utils/FRConstants'
import ARConstants from '../../Utils/ARConstants'
import { useRouter } from 'next/router'
import { styles } from '../../Client/Components/FormStyles';
import { useContext } from 'react';
import { ArtisanContext } from '../index';

type FormValues = {
  JobType: string;
};
var constants: typeof Constants;
var artisanOpenings: typeof ArtisanOpenings;

const setAll = (iconstants: typeof Constants, artisans: typeof ArtisanOpenings) => {
  constants = iconstants;
  artisanOpenings = artisans;
}

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
  router.locale == "en" ? setAll(Constants, ArtisanOpenings): router.locale == "fr" ? setAll(FRConstants, ArtisanOpeningsFR) : router.locale == "ar" ? setAll(ARConstants, ArtisanOpeningsAR) : setAll(Constants, ArtisanOpenings);
  const { form, setForm } = useContext(ArtisanContext)
  const onSubmit = (data: FormValues) => submitted(router, data, form, setForm);
  return (
    <div className="">
      <header>
      <Appbar activePage={0}/>
      </header>
      <main className='bg-slider2 flex flex-col min-h-screen min-w-screen'>
      <form onSubmit={handleSubmit(onSubmit) } className="m-auto ">
        <div className='text-2xl tablet:text-3xl laptop:text-6xl'>
          <InputSelect control={control} name="JobType" rules={{ required: true }} />
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
