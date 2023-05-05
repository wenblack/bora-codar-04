import { PaperPlaneRight } from "@phosphor-icons/react";


export function InputChat() {
    return (
        <form id="bottom">
            <input type="text" placeholder="Digite sua mensagem" />
            <button>
                <i className="ph-paper-plane-right-fill">
                    <PaperPlaneRight weight='fill' />
                </i>
            </button>
        </form>
    );
}