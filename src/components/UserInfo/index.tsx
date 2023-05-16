import Image from "next/image"

interface UserProps {
    name: string,
    status?: "Online" | "Offline"
}

export function UserInfo({ name, status }: UserProps) {
    const imageUrl = "https://randomuser.me/api/portraits/women/50.jpg"
    if (status === 'Online') {
        return (
            <div id="user-info">
                <Image
                    src={imageUrl}
                    alt="Mulher asiatica com gorro preto, óculos e cabelo preto até os ombros"
                    width={128}
                    height={128}
                    priority
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
            <Image
                src={imageUrl}
                alt="Mulher asiatica com gorro preto, óculos e cabelo preto até os ombros"
                width={128}
                height={128}
            />
            <div id="user-status">
                <strong>{name}</strong>
            </div>
        </div>
    )
}

