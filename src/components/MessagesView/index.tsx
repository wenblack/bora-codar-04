import { Message } from "../Message";
import { useState, useEffect, useContext, ReactElement } from 'react';
import { MessageProps } from "@/context";
import { LoadingView } from "../LoadingView";
import { ContexType, Message_data } from "@/context";
import { MessageError } from "../MessageError";

interface ViewProps {
    children?: ReactElement
}

export function MessagesView({ children }: ViewProps) {
    const [data, setData] = useState<MessageProps[]>([]);
    const [isLoading, setLoading] = useState(false);
    const { message, saveData } = useContext(Message_data) as ContexType;

    useEffect(() => {
        setLoading(true);
        fetch('/api/messages')
            .then((res) => res.json())
            .then((message) => {
                setData(message.messages);
                saveData(message.messages)
                setLoading(false);
                console.log(message)

            });
    }, [saveData]);

    if (isLoading) return <LoadingView />


    return (
        <main id="messages">
            <div id="last-seen">
                <span>
                    Hoje 11:30
                </span>
            </div>

            <div className="messages">
                {
                    data.map((message, i) =>

                        <Message
                            hour={message.hour}
                            message={message.message}
                            name={message.name}
                            type={message.type}
                            bold={message.bold}
                            key={i}
                        />
                    )
                }
                <>
                    {children}
                </>
            </div>
        </main>

    );
}