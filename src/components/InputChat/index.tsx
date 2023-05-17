import { ContexType, MessageProps, Message_data } from "@/context";
import { PaperPlaneRight } from "@phosphor-icons/react";
import { MouseEventHandler, useContext, useEffect, useState } from "react";
import { useRouter } from 'next/router';



export function InputChat() {
    const router = useRouter();
    const [data, setData] = useState<MessageProps[]>([]);
    const [newMessage, setnewMessage] = useState('')
    const { message, saveData } = useContext(Message_data) as ContexType;

    function changeText(e: any) {
        e.preventDefault()
        setnewMessage(e.target.value)
        console.log("Digitado: " + newMessage)
    }

    async function updateNewMessage(e: any) {
        e.preventDefault()
        router.push('/send')
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