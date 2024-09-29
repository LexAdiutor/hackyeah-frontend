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
import type { VisualozationPoints } from "../utlis/Visualizationpoints";
import { InputType } from "../components/Input";

const COOKIE_NAME = "chatHash";
const PHANTOM_MSG_TIME = 1000 * 60 * 5;
const PHANTOM_MSG_DATA = "Uzytkowniku, nadal jestes aktywny?";

enum ChatType {
    taxes = "taxes",
    form = "form",
    visualization = "visualization",
}

enum FormChatState {
    unset = 'unset',
    form = "form",
    preview = "preview",
    ended = "ended",
}

const delay = async (time: number) => {
    return new Promise(resolve => setTimeout(resolve, time));
}

export default function Chat() {
    const [chatType, setChatType] = useState<ChatType>(ChatType.form);
    const [taxMessages, setTaxMessages] = useState<Array<ChatBubbleData>>([]);
    const [formMessages, setFormMessages] = useState<Array<ChatBubbleData>>([]);
    const [formData, setFormData] = useState<Array<InputType>>([]);
    const [formChatState, setFormChatState] = useState<FormChatState>(FormChatState.unset);

    const [vidualizationPoints, setVisualizationpoints] = useState<VisualozationPoints | null>(null);
    
    const [isInactive, setIsInactive] = useState<boolean>(false);

    const [lastUpdate, setLastUpdate] = useState<number>(Date.now());

    const setFormOk = async () => {
        setFormChatState(() => FormChatState.preview);
        setFormData(() => []);

        const req = await fetch(`${import.meta.env.VITE_API_BACKEND_URL}/chat/getChat`, {
            method: "GET",
            headers: {
                "Authorization": Cookies.get(COOKIE_NAME) ?? "",
            },
        })

        const { form, formMessages: fMessaeges, globalMessages, ended } = await req.json();

        setFormMessages(fMessaeges);
    }

    const sendMessage = async (message: string, setMessages: React.Dispatch<React.SetStateAction<Array<ChatBubbleData>>>, type: "GLOBAL" | "FORM") => {
        setMessages((prev) => [...prev, { message, sender: MsgSender.user }]);

        resetTimer();

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

        resetTimer();

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

        const { form, formMessages: fMessaeges, globalMessages, ended, fields } = await req.json();
        
        setTaxMessages(() => globalMessages);
        setFormMessages(() => fMessaeges);
        setFormData(() => form ?? []);

        setVisualizationpoints(() => fields);

        if (ended) setFormChatState(() => FormChatState.ended);

        resetTimer();
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
        if (formData.length !== 0) setFormChatState(() => FormChatState.form);
    }, [formMessages, formData]);

    useEffect(() => {
        resetTimer();
    }, [chatType])

    useEffect(() => {
        initialLoad();
        resetTimer();
    }, [])

    const resetTimer = () => {
        setIsInactive(() => false);
        setLastUpdate(Date.now());
    }

    useEffect(() => {
        let isMounted = true;
    
        const incativityChecker = async () => {
            while (isMounted) {    
                if ((Date.now() - lastUpdate) > PHANTOM_MSG_TIME) {
                    setIsInactive(true);
                } else {
                    setIsInactive(false);
                }
    
                await delay(1000 * 2);
            }
        };
    
        incativityChecker();
    
        return () => {
            isMounted = false;
        };
    }, [lastUpdate]);


    return (
        <>
            <div className="space-y-4 my-2 flex flex-col h-full">
                <div className="join mx-auto">
                    <div className="tooltip" data-tip="w budowie">
                        <input className="join-item btn w-full" type="radio" name="taxPayerType" value={ChatType.taxes} onChange={() => setChatType(ChatType.taxes)} aria-label="Porozmawiajmy o podatkach" checked={chatType === ChatType.taxes} disabled />
                    </div>
                    <input className="join-item btn w-1/3" type="radio" name="taxPayerType" value={ChatType.form} onChange={() => setChatType(ChatType.form)} aria-label="Wypelnijmy wspolnie formularz" checked={chatType === ChatType.form} />
                    
                    
                    <input className="join-item btn w-1/3" type="radio" name="taxPayerType" value={ChatType.visualization} onChange={() => setChatType(ChatType.visualization)} aria-label="Wizualizacja pliku" checked={chatType === ChatType.visualization} disabled={!vidualizationPoints} />
                </div>

                <div
                    className={chatType !== ChatType.visualization ? "h-[calc(100dvh-12rem)] max-h-dvh" : ""}
                >
                    {
                        chatType === ChatType.taxes ?
                        // <div className="grid [&>*]:col-start-1 [&>*]:col-end-1 [&>*]:row-start-1 [&>*]:row-end-1 place-content-center">
                            // <p>w budowe</p>
                            <ChatComponent messages={taxMessages} refresfer={chatType} sendMessage={(message: string) => sendMessage(message, setTaxMessages, "GLOBAL")} disabled={true} isInactive={isInactive} resetTimer={resetTimer} /> 
                        // </div>
                            
                        : chatType === ChatType.form ?
                            <div className="flex gap-4 h-full [&>*]:flex-1">
                                
                                                               <ChatComponent messages={formMessages} refresfer={chatType} sendMessage={(mesaage: string) => sendMessage(mesaage, setFormMessages, "FORM")} disabled={formChatState === FormChatState.form || formChatState === FormChatState.ended} isInactive={isInactive} resetTimer={resetTimer} />
     
                                {formChatState === FormChatState.preview ? <Preview /> : ""}
                                {formChatState === FormChatState.form ? <Form data={formData} setFormOk={setFormOk} /> : ""}
                            </div>
                        : <Visualization visualizationPoints={vidualizationPoints!} />

                    }
                </div>
            </div>
        </>
    )
}
