import React from 'react'
import Input, { InputType } from './Input';

const Form = ({dataUrl, onFormChange}: {dataUrl: string, onFormChange?: (form: any) => void}) => {
  const [form, setForm] = React.useState<Object>({});
  const [data, setData] = React.useState<InputType[]>([]);

  React.useEffect(() => {
    fetch(dataUrl)
      .then(response => response.json())
      .then((data: InputType[]) => {
        setForm(Object.fromEntries(Object.values(data).map((q) => [q.name, q.default ? q.default : ''])));
        setData(data);
      });
  }, []);

  React.useEffect(() => {
    if (onFormChange)
      onFormChange(form);
  }, [form]);
  
  return (
    <div>
      {data.map((question: InputType, index) => (
        <Input key={index} question={question} form={form} onChange={(newValue) => {
          setForm({ ...form, [question.name]: newValue });
        }} />
      ))}
    </div>
  )
}

export default Form