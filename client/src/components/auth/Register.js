import React, { Fragment, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

// TODO: add maxwidth
const useStyles = makeStyles((theme) => ({
  root: {
    justify: 'center',
    display: 'flex',
    flexWrap: 'wrap',
    '& *': {
      //   width: '25ch',
      // display: 'flex',
      margin: '3px 0',
      // flexWrap: 'wrap',
      // alignItems: 'center',
      // justifyContent: 'center',
      //   margin: theme.spacing(1),
    },
    '& typography': {
      align: 'center',
    },
  },
}));

const Register = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    password2: '',
  });

  const { email, password, password2 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const classes = useStyles();
  return (
    <Fragment>
      <form noValidate autoComplete="off">
        <Grid container direction="column" className={classes.root}>
          <Typography variant="h4" align="center">
            Sign Up
          </Typography>
          <Typography variant="subtitle1" align="center">
            Create you account for a Platform
          </Typography>
          <TextField
            required
            id="email"
            label="Email"
            variant="outlined"
            name="name"
            value={email}
            onChange={(e) => onChange(e)}
            //   helperText="Email"
          />

          <TextField
            required
            id="password"
            label="Password"
            type="password"
            variant="outlined"
            name="name"
            value={password}
            onChange={(e) => onChange(e)}
            //   helperText="Password"
          />

          <TextField
            required
            id="password2"
            label="Confirm Password"
            type="password"
            variant="outlined"
            name="name"
            value={password2}
            onChange={(e) => onChange(e)}
            //   helperText="Password"
          />
          <Button variant="contained" color="primary">
            Submit
          </Button>
        </Grid>
      </form>
    </Fragment>
  );
};

export default Register;
