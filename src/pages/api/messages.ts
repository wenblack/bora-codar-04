import { NextApiRequest, NextApiResponse } from "next";

const result = {
    messages: [
        {
            "message": "Tive uma ideia incrível para um projeto! 😍",
            "hour": "11:30",
            "name": "Cecília",
            "type": "received",
            "bold": false
        },
        {
            "message": "Sério? Me conta mais.",
            "hour": "11:30",
            "name": "Você",
            "type": "sent",
            "bold": false
        },
        {
            "message": "E se a gente fizesse um chat moderno e responsivo em apenas uma semana?",
            "hour": "11:31",
            "name": "Cecília",
            "type": "received",
            "bold": false
        },
        {
            "message": "#boraCodar! 🚀",
            "hour": "11:32",
            "name": "Você",
            "type": "sent",
            "bold": true
        }
    ]
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    return (
        res.status(200).json(result)
    )

}