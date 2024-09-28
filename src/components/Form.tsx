import React from 'react'
import Input, { InputType } from './Input';

const Form = ({data, onFormChange}: {data: InputType[], onFormChange?: (form: any) => void}) => {
  const [form, setForm] = React.useState<Object>(Object.fromEntries(Object.values(data).map((q) => [q.name, q.default ? q.default : ''])));

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