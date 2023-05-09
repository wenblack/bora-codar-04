import { MessageProps } from "@/components/Message";
import { ReactElement, createContext, useState } from "react";
export const Message_data = createContext({});

interface contextProps {
    children: ReactElement
}

export function Context({ children }: contextProps) {
    const [message, setMessage] = useState<MessageProps[]>([]);;

    return (
        <Message_data.Provider value={{ message, setMessage }}>
            {children}
        </Message_data.Provider>
    );
}