
import styles from "./contact.module.css"
import {Alert, Button, Fab, Grid, Snackbar, TextField} from "@mui/material";
import {useState} from "react";
import SendIcon from '@mui/icons-material/Send';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import LocationOnIcon from '@mui/icons-material/LocationOn';
export const Contact = ()=>{

    const [email,setEmail]= useState("")
    const [name,setName]= useState("")
    const [message,setMessage]= useState("")
    const [open,setOpen] = useState(false)


    const handleSubmit = ()=>{
            setOpen(true)
    }
    const handleClose = ()=>{
        setOpen(false)
    }

    return (
        <>

        <div className={styles.global}>

            <Grid container spacing={2}>
                <Grid item md={6} xs={12}>
                    <div className={styles.iconsTitle}>Submit a feedback</div>
                    <div className={styles.contactForm}>
                    <div>
                    <TextField
                        id="outlined-basic"
                        label="Name"
                        variant="outlined"
                        fullWidth margin="dense"
                        required
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                    />
                    </div>
                    <div>
                    <TextField
                        id="outlined-basic"
                        label="Email"
                        variant="outlined"
                        fullWidth
                        margin="dense"
                        required
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                    />
                    </div>
                    <div>
                    <TextField
                        id="outlined-basic"
                        label="Feedback"
                        variant="outlined"
                        fullWidth
                        margin="dense"
                        required
                        value={message}
                        onChange={(e)=>setMessage(e.target.value)}
                    />
                    </div>
                    <div >
                        <Button
                            variant="outlined"
                            color='secondary'
                            endIcon={<SendIcon />}
                            size="large"
                            onClick={handleSubmit}
                        >
                            Submit
                        </Button>
                    </div>
                    </div>
                    <Snackbar open={open} autoHideDuration={3000} onClose={handleClose} >
                        <Alert  severity="success" sx={{ width: '100%' }} onClose={handleClose}>
                            Message sent , thank you !
                        </Alert>
                    </Snackbar>
                </Grid>
                <Grid item md={6} xs={12}>
                    <div>
                        <div className={styles.iconsTitle}>
                            Get In Touch
                        </div>
                        <div className={styles.iconsContainer}>
                            <div className={styles.icons}>
                        <Fab color="primary" aria-label="add">
                            <FacebookIcon />
                        </Fab>
                            </div>
                            <div className={styles.icons}>
                        <Fab color="primary" aria-label="add">
                            <LinkedInIcon />
                        </Fab>
                            </div>
                            <div className={styles.icons}>
                        <Fab color="extended" aria-label="add">
                            <MailIcon />
                        </Fab>
                            </div>
                            <div className={styles.icons}>
                        <Fab color="error" aria-label="add">
                            <LocationOnIcon />
                        </Fab>
                            </div>
                        </div>
                    </div>
                </Grid>
            </Grid>

        </div>

        </>
    )
}