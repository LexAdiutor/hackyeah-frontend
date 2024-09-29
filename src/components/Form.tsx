import React from 'react'
import Input, { InputType } from './Input';
import Cookies from 'js-cookie';

const COOKIE_NAME = "chatHash";

const Form = ({data, setFormOk, onFormChange}: {data: InputType[], setFormOk: () => void , onFormChange?: (form: any) => void}) => {
	const [form, setForm] = React.useState<Object>(Object.fromEntries(Object.values(data).map((q) => [q.name, q.default ? q.default : ''])));

	React.useEffect(() => {
		if (onFormChange)
		onFormChange(form);
	}, [form]);
	
	return (
		<div className="overflow-y-auto">
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

				const { success } = await req.json();
				if (success) setFormOk();
			}}
		>
			Wyslij
		</button>
		</div>
	)
}

export default Form