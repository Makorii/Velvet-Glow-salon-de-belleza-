import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
// import Box from '@mui/material/Box';
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Home() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container sx={{
        minWidth: "100%",
        paddingLeft: "0 !important",
        paddingRight: "0 !important",
        background: "linear-gradient(180deg, rgba(243,203,191,1) 50%, rgba(255,255,255,1) 100%)"
      }}>
        <Card
          sx={{
            display: "flex",
            alignItems: "center",
            background: "linear-gradient(180deg, rgba(243,203,191,1) 50%, rgba(255,255,255,1) 100%)"
          }}
        >
          <CardContent sx={{
            padding: "0 0 0 64px",
            width: "50%"
          }}>
            <Typography variant="h6" color="black">
              Salon de belleza
            </Typography>
            <Typography gutterBottom variant="h3" component="div" color="black">
              Transformamos tu look, elevamos tu estilo
            </Typography>
            <Typography variant="body1" color="black">
              Resaltamos tu belleza única con un enfoque personalizado en cada
              detalle. Nuestro equipo de profesionales está comprometido en
              brindarte una experiencia relajante y transformadora, para que te
              sientas segura y radiante
            </Typography>
            <CardActions sx={{
              padding: "15px 0"
            }}>
              <Button size="small" variant="outlined" sx={{
                color: "black",
                backgroundColor: "#F3CBBF",
                padding: "10px 20px",
                borderRadius: "16px",
                fontWeight: 600,
                border: "1px solid #E5A65E",
              }}>¡Quiero un turno!</Button>
            </CardActions>
          </CardContent>

          <CardMedia
            image="/src/assets/titleimage.png"
            title="mujer"
            sx={{
              width: "50%",
              height: "90vh",
              padding: "0 64px 0 0"
            }}
          />
        </Card>
      </Container>
    </React.Fragment>
  );
}
