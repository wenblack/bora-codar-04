export const teste = () => {
    let messages: any
    messages = document.querySelector(".messages")

    return (
        messages.lastElementChild.scrollIntoView()
    )
}

