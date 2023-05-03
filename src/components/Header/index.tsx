interface UserProps {
    name?: string,
    status?: string
}

export function Header({ name, status }: UserProps) {
    return (
        <div id="user-info">
            <img
                src="https://randomuser.me/api/portraits/women/50.jpg"
                alt="Mulher asiatica com gorro preto, óculos e cabelo preto até os ombros"
            />

            <div id="user-status">
                <strong>Cecilia Sassaki</strong>
                <div className="status">Online</div>
            </div>
        </div>
    )
}

