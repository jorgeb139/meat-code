import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { makeStyles, Grid, Card, CardActionArea, CardContent, CardMedia, Typography, ListItem, List, Button, Hidden } from '@material-ui/core'
import SectionTitles from '../SectionTitles'

const articlesURL = 'https://5eed24da4cbc340016330f0d.mockapi.io/api/articles'

const useStyles = makeStyles(theme => ({
  gridContainer: {
    padding: '0px 20px'
  },
  filterContainer: {
    maxWidth: '274px',
    marginTop: '20px',
    boxShadow: '0px 4px 40px 0px #00000012'
  },
  card: {
    color: '#4D4D4D',
    maxWidth: '310px',
    margin: '20px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top',
  },
  media: {
    borderRadius: '10px 10px 0px 0px',
    maxHeight: '250px',
    minHeight: '180px',
    height: '40vh',
    [theme.breakpoints.down("xs")]: {
      height: '20vh',
    },
    [theme.breakpoints.down("sm")]: {
      height: '30vh',
    },
    '&:hover': {
      opacity: '0.5',
      transition: '0.5s ease'
    },
    transition: '0.5s ease'
  },
  button: {
    '&:hover': {
      backgroundColor: 'transparent'
    },
    justifyContent: 'start'
  }
}))

const Articles = () => {
  const classes = useStyles()
  const [articles, setArticles] = useState([])
  const [filter, setFilter] = useState('Todos')
  const categories = []
  const [categoryList, setCategoryList] = useState([])

  useEffect(() => {
    (async () => {
      const apiResponse = await axios.get(articlesURL)
      apiResponse.data.forEach(({category}) => {
        if (!categories.includes(category)){
          categories.push(category)
        }
      })
      setCategoryList(categories)
    })()
  }, [])

  useEffect(() => {
    (async () => {
      const article = await axios.get(articlesURL)
      setArticles(article.data)
    })()
  }, [])
  
  useEffect(() => {
    if (filter==='Todos'){ 
      (async () => {
        const article = await axios.get(articlesURL)
        setArticles(article.data)
      })()
    } else {
      (async () => {
        const article = await axios.get(`${articlesURL}?filter=${filter}`)
        setArticles(article.data)
      })()
    }
  }, [filter])

  const handleClick = (event) => {
    event.preventDefault()
    setFilter(event.target.textContent)
  }

  return (
    <Grid container className={classes.gridContainer}>
      <SectionTitles textTitle='Nuestros artículos'/>
      <Hidden smDown>
        <Grid item sm={3} md={3}>
          <div className={classes.filterContainer}>
            <List>
              <ListItem style={{marginTop:-10}}>
                <Button onClick={()=>setFilter('Todos')} className={classes.button} disableRipple fullWidth>
                  <Typography variant='body2' style={filter.includes('Todos') ? {color:'#D8AD3D'} : {color:'black'}}>
                    TODOS
                  </Typography>
                </Button>
              </ListItem>
              {categoryList.map((category) => {
                return(
                  <ListItem
                    key={category}
                    style={{marginTop:-10}}
                  >
                    <Button onClick={handleClick} className={classes.button} disableRipple fullWidth>
                      <Typography 
                        variant='body2'
                        style={filter.includes(category) ? {color:'#D8AD3D'} : {color:'black'}}
                      >
                        {category}
                      </Typography>
                    </Button>
                  </ListItem>
                )
              })}
            </List>
          </div>
        </Grid>
      </Hidden>
      <Hidden mdUp>
        <Grid container style={{boxShadow: '0px 4px 40px 0px #00000012', margin:'0px 20px'}} >
          <Grid item xs={6}>
            <Button onClick={()=>setFilter('Todos')} className={classes.button} disableRipple fullWidth>
              <Typography variant='body2' style={filter.includes('Todos') ? {color:'#D8AD3D'} : {color:'black'}}>
                TODOS
              </Typography>
            </Button>
          </Grid>
          {categoryList.map(( category ) => (
            <Grid item xs={6} key={category}>
              <Button onClick={handleClick} className={classes.button} disableRipple fullWidth>
                <Typography 
                  variant='body2'
                  style={filter.includes(category) ? {color:'#D8AD3D'} : {color:'black'}}
                >
                  {category}
                </Typography>
              </Button>
            </Grid>
          ))}
        </Grid>
      </Hidden>
      <Grid item sm={12} md={9}>
        <Grid
          container
          spacing={1}
          justifyContent="flex-start"
          alignContent= "stretch"
          alignItems= "stretch"
        >
          {articles.map((article) => (
            <Grid item xs={12} sm={6} md={6} lg={4} key={article.id}>
              <div>
                <Card className={classes.card} style={{borderRadius:'10px 10px 10px 10px'}} elevation={4}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image={article.image}
                      title={article.title}
                      alt={article.title}
                    />
                  </CardActionArea>
                  <CardContent style={{margin: 10}}>
                    <Typography variant='subtitle2'>  
                      {article.title}
                    </Typography>
                    <Typography variant='body1' style={{marginTop: 10}}>
                      {article.content}
                    </Typography>
                  </CardContent>
                </Card>
              </div>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Articles
