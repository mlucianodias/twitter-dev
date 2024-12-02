import './newPostForm.css'

import { Send } from "@mui/icons-material";
import { Textarea } from "@mui/joy";
import { Button } from "@mui/joy";
import { useState } from "react";

export default function NewPostForm({ updateFeed }) {
    const [content, setContent] = useState('')

     const handleChangeContent = (event) => {
        setContent(event.target.value)
     }

     const handleFormSubmit = async (e) => {
        e.preventDefault()
        console.log('Sending event', content)

        const payload = {
            author: 'Lucas Santos',
            content
        }

        console.log(payload)

        const response = await fetch('http://localhost:3000/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })

        updateFeed()

     }


    return (
        <>
        <form className="new-post" onSubmit={handleFormSubmit}>
            <Textarea className="input" value={content} onChange={handleChangeContent} minRows={3} placeholder="no que você esta pensando?" />

            <Button
            type="submit"
            variant="outlined"
            size="lg"
            startDecorator={<Send />}>
                Enviar
            </Button>
        </form>
        </>
    )
}