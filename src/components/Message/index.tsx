import { Checks } from "@phosphor-icons/react"

export interface MessageProps {
    type: "sent" | "received"
    name: string | undefined
    hour: string | undefined
    message: string | undefined
    bold?: boolean | undefined
}
export function Message({ bold, type, name, hour, message }: MessageProps) {
    if (type === "received") {
        return (
            <div className="message">
                <div className="top">{name} - {hour}</div>
                {
                    !bold
                        ? <div className="body">
                            {message}
                        </div>
                        : <div className="body">
                            <strong>
                                {message}
                            </strong>
                        </div>
                }

            </div>
        )
    }

    return (
        <div className="message you">
            <div className="top">{name} - {hour}</div>
            {
                !bold
                    ? <div className="body">
                        {message}
                        <Checks
                            style={{ marginLeft: '0.5rem' }}
                            color="aqua"
                            size={15}
                        />
                    </div>

                    : <div className="body">
                        <strong>
                            {message}
                        </strong>
                        <Checks size={15} style={{ marginLeft: '0.5rem' }} color="aqua" />
                    </div>
            }
        </div>
    )
}