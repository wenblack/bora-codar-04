import { ContexType, MessageProps, Message_data } from "@/context";
import { PaperPlaneRight } from "@phosphor-icons/react";
import { MouseEventHandler, useContext, useEffect, useState } from "react";


interface inputProps {
    onClick: MouseEventHandler | undefined
}


export function InputChat() {
    const [data, setData] = useState<MessageProps[]>([]);
    const [newMessage, setnewMessage] = useState('')
    const { message, saveData } = useContext(Message_data) as ContexType;

    function changeText(e: any) {
        e.preventDefault()
        setnewMessage(e.target.value)
        console.log(newMessage)
    }

    async function updateNewMessage(e: any) {
        e.preventDefault()
        await fetch('/api/messages')
            .then((res) => res.json())
            .then((message) => {
                setData(message.messages);
                saveData(message.messages)
                console.log(message)
            });
    }

    return (
        <form id="bottom" onSubmit={updateNewMessage}>
            <input type="text" placeholder="Digite sua mensagem" onChange={changeText} />
            <button type="submit">
                <i className="ph-paper-plane-right-fill">
                    <PaperPlaneRight weight='fill' />
                </i>
            </button>
        </form>
    );
}