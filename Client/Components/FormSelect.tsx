import React, { useState } from 'react';
import { Options } from '../../Utils/SelectData';
import dynamic from "next/dynamic";
const Select = dynamic(() =>
  import("react-select"), { ssr: false });
 

export default (props: { styles: any, change: any, langStyles: string, selectOptions: readonly Options[] }) => (
  <Select
    id='select-form'
    instanceId="select-form"
    defaultValue="Select"
    styles={props.styles}
    options={props.selectOptions}
    onChange={props.change} />
);
