import { Box, Button, Container, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import bkarrow from '../../assets/images/bkarrow.svg'
import card from '../../assets/images/card.svg'
import cardb from '../../assets/images/cardb.svg'
import gpay from '../../assets/images/gpay.svg'
import ppay from '../../assets/images/ppay.svg'
import cpay from '../../assets/images/cpay.svg'
import ModalForm from "../../components/ModalForm";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
    back__btn: {
        backgroundColor: 'transparent !important',
        boxShadow: 'inherit !important',
        color: '#6E01B1 !important',
        textTransform: 'capitalize !important',
        padding: '0px !important'
    },
    butn__wrap: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    input__wrapBox: {
        backgroundColor: '#fff',
        display: 'flex',
        padding: '1.5rem',
        borderRadius: '8px',
        marginBottom: '1rem',
        boxShadow: '0px 0px 12px -2px #00000029',
        justifyContent: 'space-between',
        marginRight: '1rem'
    },
    I_left: {
        width: '48%'
    },
    I_right: {
        width: '48%'
    },
    TextField__box: {
        border: '1px solid #B8B8B8 !important',
        padding: '0.3rem 1rem !important',
        boxShadow: '0px 3px 5px -2px #0000002e',
        borderRadius: '6px',
        backgroundColor: '#E8E8E8',
        marginTop: '0.4rem !important',
        fontWeight: '500 !important',


    },
    amount: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '2rem 0rem'
    },
    root: {
        marginTop: '1rem',
        overflowY: 'scroll',
        height: '410px',


        "&::-webkit-scrollbar": {
            width: '4px',
        },
        "&::-webkit-scrollbar-track": {
            backgroundColor: '#D9D9D9',

        },
        "&::-webkit-scrollbar-thumb": {
            borderRadius: '10px',
            background: '#6E01B1',
        },
    },
    pay___list: {
        margin: '1.5rem 0rem 0rem 0rem',
        padding: 0,
        listStyle: 'none',
        display: 'flex',
        alignItems: 'center',
        '@media(max-width : 600px)': {
            display: 'inherit'
        }

    },
    btn_li: {
        marginLeft: '1.5rem',
        '@media(max-width : 600px)': {
            marginLeft: '0rem',
            marginTop: '1rem',
        }
    },
    payment__butn: {
        backgroundColor: 'transparent !important',
        boxShadow: 'inherit !important',
        border: '1px solid #6E01B1 !important',
        color: '#000 !important',
        minHeight: '50px !important',
        padding: '7px 10px 0px 10px !important',
        alignItems: 'center !important',
        '&:hover': {
            backgroundColor: '#6E01B1 !important',
            color: '#fff !important'
        },
        '&:focus': {
            backgroundColor: '#6E01B1 !important',
            color: '#fff !important'
        },
        '@media(max-width : 600px)': {
            width: '100%'
        }

    },
    rightSide: {
        backgroundColor: '#fff',
        borderRadius: '8px',
        padding: '1rem 1rem 1rem 1rem',
        marginTop: '5rem',
        boxShadow: '0px 3px 5px -2px #0000002e !important',

    },
    card_img: {
        marginTop: '-5rem !important'
    }
})

const LISTITEM = [
    {
        id: 1,
        placeholder: '2022C03R00000653',
        amount: 'INR 25,450,92'
    },
    {
        id: 2,
        placeholder: '2022C03R00000653',
        amount: 'INR 25,450,92'
    },
    {
        id: 3,
        placeholder: '2022C03R00000653',
        amount: 'INR 25,450,92'
    },
    {
        id: 4,
        placeholder: '2022C03R00000653',
        amount: 'INR 25,450,92'
    },
    {
        id: 5,
        placeholder: '2022C03R00000653',
        amount: 'INR 25,450,92'
    },
    {
        id: 6,
        placeholder: '2022C03R00000653',
        amount: 'INR 25,450,92'
    },
    {
        id: 7,
        placeholder: '2022C03R00000653',
        amount: 'INR 25,450,92'
    },
    {
        id: 8,
        placeholder: '2022C03R00000653',
        amount: 'INR 25,450,92'
    },
    {
        id: 9,
        placeholder: '2022C03R00000653',
        amount: 'INR 25,450,92'
    },

]


const PaymentList = () => {
    const classes = useStyles();
    return (
        <>
            <Box sx={{
                padding: '5rem 0rem',
                '@media(max-width : 1200px)': {
                    padding: '1.5rem 0rem',
                    '@media(max-width : 600px)': {
                        padding: '1rem 0rem'
                    }
                }
            }}>
                <Container>
                    <Grid container spacing={2}>
                        <Grid item lg={8} md={12} sm={12} xs={12}>
                            <Box className={classes.butn__wrap}>
                                <Box>
                                    <Link to={'/'}>
                                    <Button  disableRipple className={classes.back__btn} variant="contained" startIcon={<Typography component={'img'} src={bkarrow} />}>
                                        Back
                                    </Button>
                                    </Link>
                                </Box>
                                <Box>
                                    <Typography sx={{ '@media(max-width : 600px)': { fontSize: '1.2rem' } }} variant="h4" color={'#000'}>Selected Payment Info:--</Typography>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                    <Box borderBottom={'1px solid #D5D5D5'} marginTop={2} />

                    <Grid container spacing={2}>
                        <Grid item lg={8} md={8} sm={12} xs={12}>
                            <Box className={classes.root}>
                                {
                                    LISTITEM.map((v, index) => {
                                        return (
                                            <>
                                                <Box className={classes.input__wrapBox}>


                                                    <Box className={classes.I_left}>
                                                        <Typography color={'#6A6A6A'}>INVOICE NO</Typography>
                                                        <Box className={classes.TextField__box}>
                                                            <TextField

                                                                autoComplete="off"
                                                                fullWidth
                                                                variant="standard"
                                                                placeholder={v.placeholder}
                                                                InputProps={{
                                                                    style: { color: "#000" },
                                                                    disableUnderline: true,
                                                                }}
                                                            />
                                                        </Box>

                                                    </Box>



                                                    <Box className={classes.I_right}>
                                                        <Typography color={'#6A6A6A'}>AMOUNT</Typography>
                                                        <Box className={classes.TextField__box}>
                                                            <TextField

                                                                autoComplete="off"
                                                                fullWidth
                                                                variant="standard"
                                                                placeholder={v.amount}
                                                                InputProps={{
                                                                    style: { color: "#000" },
                                                                    disableUnderline: true,
                                                                }}
                                                            />
                                                        </Box>

                                                    </Box>


                                                </Box>
                                            </>
                                        )
                                    })
                                }
                            </Box>
                            <Box mt={3}>
                                <Typography sx={{ '@media(max-width : 600px)': { fontSize: '1.2rem', textAlign: 'center' } }} variant="h4" color={'#000'}>Payment Method:--</Typography>
                            </Box>
                            <Box borderBottom={'1px solid #D5D5D5'} marginTop={2} />
                            <Box className={classes.pay___list} component={'ul'}>
                                <Box component={'li'}>
                                    <Button className={classes.payment__butn} variant="contained" startIcon={<Typography component={'img'} src={gpay} />}>
                                        Google Pay
                                    </Button>
                                </Box>
                                <Box className={classes.btn_li} component={'li'}>
                                    <Button className={classes.payment__butn} variant="contained" startIcon={<Typography component={'img'} src={ppay} />}>
                                        PhonePe
                                    </Button>
                                </Box>
                                <Box className={classes.btn_li} component={'li'}>
                                    <Button className={classes.payment__butn} variant="contained" startIcon={<Typography component={'img'} src={cpay} />}>
                                        Card
                                    </Button>
                                </Box>
                                <Box className={classes.btn_li} component={'li'}>
                                    <Button className={classes.payment__butn} variant="contained">
                                        More Option
                                    </Button>
                                </Box>

                            </Box>
                        </Grid>
                        <Grid item lg={4} md={4} sm={12} xs={12}>
                            <Box className={classes.rightSide}>
                                <Typography className={classes.card_img} component={'img'} src={card} alt="" width={'100%'} />
                                <Typography mt={1} component={'img'} src={cardb} alt="" width={'100%'} />
                                <Box className={classes.amount}>
                                    <Typography>Total Amount</Typography>
                                    <Typography fontWeight={700} variant="h6">INR 76,35,102</Typography>
                                </Box>
                              <ModalForm/>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    )
}

export default PaymentList