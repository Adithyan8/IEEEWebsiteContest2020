import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

export const exerciseData = [
  {
    title: "Meditation",
    author: "Martha Cabrerra",
    time: "11 minutes",
    image: "https://res.cloudinary.com/dc0qqhiaz/image/upload/v1584688758/meditation_rgt0i5.jpg",
  },
  {
    title: "Yoga",
    author: "Arnold S.",
    time: "5 minutes",
    image: "https://res.cloudinary.com/dc0qqhiaz/image/upload/v1584689487/Yoga_dmghhe.jpg",
  },
  {
    title: "Back Extension",
    author: "Marilyn Monroe",
    time: "9 minutes",
    image: "https://res.cloudinary.com/dc0qqhiaz/image/upload/v1584689741/back_qxbkaj.jpg",
  },
  {
    title: "Cross Crunches",
    author: "Kensington",
    time: "10 minutes",
    image: "https://res.cloudinary.com/dc0qqhiaz/image/upload/v1584689544/crunches_kcp2fp.jpg",
  },
  {
    title: "Zumba",
    author: "Nagaraju",
    time: "12 minutes",
    image: "https://res.cloudinary.com/dc0qqhiaz/image/upload/v1584689485/zumba_p1p03i.jpg",
  },
  {
    title: "Martial Arts",
    author: "Nagoor Babu",
    time: "7 minutes",
    image: "https://res.cloudinary.com/dc0qqhiaz/image/upload/v1584689484/martial_ovjyvf.jpg",
  },
]

function ExerciseWelcome() {
  return (
      <Box mb={6}>
        <Typography variant="h3">Exercises</Typography>
        <Typography variant="h6">Get fit today! Select from a range of community contributed exerscise training sets</Typography>
      </Box>
  )
}

export function ExerciseCard(props) {
  return(
    <Card>
      <CardActionArea>
        <CardMedia
        component="img"
        height="140"
        image={props.image}
        title="Meditation"
      />
        </CardActionArea>
        <CardContent>
          <Typography variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography variant="body2" component="p" color="textSecondary">
            {props.author} · {props.time}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">
            Train Now
          </Button>
        </CardActions>
      </Card>
  )
}

export default function Exercise() {
  return (
    <div>
    <ExerciseWelcome />
      <Grid container spacing={3}>
        {exerciseData.map((tile, idx) => (
          <Grid item xs={12} sm={6} md={3} key={idx}>
            <ExerciseCard
            image={tile.image}
            title={tile.title}
            author={tile.author}
            time={tile.time}
          />
          </Grid>
        ))}
      </Grid>
</div>
  );
}
