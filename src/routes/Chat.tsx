import { useEffect, useState } from "react"
import ChatComponent from "../components/ChatComponent";
import { ChatBubbleData } from "../utlis/ChatBubbleData";
import Visualization from "../components/Visualization";
import Preview from "../components/Preview";
import Cookies from "js-cookie";
import { ActionFunctionArgs } from "react-router-dom";
import { MsgSender } from "../utlis/MsgSender";
import SideMenu from "../components/SideMenu";
import Form from "../components/Form";
import { InputType } from "../components/Input";

const COOKIE_NAME = "chatHash";

enum ChatType {
    taxes = "taxes",
    form = "form",
    visualization = "visualization",
}

enum FormChatState {
    unset = 'unset',
    form = "form",
    preview = "preview",
    wrong = "wrong",
}

const delay = async (time: number) => {
    return new Promise(resolve => setTimeout(resolve, time));
}

export default function Chat() {
    const [chatType, setChatType] = useState<ChatType>(ChatType.taxes);
    const [taxMessages, setTaxMessages] = useState<Array<ChatBubbleData>>([]);
    const [formMessages, setFormMessages] = useState<Array<ChatBubbleData>>([]);
    const [formData, setFormData] = useState<Array<InputType>>([]);
    const [formChatState, setFormChatState] = useState<FormChatState>(FormChatState.unset);

    const [cookieHash, setCookieHash] = useState<string | null>(null);

    const setFormOk = () => {
        setFormChatState(() => FormChatState.preview);
        setFormData(() => []);
    }

    const sendMessage = async (message: string, setMessages: React.Dispatch<React.SetStateAction<Array<ChatBubbleData>>>, type: "GLOBAL" | "FORM") => {
        setMessages((prev) => [...prev, { message, sender: MsgSender.user }]);

        const req = await fetch(`${import.meta.env.VITE_API_BACKEND_URL}/chat/sendMessage`, {
            method: "POST",
            body: JSON.stringify({
                message,
                type,
            }),
            headers: {
                "Content-Type": "Application/json",
                "Authorization": Cookies.get(COOKIE_NAME) ?? "",
            },
        })

        const { hash } = await req.json();

        Cookies.set(COOKIE_NAME, hash, {
            expires: 1,
            path: "/",
            sameSite: "strict",
            secure: true,
        })

        setCookieHash(() => hash);

        await listenForMsgs();
    }

    const listenForMsgs = async () => {
        let response = true;

        while (response) {
            const req = await fetch(`${import.meta.env.VITE_API_BACKEND_URL}/chat/getState`, {
                method: "GET",
                headers: {
                    "Authorization": Cookies.get(COOKIE_NAME) ?? "",
                },
            })

            const { working } = await req.json();
            response = working;

            await delay(1000);
        }

        const req = await fetch(`${import.meta.env.VITE_API_BACKEND_URL}/chat/getChat`, {
            method: "GET",
            headers: {
                "Authorization": Cookies.get(COOKIE_NAME) ?? "",
            },
        })

        const { form, formMessages: fMessaeges, globalMessages } = await req.json();

        console.log(form);


        
        setTaxMessages(() => globalMessages);
        setFormMessages(() => fMessaeges);
        setFormData(() => form ?? []);





            // console.log(form)



        // if (newMessages[newMessages.length - 1].message === "Przepraszamy, ale nie wspieramy wypełniania wniosku dla tego podatku.") setFormChatState(() => FormChatState.notok);
    }

    const initialLoad = async () => {
        const chatHash = Cookies.get(COOKIE_NAME);

        if (!chatHash) {
            const req = await fetch(`${import.meta.env.VITE_API_BACKEND_URL}/chat/createHash`, {
                method: "GET",
            });

            const { hash } = await req.json();
            Cookies.set(COOKIE_NAME, hash, {
                expires: 1,
                path: "/",
                sameSite: "strict",
                secure: true,
            });
        }

        await listenForMsgs();
    }

    useEffect(() => {
        if (!formMessages[formMessages.length - 1]) return;
        if (formMessages[formMessages.length - 1].message === "Przepraszamy, ale nie wspieramy wypełniania wniosku dla tego podatku.") {
            setFormChatState(() => FormChatState.wrong);
            return;
        }
        if (formData.length !== 0) setFormChatState(() => FormChatState.form);

    }, [formMessages, formData])

    // useEffect(() => {
    //     if (formData.length !== 0) setFormChatState(() => FormChatState.form);
    // }, [formData])

    useEffect(() => {
        initialLoad();
    }, [])

    return (
        <>
            <SideMenu cookieHash={cookieHash} setCookieHash={setCookieHash} />
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
                            <ChatComponent messages={taxMessages} refresfer={chatType} sendMessage={(message: string) => sendMessage(message, setTaxMessages, "GLOBAL")} disabled={false} /> 
                        : chatType === ChatType.form ?
                            <div className="flex gap-4 h-full [&>*]:flex-1">
                                <ChatComponent messages={formMessages} refresfer={chatType} sendMessage={(mesaage: string) => sendMessage(mesaage, setFormMessages, "FORM")} disabled={formChatState === FormChatState.form || formChatState === FormChatState.wrong} />
                                {formChatState === FormChatState.preview ? <Preview /> : ""}
                                {formChatState === FormChatState.form ? <Form data={formData} setFormOk={setFormOk} /> : ""}
                            </div>
                        : <Visualization />

                    }
                </div>
            </div>
        </>
    )
}

// Przepraszmy, ale nie wspierazmy wypelniania wniosku dla tego podatku.