import React, { useState } from 'react';
import chroma from 'chroma-js';
import { Options } from '../../Utils/SelectData';
import Select, { GroupBase, StylesConfig } from 'react-select';

const dot = (color = 'transparent') => ({
  alignItems: 'center',
  display: 'flex',

  ':before': {
    backgroundColor: color,
    borderRadius: 10,
    content: '" "',
    display: 'block',
    marginRight: 8,
    height: 10,
    width: 10,
  },
});
const colourStyles: StylesConfig<Options> = {
  control: (styles) => ({ ...styles, backgroundColor: 'white', fontFamily: 'Roboto'}),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    const color = chroma(data.color);
    return {
      ...styles,
      backgroundColor: isDisabled
        ? undefined
        : isSelected
        ? data.color
        : isFocused
        ? color.alpha(0.1).css()
        : undefined,
      color: isDisabled
        ? '#ccc'
        : isSelected
        ? chroma.contrast(color, 'white') > 2
          ? 'white'
          : 'black'
        : data.color,
      cursor: isDisabled ? 'not-allowed' : 'default',

      ':active': {
        ...styles[':active'],
        backgroundColor: !isDisabled
          ? isSelected
            ? data.color
            : color.alpha(0.3).css()
          : undefined,
      },
    };
  },
  input: (styles) => ({ ...styles, ...dot() }),
  placeholder: (styles) => ({ ...styles, ...dot('#ccc') }),
  singleValue: (styles, { data }) => ({...styles, ...dot(data.color) }) ,
};

export default (props: {router: any, langStyles: string, selectOptions: readonly Options[] }) => (
  <Select
    defaultValue={props.selectOptions[0]}
    styles={colourStyles}
    options={props.selectOptions}
    className={props.langStyles}
    onChange={(choice: any) => { choice['label'] === "English" ? props.router.push(`/en`, `/`, { locale: 'en'}) : choice['label'] === "Français" ? props.router.push(`/fr`, `/fr`, { locale: 'fr'}) : choice['label'] === "العربية" ? props.router.push(`/ar`, `/ar`, { locale: 'ar'}) : props.router.push(`/en`, `/en`, { locale: 'en'}) }}
  />
);
