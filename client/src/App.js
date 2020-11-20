import './App.css';
import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import 'fontsource-roboto';

import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';

const theme = createMuiTheme({
  // typography: {
  //   fontFamily: ['Chilanka', 'cursive'].join(','),
  // },
  container: {
    padding: '1000px',
    margin: '1000px',
  },
});

const App = () => (
  <Router>
    <Fragment>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Route exact path="/" component={Landing} />
        <Container className={theme.container}>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
        </Container>
      </ThemeProvider>
    </Fragment>
  </Router>
);

export default App;
