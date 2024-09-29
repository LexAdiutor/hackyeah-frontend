import { Form, redirect } from "react-router-dom";
import type { ActionFunctionArgs } from "react-router-dom"

export async function action({ request }: ActionFunctionArgs) {
    const formData = await request.formData();
    console.log(formData); 

    return redirect("/login")
}

export default function Login() {

    return (
        <div className="min-h-full grid place-content-center">
            <Form method="POST" className="flex flex-col gap-4 max-w-96">
                <label className="input input-bordered flex items-center gap-2">
                    <span className="icon">mail</span>
                    <input type="text" className="grow" placeholder="mail" name="login" />
                </label>

                <label className="input input-bordered flex items-center gap-2">
                    <span className="icon">key</span>
                    <input type="password" className="grow" placeholder="haslo" name="password" />
                </label>

                <button type="submit" className="btn btn-primary">
                    Zaloguj
                </button>
            </Form>
        </div>
    )
}