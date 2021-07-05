import { Container, createMuiTheme, Grid, ThemeProvider, makeStyles } from "@material-ui/core"
import './App.css';
import Header from './components/Header'
import FeaturedPost from './components/FeaturedPost'
import PostCard from './components/PostCard'
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import { featuredPosts, sidebar } from "./data/Data";

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3)
  }
}))

function App() {
  const darkTheme = createMuiTheme({
    palette: {
      type: "dark"
    }
  })

  const classes = useStyles();

  return (
    <ThemeProvider theme={darkTheme}>
      <Container>
        <Header />
        <FeaturedPost />
        <br />
        <Grid container spacing={4}>
          {featuredPosts.map((post) => (
            <PostCard post={post} key={post.title} />
          ))}
        </Grid>
        <Grid container spacing={5} className={classes.mainGrid}>
          <Main title="From the Firehose" />
          <Sidebar
            title={sidebar.title}
            description={sidebar.description}
            archives={sidebar.archives}
            social={sidebar.social}
          />
        </Grid>
      </Container>
    </ThemeProvider>
    
  );
}

export default App;
