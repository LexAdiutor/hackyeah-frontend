import React from 'react'
import Input, { InputType } from './Input';
import Cookies from 'js-cookie';

const COOKIE_NAME = "chatHash";

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
		<button
			onClick={async () => {
				// const isOk = Object.entries(form).map(([key, value]) => {
				// 	return { key: data.find(({name}: InputType) => name === key)?.required ? value !== '' : true };
				// })

				// console.log(form)
				// console.log(isOk)
				const req = await fetch(`${import.meta.env.VITE_API_BACKEND_URL}/chat/submitForm`, {
					method: "POST",
					body: JSON.stringify(form),
					headers: {
						"Authorization": Cookies.get(COOKIE_NAME) ?? "",
						"Content-Type": "Application/json",
					}
				})

				const res = await req.json();
				console.log(res);
			}}
		>
			Wyslij
		</button>
		</div>
	)
}

export default Form