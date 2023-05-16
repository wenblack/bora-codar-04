import { ReactElement, createContext, useState } from "react";
export const Message_data = createContext<ContexType | null>(null);

interface contextProps {
    children: ReactElement
}

export interface MessageProps {
    type: 'sent' | 'received'
    name: string
    hour: string
    message: string
    bold?: boolean
}

export type ContexType = {
    message: MessageProps[];
    saveData: (mesage: MessageProps) => void
};

export function Context({ children }: contextProps) {
    const [message, setMessage] = useState<MessageProps[]>([])
    const saveData = (mesage: MessageProps) => {
        const newMessage: MessageProps = {
            hour: mesage.hour,
            message: mesage.message,
            name: mesage.name,
            bold: mesage.bold,
            type: mesage.type
        }
        setMessage([...message, newMessage])
    }

    return (
        <Message_data.Provider value={{ saveData, message }}>
            {children}
        </Message_data.Provider>
    );
}