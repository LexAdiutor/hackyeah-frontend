import { useEffect, useState } from "react"
import ChatComponent from "../components/ChatComponent";
import { ChatBubbleData } from "../utlis/ChatBubbleData";
import Visualization from "../components/Visualization";
import Preview from "../components/Preview";
import Cookies from "js-cookie";
import { ActionFunctionArgs } from "react-router-dom";
import { MsgSender } from "../utlis/MsgSender";

enum ChatType {
    taxes = "taxes",
    form = "form",
    visualization = "visualization",
}

const delay = async (time: number) => {
    return new Promise(resolve => setTimeout(resolve, time));
}

export default function Chat() {
    const [chatType, setChatType] = useState<ChatType>(ChatType.taxes);
    const [taxMessages, setTaxMessages] = useState<Array<ChatBubbleData>>([]);
    const [formMessages, setFormMessages] = useState<Array<ChatBubbleData>>([]);

    const sendMessage = async (message: string, setMessages: React.Dispatch<React.SetStateAction<Array<ChatBubbleData>>>, type: "GLOBAL" | "FORM") => {
        setMessages((prev) => [...prev, { message, sender: MsgSender.user }]);

        const cookieName = `${type === "GLOBAL" ? "tax" : "form"}ChatCookie`;

        const req = await fetch(`${import.meta.env.VITE_API_BACKEND_URL}/chat/sendMessage`, {
            method: "POST",
            body: JSON.stringify({
                message,
                type,
            }),
            headers: {
                "Content-Type": "Application/json",
                "Authorization": Cookies.get(cookieName) ?? "",
            },
        })

        const { hash } = await req.json();

        Cookies.set(cookieName, hash, {
            expires: 3600,
            path: "/",
            sameSite: "strict",
            secure: true,
        })

        await listenForMsgs(cookieName, setMessages);
    }

    const listenForMsgs = async (cookieName: string, setMessages: React.Dispatch<React.SetStateAction<Array<ChatBubbleData>>>) => {
        let response = true;

        while (response) {
            const req = await fetch(`${import.meta.env.VITE_API_BACKEND_URL}/chat/getMessage`, {
                method: "GET",
                headers: {
                    "Authorization": Cookies.get(cookieName) ?? "",
                },
            })

            const { working } = await req.json();
            response = working;

            await delay(1000);
        }

        const req = await fetch(`${import.meta.env.VITE_API_BACKEND_URL}/chat/getChat`, {
            method: "GET",
            headers: {
                "Authorization": Cookies.get(cookieName) ?? "",
            },
        })

        const { messages } = await req.json();
        const newMessages: Array<ChatBubbleData> = messages.map((msg: ChatBubbleData) => {
            return { sender: msg.sender, message: msg.message };
        })

        setMessages(() => newMessages)
    }

    useEffect(() => {
        if (Cookies.get("taxChatCookie")) listenForMsgs("taxChatCookie", setTaxMessages);
        if (Cookies.get("formChatCookie")) listenForMsgs("formChatCookie", setFormMessages);
    }, [])

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
                        <ChatComponent messages={taxMessages} setMessages={setTaxMessages} refresfer={chatType} sendMessage={(message: string) => sendMessage(message, setTaxMessages, "GLOBAL")} /> 
                    : chatType === ChatType.form ?
                        <div className="flex gap-4 h-full [&>*]:flex-1">
                            <ChatComponent messages={formMessages} setMessages={setFormMessages} refresfer={chatType} sendMessage={(mesaage: string) => sendMessage(mesaage, setFormMessages, "FORM")} />
                            <Preview />
                        </div>
                    : <Visualization />

                }
            </div>

            
        </div>
    )
}