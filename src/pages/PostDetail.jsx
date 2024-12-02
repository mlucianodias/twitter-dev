import { Card, CardContent } from "@mui/joy";
import { Box, Typography } from "@mui/material";

import { grey } from "@mui/material/colors"

export default function PostDetail() {
    const post = {
        id: 3,
        author: "Lucas Santos",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
    

    return (
        <Card variant="outlined" sx={{ overflow: 'auto', margin: 'auto', width: 940, marginTop: '7em'}}>
            <CardContent>
                <Typography component='div'>
                    <Box sx={{ fontSize: 10, textTransform: 'uppercase', marginBottom: '1em', color: 'GrayText'}}>Publicado por {post.author}</Box>
                    <Box sx={{ fontWeight: 'light', color: grey[700], fontSize: 24}}>{ post.content }</Box>
                </Typography>
            </CardContent>
        </Card>
    )
}