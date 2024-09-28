import { useState } from "react";
import { ActionFunctionArgs, Form, redirect } from "react-router-dom";

export async function action({ request }: ActionFunctionArgs) {
    const formData = await request.formData();
    console.log(formData);

    return redirect("/register");
}

enum TaxPayerType {
    person = "person",
    company = "company",
}

export default function Register() {
    const [taxPayerType, setTaxPayerType] = useState<TaxPayerType>(TaxPayerType.person)

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

                <div className="join">
                    <input className="join-item btn w-1/2" type="radio" name="taxPayerType" value={TaxPayerType.company} onChange={() => setTaxPayerType(TaxPayerType.person)} aria-label="Osoba fizyczna" checked={taxPayerType === TaxPayerType.person} />
                    <input className="join-item btn w-1/2" type="radio" name="taxPayerType" value={TaxPayerType.person} onChange={() => setTaxPayerType(TaxPayerType.company)} aria-label="Podatnik niebedocy osoba fizyczna" checked={taxPayerType === TaxPayerType.company} />
                </div>

                {taxPayerType}

                <button type="submit" className="btn btn-primary">
                    Zarejestroj
                </button>
            </Form>
        </div>
    )
}