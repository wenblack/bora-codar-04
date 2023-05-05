import { Message } from "../Message";
import { useState, useEffect } from 'react';
import { MessageProps } from "../Message";
import { LoadingView } from "../LoadingView";


export function MessagesView() {
    const [data, setData] = useState<MessageProps[]>([]);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch('/api/messages')
            .then((res) => res.json())
            .then((data) => {
                setData(data.messages);
                setLoading(false);
                console.log(data)
            });
    }, []);

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
            </div>
        </main>

    );
}