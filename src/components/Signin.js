import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import "../styles/signin.css";
import TextField from '@mui/material/TextField';

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    [theme.breakpoints.up(400 + theme.spacing(3 * 2))]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing(2)}px ${theme.spacing(3)}px ${theme.spacing(3)}px`,
  },
  avatar: {
    margin: theme.spacing(),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(),
  },
  submit: {
    marginTop: theme.spacing(2),
    height: "40px"
  },
});

function SignIn(props) {
  const { classes } = props;
  const buttonText = (props.loading)? 'Loading...' :'Login';

  return (
    <main className={classes.main}>
      <CssBaseline />
      <div>
      <div className="text-center" style={{display: "flex", justifyContent: "center"}}>
          <img src="https://assets.fyers.in/images/logo.svg" alt="FYERS" />
        </div>
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography style={{color: "#444"}} component="h1" variant="h5">
          Welcome Back
        </Typography>
        <p style={{marginTop: 3, marginBottom: 0, color: "#6a6a6a"}}>
          Enter your credentials to access your account
        </p>
        <form className={classes.form} onSubmit={(e) => props.signin(e, props.username, props.password)}>
          <FormControl margin="normal" required fullWidth>
            <input style={{borderRadius: 0}} placeholder="User ID*" className="form-control" variant="outlined" size="small" id="username" name="username" autoComplete="username" autoFocus value={props.username} onChange={props.changeValue} />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <input style={{borderRadius: 0}} name="password" className="form-control" placeholder="Password*" variant="outlined" size="small" type="password" id="password" autoComplete="current-password" value={props.password} onChange={props.changeValue}/>
          </FormControl>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={`custom-button btn-primary ${classes.submit}`}
          >
            {buttonText}
          </Button>
        </form>
      </Paper>
      <p style={{textAlign: "center", color: "#6a6a6a"}}>Forgot your password? <span style={{cursor: "pointer", color: "#436af5", fontWeight: 600}}>Reset Passwprd</span></p>
      </div>
    </main>
  );
}

SignIn.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SignIn);
