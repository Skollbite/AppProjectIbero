import { Typography, Grid, TextField, Box, Button } from "@mui/material";
import styled from "@emotion/styled";
import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from '../components/Logo';
import imgLogin from '../assets/bg-login.jpg'
import CustomButton from "../components/CustomButton";

const ImgBG = styled("img")({
    width: '100%',
    height: "100%",
    objectFit: "cover",
    objectPosition: "center"
})

export default function Login() {

    var disabled = false;

    const [data, setData] = useState({
        email: '',
        password: ''
    })

    const [error, setError] = useState({
        error: false,
        message: ''
    })

    const [loading, setLoading] = useState(false)

    const handleInputChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value})
    }

    const enviarDatos = (e) => {
        e.preventDefault();
        console.log("enviando datos: ", data.email);
    }

    return (
        <Box>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <ImgBG 
                        src={imgLogin}
                        alt="Imagen de fondo Ibero Project"
                    />
                </Grid>
            </Grid>
            <Grid container  alignItems="center" spacing={4} sx={{ mx: "auto", mt:{md: "-20em", } , width: "auto", maxWidth: 1400 }}>
                <Grid item xs={12} md={6} sx={{ p:4 }}>
                    <Box
                        sx={{ display:"grid", gap:2, width:{ xs: "100%", md: "80%" }}}
                        component="form"
                        className="login"
                        onSubmit={enviarDatos}
                    >
                        <TextField type="email" onChange={handleInputChange} name="email" label="Usuario (email)" variant="filled" className="username"  required />
                        <TextField type="password" onChange={handleInputChange} name="password" label="Contraseña" variant="filled" className="password"  required />
                        <Box sx={{ display:"flex", justifyContent:"end" }}>
                            <CustomButton name="Ingresar" data={disabled} />
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} sx={{ p:4 }}>
                    <Box sx={{ display:"flex", justifyContent:"end" }}>
                        <CustomButton name='Registrarse' anchor='/signup' />
                    </Box>
                    <Box sx={{ display:"flex", justifyContent:"end" }}>
                        <Logo />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}