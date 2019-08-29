import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
});

export default function BlogCard(props){
  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid item md={4}>
        <li className="blog__post">
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="140"
                image={props.thumbnail}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {props.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {/* {props.description} Display content preview */}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button 
              size="small" 
              color="primary"
              onClick={ ()=> {console.log("Should Link to:", props.link)} }
              >
                Learn More
              </Button>
            </CardActions>
          </Card>
        </li>
      </Grid>
    </React.Fragment>
  );
}












// import React from 'react';
// import Grid from "@material-ui/core/Grid";


// const BlogCard = (props) => (
//     <Grid item md={3}>
//         <div className="blogcard-body" id="blogcard">
//         <ul>
//             <li class="blog__post">
//             <a href={props.link}>
//                 <img src={props.thumbnail} class="blog__topImg" alt=""></img>
//                 <div class="blog__content">
//                     <div class="blog_preview">
//                         <h2 class="blog__title"> {props.title} </h2>
//                     </div>
//                     <div class="blog__info">
//                         <span class="blog__date">{props.pubDate}</span>
//                     </div>
//                 </div>
//             </a>
//             </li>
//         </ul>
//         </div>
//     </Grid>
// );
// export default BlogCard;
