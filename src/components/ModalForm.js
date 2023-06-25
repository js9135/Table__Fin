import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { Box, Button, Checkbox, Dialog, DialogContent, DialogTitle, IconButton, TextField, Typography } from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';




const useStyles = makeStyles({

    TextField__box: {
        border: '1px solid #B8B8B8 !important',
        padding: '0.3rem 1rem !important',
        boxShadow: '0px 3px 5px -2px #0000002e',
        borderRadius: '6px',
        backgroundColor: '#E8E8E8',
        marginTop: '0.4rem !important',
        fontWeight: '500 !important',


    },
    btn__bg: {
        '@media(max-width : 900px)': {
            marginTop: '2rem'
        }
    },
    contact___btn: {
        background: 'linear-gradient(145deg, #3E71E3, #591EAC)',
        backgroundColor: 'transparent !important',
        color: '#fff !important',
        fontFamily: 'poppins !important',
        padding: '0.6rem 2rem !important',
        borderRadius: '5rem !important',
        transition: '0.5s !important',
        '&:hover': {
            transform: 'translateY(-5px)'
        },
        '@media(max-width : 900px)': {
            padding: '0.8rem 1.5rem !important',
        }
    },
    logo_wrap: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    logo__box: {
        backgroundColor: '#fff',
        padding: '0.6rem 1rem 0rem 1rem',
        borderRadius: '12px',
        margin: '0rem 1.5rem',
        opacity: '0.9',
    },
    cancel__butn: {
        color: '#6E01B1 !important',
        border: '1px solid #6E01B1 !important',
        padding: '0.5rem 1rem !important'
    },
    submit___btn: {
        color: '#fff !important',
        backgroundColor: '#6E01B1 !important',
        border: '1px solid #6E01B1 !important',
        padding: '0.5rem 1rem !important'
    },
    boxPopup: {
        backgroundColor: '#fff',
        border: '1px solid #00c430',
        padding: '3rem 2rem',
        borderRadius: '6px',
        textAlign: 'center',
        position:'absolute',
        top:'38%',
        right:'1rem',
        left:'1rem'
    }
})




const ModalForm = () => {





    const classes = useStyles();

    const [open, setOpen] = React.useState(false);
    const [scroll, setScroll] = React.useState('paper');

    const handleClickOpen = (scrollType) => () => {
        setOpen(true);
        setScroll(scrollType);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    const [show, setShow] = useState(false);

    // const handleOpen = event => {
    //     setOpen(event.currentTarget);
    // };




    return (
        <>

            <Box className={classes.btn__bg}>

                <Button onClick={handleClickOpen('body')} fullWidth sx={{
                    backgroundColor: '#6E01B1',
                    minWidth: '120px',
                    textTransform: 'uppercase',
                    color: '#fff',
                    padding: '0.6rem 1rem',
                    '&:hover': {
                        backgroundColor: '#6E01B1',
                        color: '#fff'
                    }
                }}>Pay</Button>
            </Box>

            <Box>
                <Dialog
                    sx={{
                        backgroundColor: '#000000c2',
                        position: 'relative',
                        '& .MuiPaper-root': {
                            backgroundColor: '#fff',

                            width: '400px'

                        }
                    }}
                    open={open}
                    onClose={handleClose}
                    scroll={scroll}
                    aria-labelledby="scroll-dialog-title"
                    aria-describedby="scroll-dialog-description"
                >

                    <DialogTitle id="scroll-dialog-title">

                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #6E01B1' }}>
                            <Typography variant="h6" fontWeight={700} color={'#6E01B1'}>Get in touch</Typography>
                            <IconButton onClick={handleClose}><ClearIcon sx={{ color: '#6E01B1' }} /></IconButton>
                        </Box>
                    </DialogTitle>

                    <DialogContent dividers={scroll === 'paper'}>
                        <Box>


                            <Box component={'form'}>

                                <Typography color={'#6A6A6A'}>FULL NAME</Typography>
                                <Box className={classes.TextField__box}>
                                    <TextField

                                        autoComplete="off"
                                        fullWidth
                                        variant="standard"
                                        placeholder={'Enter Full Name'}
                                        InputProps={{
                                            style: { color: "#000" },
                                            disableUnderline: true,
                                        }}
                                    />
                                </Box>

                                <Box height={25} />
                                <Typography color={'#6A6A6A'}>CARD NUMBER</Typography>
                                <Box className={classes.TextField__box}>
                                    <TextField

                                        autoComplete="off"
                                        fullWidth
                                        variant="standard"
                                        placeholder={'0000 0000 0000 0000'}
                                        InputProps={{
                                            style: { color: "#000" },
                                            disableUnderline: true,
                                        }}
                                    />
                                </Box>

                                <Box height={25} />
                                <Typography color={'#6A6A6A'}>EXPIRY</Typography>
                                <Box className={classes.TextField__box}>
                                    <TextField

                                        autoComplete="off"
                                        fullWidth
                                        variant="standard"
                                        placeholder={'MM/YY'}
                                        InputProps={{
                                            style: { color: "#000" },
                                            disableUnderline: true,
                                        }}
                                    />
                                </Box>

                                <Box height={25} />
                                <Typography color={'#6A6A6A'}>CVV</Typography>
                                <Box className={classes.TextField__box}>
                                    <TextField

                                        autoComplete="off"
                                        fullWidth
                                        variant="standard"
                                        placeholder={'Cvv'}
                                        InputProps={{
                                            style: { color: "#000" },
                                            disableUnderline: true,
                                        }}
                                    />
                                </Box>

                                <Box height={25} />









                                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <Button fullWidth onClick={handleClose} variant="outlined" className={classes.cancel__butn}>Cancel</Button>
                                    <Box width={50} />
                                    <Button onClick={() => setShow(prev => !prev)} fullWidth variant="contained" className={classes.submit___btn}>Submit</Button>
                                </Box>
                                {show && <Box className={classes.boxPopup}>
                                    <Typography color={'#00c430'}>Payment Successfully Please check your email</Typography>
                                </Box>}


                            </Box>


                        </Box>
                    </DialogContent>

                </Dialog>
            </Box>
        </>
    )
}

export default ModalForm;