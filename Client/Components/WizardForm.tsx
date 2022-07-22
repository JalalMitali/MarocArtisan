import * as React from "react";
import { useContext } from "react";
import { useForm, useController, UseControllerProps } from "react-hook-form";
import { ArtisanContext } from "../../pages/index";
import { jobType } from '../../Utils/SelectData'
import FormSelect from "./FormSelect";
import { styles } from "./FormStyles";
import Select from 'react-select'
import { artisanOpenings } from '../../Utils/SelectData'

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

const submitted = (router: any, data: any, form: any, setForm: any) => {
  setForm(`jobType: ${data.JobType["value" as unknown as number]}`);
  router.push(router.push(`/hire/${data.JobType["value" as unknown as number]}`, `/hire/${data.JobType["value" as unknown as number]}`, { shallow: true }));
}

function Input(props: UseControllerProps<FormValues>) {
  const { field, fieldState } = useController(props);
  
  return (
    <div {...field} >
      <FormSelect change={field.onChange} selectOptions={jobType} langStyles="" styles={styles}/>
    </div>
  );
}

export function PlumberForm() {
  const { form, setForm } = useContext(ArtisanContext)

  const { handleSubmit, control } = useForm<FormValues>({
    defaultValues: {
      JobType: "",
    },
    mode: "onChange"
  });
  const onSubmit = (data: FormValues) => { console.log(JSON.stringify(form)), setForm({"jobType": data.JobType["value" as unknown as number]})}

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="m-auto text-2xl tablet:text-3xl laptop:text-6xl">
      <Input control={control} name="JobType" rules={{ required: true }} />
      <input type="submit" className='min-w-screen border-4 border-white bg-rose-500 rounded-full bg-black text-white text-bold text-3xl tablet:text-5xl laptop:text-7xl' />
    </form>
  );
}
