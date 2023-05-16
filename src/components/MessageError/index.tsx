import { Clock } from "@phosphor-icons/react"

export function MessageError() {
    return (

        <div className="message you">
            <div className="top">Você - Agora mesmo </div>

            <div className="error" style={{ marginTop: '1rem' }}>
                <Clock
                    size={15}
                    style={{ marginRight: '0.5rem' }}
                    color={"aqua"}
                />
                Waiting for this message. This may take a while.
                <a
                    style={{ marginLeft: '0.5rem', color: "aqua" }}
                >
                    Learn more
                </a>
            </div>

        </div>
    )
}