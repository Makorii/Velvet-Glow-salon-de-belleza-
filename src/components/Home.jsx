import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import { CardActionArea} from "@mui/material";

export default function Home() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container
        sx={{
          minWidth: "100%",
          paddingLeft: "0 !important",
          paddingRight: "0 !important",
          background:
            "linear-gradient(180deg, rgba(243,203,191,1) 50%, rgba(255,255,255,1) 100%)",
        }}
      >
        <Card
          sx={{
            display: "flex",
            alignItems: "center",
            background:
              "linear-gradient(180deg, rgba(243,203,191,1) 50%, rgba(255,255,255,1) 100%)",
          }}
        >
          <CardContent
            sx={{
              padding: "0 0 0 64px",
              width: "50%",
            }}
          >
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
            <CardActions
              sx={{
                padding: "15px 0",
              }}
            >
              <Button
                size="small"
                variant="outlined"
                sx={{
                  color: "black",
                  backgroundColor: "#F3CBBF",
                  padding: "10px 20px",
                  borderRadius: "16px",
                  fontWeight: 600,
                  border: "1px solid #E5A65E",
                }}
              >
                ¡Quiero un turno!
              </Button>
            </CardActions>
          </CardContent>

          <CardMedia
            image="/src/assets/titleimage.png"
            title="mujer"
            sx={{
              width: "50%",
              height: "90vh",
              padding: "0 64px 0 0",
            }}
          />
        </Card>
      </Container>
      <Box
        component="section"
        padding="20px 64px"
        sx={{ backgroundColor: "white" }}
      >
        <Typography align="center" color="black" variant="h4">
          Promos del mes
        </Typography>
        <Card
          sx={{
            display: "flex",
            padding: "20px 0",
            backgroundColor: "white",
            color: "black",
          }}
        >
          <CardMedia
            component="img"
            height="200px"
            image="/src/assets/image.jpg"
            alt="mujer cortandose el cabello"
            sx={{ width: "250px" }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Combo de Belleza Express
            </Typography>
            <Typography variant="body2" sx={{ color: "black" }}>
              Corte de cabello + Secado + Manicura express.
            </Typography>
            <CardActions
              sx={{
                padding: "15px 0",
              }}
            >
              <Button
                size="small"
                variant="outlined"
                sx={{
                  color: "black",
                  backgroundColor: "#F3CBBF",
                  padding: "10px 20px",
                  borderRadius: "16px",
                  fontWeight: 600,
                  border: "1px solid #E5A65E",
                  textTransform: "none",
                }}
              >
                ¡Quiero un turno!
              </Button>
            </CardActions>
          </CardContent>
        </Card>
        <Card
          sx={{
            display: "flex",
            padding: "20px 0",
            backgroundColor: "white",
            color: "black",
          }}
        >
          <CardMedia
            component="img"
            height="200px"
            image="/src/assets/peinado.jpg"
            alt="mujer peinandose el cabello"
            sx={{ width: "250px", objectFit: "cover" }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Combo Fiesta
            </Typography>
            <Typography variant="body2" sx={{ color: "black" }}>
              Peinado especial + Maquillaje profesional + Manicura con
              decoración.
            </Typography>
            <CardActions
              sx={{
                padding: "15px 0",
              }}
            >
              <Button
                size="small"
                variant="outlined"
                sx={{
                  color: "black",
                  backgroundColor: "#F3CBBF",
                  padding: "10px 20px",
                  borderRadius: "16px",
                  fontWeight: 600,
                  border: "1px solid #E5A65E",
                  textTransform: "none",
                }}
              >
                ¡Quiero un turno!
              </Button>
            </CardActions>
          </CardContent>
        </Card>
        <Card
          sx={{
            display: "flex",
            padding: "20px 0",
            backgroundColor: "white",
            color: "black",
          }}
        >
          <CardMedia
            component="img"
            height="200px"
            image="/src/assets/image2.png"
            alt="mujer recibiendo tratamiento facial"
            sx={{ width: "250px" }}
          />

          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Promo “Día de Amigas”
            </Typography>
            <Typography variant="body2" sx={{ color: "black" }}>
              Peinado + Manicura + Tratamiento facial para 2 personas.
            </Typography>
            <CardActions
              sx={{
                padding: "15px 0",
              }}
            >
              <Button
                size="small"
                variant="outlined"
                sx={{
                  color: "black",
                  backgroundColor: "#F3CBBF",
                  padding: "10px 20px",
                  borderRadius: "16px",
                  fontWeight: 600,
                  border: "1px solid #E5A65E",
                  textTransform: "none",
                }}
              >
                ¡Quiero un turno!
              </Button>
            </CardActions>
          </CardContent>
        </Card>
      </Box>
      <Box
        component="section"
        padding="20px 64px"
        sx={{ backgroundColor: "white" }}
      >
        <Typography align="center" color="black" variant="h4">
          Servicios
        </Typography>
        <Grid container spacing={6}>
          <Grid size={6}>
          <Card sx={{backgroundColor:"#F3CBBF", color:"black"}}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="350px"
                  image="/src/assets/cuidadocabello.jpg"
                  alt="cuidado del cuerpo"
                  sx={{
                    objectFit: "cover",
                    width: "100%",
                    height: { xs: "202px",sm: "300px", md: "350px"}
                  }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" align="center">
                    Cuidado del cabello
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid size={6}>
            <Card sx={{backgroundColor:"#F3CBBF", color:"black"}}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="350px"
                  image="/src/assets/cuidadocuerpo.jpg"
                  alt="cuidado del cuerpo"
                  sx={{
                    objectFit: "cover",
                    width: "100%",
                  }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" align="center">
                    Cuidado del cuerpo
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid size={6}>
          <Card sx={{backgroundColor:"#F3CBBF", color:"black"}}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="350px"
                  image="/src/assets/cuidadounias.jpg"
                  alt="cuidado del cuerpo"
                  sx={{
                    objectFit: "cover",
                    width: "100%",
                  }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" align="center">
                    Cuidado de las uñas
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid size={6}>
          <Card sx={{backgroundColor:"#F3CBBF", color:"black"}}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="350px"
                  image="/src/assets/cuidadopiel.jpg"
                  alt="cuidado del cuerpo"
                  sx={{
                    objectFit: "cover",
                    width: "100%",
                  }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" align="center">
                    Cuidado de la piel
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
}
