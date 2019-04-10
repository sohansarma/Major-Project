import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import classNames from 'classnames';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

// import './Components/uploader.css';

const styles = theme => ({
  appBar: {
    position: 'relative',
  },
  flex: {
    flex: 1,
  },
  // container: {
  //   display: 'flex',
  //   flexWrap: 'wrap',
  // },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
});

function Transition(props) {
  return <Slide direction="up" {...props} />;
}


class QueryModel extends React.Component {
  state = {
    open: false,
    Question: '',
    Keywords: '',
    Description: ''
   };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        {/* <Button style={{margin:'16px'}} variant="outlined" color="primary" onClick={this.handleClickOpen}>
          Post Query
        </Button> */}
        <Button className='model-align' variant="outlined" color="primary" onClick={this.handleClickOpen}>
          Post Query
        </Button>
        <Dialog
          fullScreen
          open={this.state.open}
          onClose={this.handleClose}
          TransitionComponent={Transition}
        >
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton color="inherit" onClick={this.handleClose} aria-label="Close">
                <CloseIcon />
              </IconButton>
              <Typography variant="h6" color="inherit" className={classes.flex}>
                Clear your Doubts.
              </Typography>
              <Button color="inherit" onClick={this.handleClose}>
                Ask
              </Button>
            </Toolbar>
          </AppBar>
          <form style={{marginLeft:'30px',marginRight:'50px'}} className={classes.container} noValidate autoComplete="off">
         <div>
         <TextField
          id="outlined-full-width"
          label="Question"
          className={classes.textField}
          value={this.state.Question}
          onChange={this.handleChange('Question')}
          margin="normal"
          variant="outlined"
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
        />
         </div>
          <div>
          <TextField
          id="outlined-full-width"
          label="Keywords"
          className={classes.textField}
          value={this.state.Keywords}
          onChange={this.handleChange('Keywords')}
          margin="normal"
          variant="outlined"
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
        />
          </div>
          <div>
          <TextField
          id="outlined-full-width"
          label="Description"
          className={classes.textField}
          value={this.state.Description}
          onChange={this.handleChange('Description')}
          margin="normal"
          variant="outlined"
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
        />
          </div>
         
         </form>
         <div >
         <button style={{float:'left',marginLeft:'40px',marginTop:'10px', padding:'20px',maxWidth:'50%'}}>Link</button>
         <button style={{float:'left',marginLeft:'3px',marginTop:'10px',padding:'20px',maxWidth:'50%'}}>Reference</button>
         </div>
          </Dialog>
      </div>
    );
  }
}

QueryModel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(QueryModel);
