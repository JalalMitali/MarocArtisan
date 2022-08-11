import type { NextPage } from 'next'
import Appbar from '../../Client/Components/Appbar'
import Footer from '../../Client/Components/Footer'
import * as React from "react"
import { useForm, useController, UseControllerProps } from "react-hook-form";
import dynamic from "next/dynamic"
const Select = dynamic(() =>
  import("react-select"), { ssr: false })

import { CitySelect, CitySelectAR, CitySelectFR, Options } from '../../Utils/SelectData'
import Constants from '../../Utils/Constants'
import FRConstants from '../../Utils/FRConstants'
import ARConstants from '../../Utils/ARConstants'
import { useRouter } from 'next/router'
import { styles } from '../../Client/Components/FormStyles'
import { useContext, useEffect, useRef, useState } from 'react'
import { ArtisanContext } from "../../pages/_app";
import { GroupBase, StylesConfig } from 'react-select'
import Districts from '../../Utils/Districts'
import Head from 'next/head';
import UploadPreview from '../../Client/JS/UploadPreview'
import { SMSRequest, SMSVerify } from '../../Server/Auth/FirebaseAuth';
import { FirebaseTest } from '../../Server/Secure/Firebase';

type FormValues = {
  City: string;
  District: string;
};
var constants: typeof Constants;
var districtOptions: readonly Options[]; 
var citySelect: typeof CitySelect;
var city: string;
var district: string;
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

const submitted = (router: any, data: any) => {
  router.push(router.push(`/hire/${data.JobType["value" as unknown as number]}`, `/hire/${data.JobType["value" as unknown as number]}`, { shallow: true }));
}

const Plumber: NextPage = () => {
  const [showForm, setShowForm] = useState(false);
  const [numberSubmitted, setNumberSubmitted] = useState(false);
  const [codeSubmitted, setCodeSubmitted] = useState(false);
  const [isValid, setValid] = useState(false);
  const [codeValid, setCodeValid] = useState(false);
  const [shouldReset, setReset] = useState(false);
  const [isBadNumber, setBadNumber] = useState(true);
  const { user, setUser, loginError, setLoginError, loading, setLoading, number, setNumber, confirmationResult, setConfirmationResult, setData, data, code, setCode } = useContext(ArtisanContext)
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
  district = watch("District")["value" as any];
  districtOptions =  Districts[`${city}${lang}`] as readonly Options[];
  const badNumber = () => {setValid(false); setLoginError(constants.PhoneNotValid); setLoading("");};
  const badOTP = () => {setCodeValid(false); setLoginError(constants.OTPNotValid); setLoading("");};
  const ClearAndReset = () => {
    setUser("");
    setLoginError(""); 
    setNumber(0);
    setConfirmationResult(null);
    setData([]);
    setCode(0);
  }
  const verifyNumber = () => {
    setReset(false);
    setNumberSubmitted(true);
    if(JSON.stringify(number).slice(1, -1).length === 10) {
      setLoading(constants.loading);
      setValid(true);
      setLoginError("");
    }
}
  const verifyOTP = () => {
    setCodeSubmitted(true);
    if(JSON.stringify(code).slice(1, -1).length === 6) {
      setLoading(constants.loading);
      setCodeValid(true);
      setLoginError("");
    }
  }

  useEffect(() => {
    FirebaseTest();
    if(shouldReset === true) {
      setLoading("");
      setLoginError("");
      setShowForm(true);
      setNumberSubmitted(false);
      setBadNumber(true);
    }
    if(isValid && numberSubmitted) {
      SMSRequest(router.locale, number).then((verify) => {
        setConfirmationResult(verify);
        setBadNumber(false);
        setLoginError("");
        setLoading("");
        setNumberSubmitted(true);
      }).catch((error) => {
        setLoginError(JSON.stringify(error))
        setBadNumber(true) 
        setNumberSubmitted(false) 
        setLoading("");
      });
    }
    if(!isValid && numberSubmitted){
      badNumber();
      setBadNumber(true);
    }
    if(confirmationResult && codeValid && codeSubmitted) {
      SMSVerify(code, confirmationResult).then((verify: any[]) => {
        setUser(verify);
        setCodeSubmitted(true);
        setShowForm(false);
        setLoginError("");
        setLoading("");
      }).catch((error) => {
        setLoginError(JSON.stringify(error))
        setCodeSubmitted(false);
        setLoading("");
      });
    }
    if(!codeValid && codeSubmitted){
      badOTP();
    }
    return () => {
      ClearAndReset();
    }
  }, [numberSubmitted, codeSubmitted, shouldReset]);
  useEffect(() => {
    if(loading !== "" && loading !== 0) {
      setLoading(constants.loading);
    }
    if(!isValid && numberSubmitted){
      badNumber();
    }
    if(!codeValid && codeSubmitted){
      badOTP();
    }
    if(city === undefined || districtOptions === undefined) {
      return () => {
        Districts[`${city}${lang}`] === undefined ? null : setValue("District", (Districts[`${city}${lang}`][0])); 
        
      }
    }
    return () => {
        Districts[`${city}${lang}`] === undefined ? setValue("District", (Districts[`${citySelect[0]["value"]}${lang}`][0])) : setValue("District", (Districts[`${city}${lang}`][0])); 
        const cityFound = citySelect.find(e => e.value === city);
        const districtFound = districtOptions.find((e: { value: string; }) => e.value === district);
        cityFound === undefined ? null: setValue("City", cityFound as any);
        districtFound === undefined ? null : setValue("District", districtFound as any);
    }
     }, [city, districtOptions, lang]);
  const onSubmit = (formData: FormValues) => { setData(formData) };
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
      <main className='overflow-hidden  bg-slider2 flex flex-col min-h-screen min-w-screen'>
      <div id='sign-in-button' title='sign-in-button'></div>
      <div className='m-auto'>
        {
          !showForm ?
          <div>
            <div className='text-2xl tablet:text-3xl laptop:text-6xl'>
              <MyCitySelect control={control} name="City" rules={{ required: true }} />
              <MyDistrictSelect control={control} name="District" rules={{ required: true }}  />
              <UploadPreview storageFolder="Client/Plumber" showForm={setShowForm} />
            </div>
            <input value={constants.startHiring} type="submit" onSubmit={handleSubmit(onSubmit)} className='min-w-screen border-4 border-white bg-rose-500 rounded-full text-white text-bold text-3xl tablet:text-5xl laptop:text-7xl' />
          </div> : <div></div>
        }
        { 
         (user === "" || user === null) &&  showForm && isBadNumber ?
            <div>
               { loginError !== "" && loginError !== 0 ? <div className='min-w-screen text-white text-red-500 bg-black text-center rounded-full  py-5 text-2xl tablet:text-3xl laptop:text-5xl'>{loginError}</div> : <div></div>}
               { loading !== 0 && loading !== "" ? <div  className='min-w-screen text-white text-red-500 bg-black text-center rounded-full  py-5 text-2xl tablet:3xl laptop:text-5xl'>{loading}</div> : <div></div>}
            <input type="number" onChange={(number) => setNumber(number.target.value)} required name="number" title="number" className='min-w-screen text-3xl tablet:text-5xl laptop:text-7xl runded-full bg-white text-rose-600' placeholder={constants.phone}/>
            <button type="button" onClick={() => verifyNumber()} className='min-w-screen rounded-full text-2xl tablet:text-3xl laptop:text-6xl min-h-appBar bg-indigo-500 text-white'>{constants.verify}</button>
          </div>
        : <div></div> 
      }
      { (user === "" || user === null) && showForm && !isBadNumber && numberSubmitted ?
              <div>
                  { loginError !== "" && loginError !== 0 ? <div  className='min-w-screen text-white text-red-500 bg-black text-center rounded-full  py-5 text-2xl tablet:3xl laptop:text-5xl'>{loginError}</div> : <div></div>}
                  { loading !== 0 && loading !== "" ? <div  className='min-w-screen text-white text-red-500 bg-black text-center rounded-full  py-5 text-2xl tablet:3xl laptop:text-5xl'>{loading}</div> : <div></div>}
                <input type="number" onChange={(code) => setCode(code.target.value)} name="code" title="code" required className='min-w-screen  text-3xl tablet:text-5xl laptop:text-7xl runded-full bg-white text-rose-600' placeholder={constants.otp}/>
                <button type="button" onClick={() => verifyOTP()} className='min-w-screen text-2xl tablet:text-3xl laptop:text-6xl min-h-appBar rounded-full bg-green-500 text-white'>{constants.verify}</button>
                <button type="button" onClick={() => {setReset(true)}} className='min-w-screen text-2xl tablet:text-3xl rounded-full laptop:text-6xl min-h-appBar bg-red-500 text-white'>{constants.reset}</button>
              </div> 
              : <div></div>
        }
      </div>
      </main>
      <footer>
        <Footer />
      </footer>
      </div>
  )
}

export default Plumber
