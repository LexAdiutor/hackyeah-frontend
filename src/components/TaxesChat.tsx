import { useEffect, useState } from "react"

const isOverflowing = (element: HTMLElement) => {
    return element.scrollHeight > element.offsetHeight;
}

enum MsgSender {
    user = "USER",
    chat = "CHAT",
}

type ChatBubbleData = {
    sender: MsgSender,
    message: string,
}

export default function TaxesChat() {
    const [chatRows, setChatRows] = useState<number>(1);
    const [messages, setMessages] = useState<Array<ChatBubbleData>>([]);

    const [chatBox, setChatBox] = useState<HTMLDivElement | null>(null);

    useEffect(() => {
        const chatBox = document.querySelector("#chatBox") as HTMLDivElement;
        setChatBox(() => chatBox);
    }, [])

    return (
        <div className="h-full max-w-[48rem] w-full mx-auto flex flex-col flex-1">
            <div className="flex-1 h-36 overflow-y-auto scroll-smooth" id="chatBox">
                {
                    messages.map((message, i) => {
                        if (message.sender === MsgSender.chat) {
                            return (
                                <div className="chat chat-start" key={i}>
                                    <div className="chat-bubble">
                                        <p className="text-wrap break-all">{message.message}</p>
                                    </div>
                                </div>
                            )
                        }
                        return (
                            <div className="chat chat-end" key={i}>
                                <div className="chat-bubble">
                                    <p className="text-wrap break-all">{message.message}</p>
                                </div>
                            </div>
                        )
                    })
                }
                
            </div>

            <textarea
                name="userChatInput"
                className="textarea textarea-bordered resize-none w-full mt-4"
                rows={chatRows}
                onKeyUp={(event) => {
                    if (event.code === "Enter" && event.shiftKey === false) {
                        event.preventDefault()
                        
                        const message = event.currentTarget.value;
                        event.currentTarget.value = "";

                        setMessages((prev) => [...prev, { sender: MsgSender.user, message }]);

                        setMessages((prev) => [...prev, { sender: MsgSender.chat, message: Math.random().toString() }])

                        setTimeout(() => {
                            chatBox!.scrollTop = chatBox!.scrollHeight;
                        }, 50)
                        
                        setChatRows(() => 1);

                        return;
                    }

                    if (isOverflowing(event.currentTarget) && chatRows <= 12) setChatRows((prev) => prev + 1);
                }}
            />
            
        </div>
    )
}