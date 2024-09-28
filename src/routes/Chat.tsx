import { useState } from "react"
import TaxesChat from "../components/TaxesChat";

enum ChatType {
    taxes = "taxes",
    form = "form",
}


export async function loader() {

}

export default function Chat() {
    const [chatType, setChatType] = useState<ChatType>(ChatType.taxes);
    const [chatRows, setChatRows] = useState<number>(1);

    return (
        <div className="space-y-2 my-2 flex flex-col h-full">
            <div className="join mx-auto">
                <input className="join-item btn w-1/2" type="radio" name="taxPayerType" value={ChatType.taxes} onChange={() => setChatType(ChatType.taxes)} aria-label="Porozmawiajmy o podatkach" checked={chatType === ChatType.taxes} />
                <input className="join-item btn w-1/2" type="radio" name="taxPayerType" value={ChatType.form} onChange={() => setChatType(ChatType.form)} aria-label="Wypelnijmy wspolnie formularz" checked={chatType === ChatType.form} />
            </div>

            <div
                className="h-[calc(100dvh-12rem)] max-h-dvh"
            >
                {
                    chatType === ChatType.taxes ? <TaxesChat /> : "asd"
                }
            </div>

            
        </div>
    )
}