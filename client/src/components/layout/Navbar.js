import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import blue from '@material-ui/core/colors/blue';
import Grid from '@material-ui/core/Grid';

// Come back after creating a color palette
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // margin: '100px',
    // padding: '100px',
  },
  //   bar: {
  //     blue: blue[500],
  //   },
  //   menuButton: {
  //     marginRight: theme.spacing(2),
  //   },
  title: {
    flexGrow: 1,
    color: 'white',
  },
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="static" style={{ marginBottom: 10 }}>
        <Toolbar>
          <Grid justify="space-between" container>
            {/* <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton> */}
            <Grid item>
              <Button href="/">
                <Typography variant="h6" className={classes.title}>
                  aPlatform
                </Typography>
              </Button>
            </Grid>
            <Grid item>
              <Button href="/register" color="inherit">
                Sign Up
              </Button>
              <Button href="/login" color="inherit">
                Login
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
