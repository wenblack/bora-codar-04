interface UserProps {
    name?: string,
    status?: "Online" | "Offline"
}

export function Header({ name, status }: UserProps) {
    if (status === 'Online') {
        return (
            <div id="user-info">
                <img
                    src="https://randomuser.me/api/portraits/women/50.jpg"
                    alt="Mulher asiatica com gorro preto, óculos e cabelo preto até os ombros"
                />
                <div id="user-status">
                    <strong>{name}</strong>
                    <div
                        className="status"
                    >{status}</div>
                </div>
            </div>
        )
    }
    return (
        <div id="user-info">
            <img
                src="https://randomuser.me/api/portraits/women/50.jpg"
                alt="Mulher asiatica com gorro preto, óculos e cabelo preto até os ombros"
            />
            <div id="user-status">
                <strong>{name}</strong>
            </div>
        </div>
    )

}

