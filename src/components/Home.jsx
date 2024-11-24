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
        paddingRight: "0 !important"
      }}>
        <Card
          sx={{
            display: "flex",
            alignItems: "center"
          }}
        >
          <CardContent sx={{
            padding: "0 0 0 64px",
            width: "50%"
          }}>
            <Typography variant="body1">
              Salon de belleza
            </Typography>
            <Typography gutterBottom variant="h3" component="div">
              Transformamos tu look, elevamos tu estilo
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Resaltamos tu belleza única con un enfoque personalizado en cada
              detalle. Nuestro equipo de profesionales está comprometido en
              brindarte una experiencia relajante y transformadora, para que te
              sientas segura y radiante
            </Typography>
            <CardActions>
              <Button size="small">¡Quiero un turno!</Button>
            </CardActions>
          </CardContent>

          <CardMedia
            image="/src/assets/titleimage.png"
            title="mujer"
            sx={{
              width: "50%",
              height: "100vh",
              padding: "0 64px 0 0"
            }}
          />
        </Card>
      </Container>
    </React.Fragment>
  );
}
