import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { Options } from '../../Utils/SelectData'

const Select = dynamic(() =>
  import("react-select"), { ssr: false });

export default (props: {lang: any, styles: any, router: any, langStyles: string, selectOptions: readonly Options[] }) => (
  <Select
    instanceId="lang-select"
    placeholder={props.lang == "en" ? "English" : props.lang == "fr" ? "Français" : props.lang == "ar" ? "العربية" : "Lang لغة " }
    defaultValue={props.lang == "en" ? "English" : props.lang == "fr" ? "Français" : props.lang == "ar" ? "العربية" : "Lang لغة " }
    styles={props.styles}
    options={props.selectOptions}
    className={props.langStyles}
    onChange={(choice: any) => { choice['label'] === "English" ? props.router.push(`/en${props.router.pathname}`, `/en${props.router.pathname}`, { locale: 'en'}) : choice['label'] === "Français" ? props.router.push(`/fr${props.router.pathname}`, `/fr${props.router.pathname}`, { locale: 'fr'}) : choice['label'] === "العربية" ? props.router.push(`/ar${props.router.pathname}`, `/ar${props.router.pathname}`, { locale: 'ar'}) : null}}
  />
);
