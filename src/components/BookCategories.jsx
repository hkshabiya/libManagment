import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function BookCategories() {
    const navigate= useNavigate()
    const clickhandler=()=>{
        navigate("/books")
    }
  return (
    <div style={{ paddingTop:30, paddingLeft:30 }}>
    <Card sx={{ maxWidth: 345}}>
      <CardActionArea onClick={clickhandler} >
        <CardMedia
          component="img"
          height="140"
          image="./images/sci-fi.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Sci-Fi
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
  );
}
