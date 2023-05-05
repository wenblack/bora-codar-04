import { Message } from "../Message";


export function MessagesView() {
    return (
        <main id="messages">
            <div id="last-seen">
                <span>
                    Hoje 11:30
                </span>
            </div>

            <div className="messages">
                <Message
                    message='Tive uma ideia incrível para um projeto! 😍'
                    hour='11:30'
                    name='Cecília'
                    type='received'
                />

                <Message
                    message='Sério? Me conta mais.'
                    hour='11:30'
                    name='Você'
                    type='sent'
                />

                <Message
                    message='E se a gente fizesse um chat moderno e responsivo em apenas uma
              semana?'
                    hour='11:31'
                    name='Cecília'
                    type='received'
                />

                <Message
                    message='#boraCodar! 🚀'
                    hour='11:32'
                    name='Você'
                    type='sent'
                />
            </div>
        </main>

    );
}