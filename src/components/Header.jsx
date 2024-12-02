import { AppBar, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <AppBar sx={{ position: 'fixed', zIndex: 10 }}>
            <Toolbar>
                <Link to={'/'}>
                <Typography variant="h6" component="div" sx= {{ flexGrow: 1, color: 'white' }}>
                    Twitter
                </Typography>
                </Link>
                
            </Toolbar>
        </AppBar>
    
    )
}