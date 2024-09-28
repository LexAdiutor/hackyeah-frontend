import { useState } from "react"
import ChatComponent from "../components/ChatComponent";
import { ChatBubbleData } from "../utlis/ChatBubbleData";
import Visualization from "../components/Visualization";
import Preview from "../components/Preview";

enum ChatType {
    taxes = "taxes",
    form = "form",
    visualization = "visualization",
}

export async function loader() {

}



export default function Chat() {
    const [chatType, setChatType] = useState<ChatType>(ChatType.taxes);
    const [taxMessages, setTaxMessages] = useState<Array<ChatBubbleData>>([]);
    const [formMessages, setFormMessages] = useState<Array<ChatBubbleData>>([]);

    return (
        <div className="space-y-4 my-2 flex flex-col h-full">
            <div className="join mx-auto">
                <input className="join-item btn w-1/3" type="radio" name="taxPayerType" value={ChatType.taxes} onChange={() => setChatType(ChatType.taxes)} aria-label="Porozmawiajmy o podatkach" checked={chatType === ChatType.taxes} />
                <input className="join-item btn w-1/3" type="radio" name="taxPayerType" value={ChatType.form} onChange={() => setChatType(ChatType.form)} aria-label="Wypelnijmy wspolnie formularz" checked={chatType === ChatType.form} />
                <input className="join-item btn w-1/3" type="radio" name="taxPayerType" value={ChatType.visualization} onChange={() => setChatType(ChatType.visualization)} aria-label="Wizualizacja pliku" checked={chatType === ChatType.visualization} />
            </div>

            <div
                className={chatType !== ChatType.visualization ? "h-[calc(100dvh-12rem)] max-h-dvh" : ""}
            >
                {
                    chatType === ChatType.taxes ?
                        <ChatComponent messages={taxMessages} setMessages={setTaxMessages} refresfer={chatType} /> 
                    : chatType === ChatType.form ?
                        <div className="flex gap-4 h-full [&>*]:flex-1">
                            <ChatComponent messages={formMessages} setMessages={setFormMessages} refresfer={chatType} />
                            <Preview />
                        </div>
                    : <Visualization />

                }
            </div>

            
        </div>
    )
}