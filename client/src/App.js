import './App.css';
import React, { Fragment } from 'react';
import 'fontsource-roboto';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const theme = createMuiTheme({
  typography: {
    fontFamily: ['Chilanka', 'cursive'].join(','),
  },
});

const App = () => (
  <Fragment>
    <ThemeProvider theme={theme}>
      <div className="App">
        <div>
          <Typography variant="h2" gutterBottom>
            Welcome to React
          </Typography>
          <Button variant="contained" color="secondary">
            Ready To Go
          </Button>
        </div>
      </div>
    </ThemeProvider>
  </Fragment>
);

export default App;
