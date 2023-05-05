export interface MessageProps {
    type: "sent" | "received"
    name: string
    hour: string
    message: string
    bold?: boolean
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