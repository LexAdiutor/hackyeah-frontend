import React, { SetStateAction, useEffect, useState } from "react"
import { MsgSender } from "../utlis/MsgSender";
import { ChatBubbleData } from "../utlis/ChatBubbleData";

type Props = {
    messages: Array<ChatBubbleData>,
    setMessages: React.Dispatch<React.SetStateAction<Array<ChatBubbleData>>>,
    refresfer: any,
    sendMessage: (message: string) => void,
}

export default function ChatComponent({ messages, setMessages, refresfer, sendMessage } : Props) {
    const [chatBox, setChatBox] = useState<HTMLDivElement | null>(null);

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
                                        <pre className="text-wrap break-all">{message.message}</pre>
                                    </div>
                                </div>
                            )
                        }
                        return (
                            <div className="chat chat-end" key={i}>
                                <div className="chat-bubble">
                                    <pre className="text-wrap break-all">{message.message}</pre>
                                </div>
                            </div>
                        )
                    })
                }
                
            </div>

            <textarea
                name="userChatInput"
                className="textarea textarea-bordered resize-none w-full mt-4 overflow-y-hidden"
                // rows={chatRows}
                rows={1}
                onKeyUp={async (event) => {
                    event.preventDefault()
                    if (event.code === "Enter" && event.shiftKey === false) {                        
                        const message = event.currentTarget.value;
                        event.currentTarget.value = "";

                        // console.log(message)

                        await sendMessage(message);

                        // setMessages((prev) => [...prev, { sender: MsgSender.user, message }]);

                        // setTimeout(() => {
                        //     setMessages((prev) => [...prev, { sender: MsgSender.chat, message: Math.random().toString() }])
                        // }, 1000)
                        

                        // setTimeout(() => {
                        //     if (chatBox) chatBox.scrollTop = chatBox.scrollHeight;
                        // }, 50)
                    }

                    // event.currentTarget.style.height = "1px"
                    // event.currentTarget.style.height = `${event.currentTarget.scrollHeight}px`
                }}
            />
            
        </div>
    )
}