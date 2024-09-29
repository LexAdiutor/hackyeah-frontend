import React, { SetStateAction, useEffect, useState } from "react"
import { MsgSender } from "../utlis/MsgSender";
import { ChatBubbleData } from "../utlis/ChatBubbleData";

type Props = {
    messages: Array<ChatBubbleData>,
    refresfer: any,
    sendMessage: (message: string) => void,
    disabled: boolean,
    isInactive: boolean,
    resetTimer: () => void,
}

export default function ChatComponent({ messages, refresfer, sendMessage, disabled, isInactive, resetTimer } : Props) {
    const [chatBox, setChatBox] = useState<HTMLDivElement | null>(null);

    const [isLastMsgFromUser, setIsLastMsgFromUser] = useState<boolean>(false);

    useEffect(() => {
        if (messages.length === 0) {
            setIsLastMsgFromUser(() => false);
            return;
        }
        if (messages[messages.length - 1].sender === MsgSender.chat) {
            setIsLastMsgFromUser(() => false);
            return;
        }

        setIsLastMsgFromUser(() => true);
    }, [messages])

    useEffect(() => {
        const chatBox = document.querySelector("#chatBox") as HTMLDivElement;
        setChatBox(() => chatBox); 
    }, [])

    useEffect(() => {
        if (chatBox) chatBox.scrollTop = chatBox.scrollHeight;        
    }, [refresfer, chatBox, messages]);

    return (
        <div className="h-full max-w-[48rem] w-full mx-auto flex flex-col flex-1">
            <div className="flex-1 h-36 overflow-y-auto scroll-smooth px-1" id="chatBox">
                {
                    messages.map((message, i) => {
                        if (message.sender === MsgSender.chat) {
                            return (
                                <div className="chat chat-start" key={i}>
                                    <div className="chat-bubble">
                                        <pre className="text-wrap break-words">{message.message}</pre>
                                    </div>
                                </div>
                            )
                        }
                        return (
                            <div className="chat chat-end" key={i}>
                                <div className="chat-bubble">
                                    <pre className="text-wrap break-words">{message.message}</pre>
                                </div>
                            </div>
                        )
                    })
                }
                {
                    isLastMsgFromUser ?
                        <div className="chat chat-start">
                            <div className="chat-bubble">
                                <div className="bouncing-loader relative top-3">
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                            </div>
                        </div>
                    : ""
                }
                {
                    isInactive && !isLastMsgFromUser ?
                        <div className="chat chat-start">
                            <div className="chat-bubble">
                                  <pre className="text-wrap break-words">Uzytkowniku, nadal jestes aktywny?</pre>
                            </div>
                        </div>
                    : ""
                }
            </div>

            <textarea
                disabled={disabled || isLastMsgFromUser}
                name="userChatInput"
                className="textarea textarea-bordered resize-none w-full mt-4 overflow-y-hidden"
                rows={1}
                onKeyUp={async (event) => {
                    event.preventDefault()
                    if (event.code === "Enter" && event.shiftKey === false) {                        
                        const message = event.currentTarget.value;
                        event.currentTarget.value = "";

                        if (chatBox) await sendMessage(message);
                    }
                }}

                onChange={(event) => {
                    event.currentTarget.style.height = "1px";
                    event.currentTarget.style.height = `${event.currentTarget.scrollHeight}px`;

                    resetTimer();
                }}
            />
            
        </div>
    )
}