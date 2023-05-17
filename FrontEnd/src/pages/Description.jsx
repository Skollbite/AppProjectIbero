import { Grid, Typography, Box, List, ListItem, ListItemText, TextField, ListItemIcon, Button } from "@mui/material";
import styled from "@emotion/styled";
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import Logo from "../components/Logo";
import CustomButton from "../components/CustomButton";
import RichTextEditor from "../components/RichTextEditor";

export default function Description() {

    const listItems = [
        "Citas en norma APA.",
        "Mínimo 1000 palabras.",
        "Minimo 5 citas o referentes.",
        "Buena coherencias",
        "Buena ortografía",
        "Relación coherente con el árbol del problema",
    ]

    const enviarDatos = () => {
        console.log("datos envidos");
    }

    return (
        <>
            <Grid container spacing={2} sx={{ mb: 3, px: 5, maxWidth: {xl: 1400}, margin: {xl: "auto"} }}>
                <Grid item xs={12} md={4}>
                    <Logo />
                    <Box>
                        <Typography variant="p" component="p" sx={{ mt: 3 }}>
                            Partiendo de lo identificado en el árbol del problema y los antecedentes, se debe elaborar la descripción del problema en forma narrativa (minimo 1000 palabras), tenga en cuenta utilizar citas o referentes que emuestren la problematica utilizando la norma APA. Es una buena práctica consultar estadísticas que demuestren la problemática y se pueden utilizar gráficas, teniendo en cuenta que tambien deben tener citas en norma APA.
                        </Typography>
                        <Typography variant="p" component="p" sx={{ mt: 3 }}>
                            Después de cumplir con los requisitos puede guardar:
                        </Typography>
                        <List component="ul">
                            {listItems.map((i, index) =>
                                <ListItem key={index}>
                                    <ListItemIcon>
                                        <CheckBoxOutlineBlankIcon />
                                    </ListItemIcon>
                                    <ListItemText key={index} primary={i} />
                                </ListItem>
                            )}
                        </List>
                    </Box>
                </Grid>
                <Grid item xs={12} md={8}>
                    <Box
                        component="form"
                        className="problem-description"
                        onSubmit={enviarDatos}
                    >
                        <Typography variant="h6" component="h6" sx={{ mt: 3, mb: 2 }}>
                            Descripción del problema:
                        </Typography>
                        <RichTextEditor />
                        <Box sx={{ display:"flex", justifyContent:"end" }}>
                            <CustomButton name="Guardar" />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}