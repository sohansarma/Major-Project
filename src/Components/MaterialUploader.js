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
import { createPost } from '../api';

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


class Model extends React.Component {
  state = {
    open: false,
    UniversityName: '',
    MaterialName: '',
    SubjectCode: '',
    Keywords: '',
    description: '',
    title: '',
    keywords:'',
   };

  upload() {
    const formData = new FormData();
    const {
      title,
      keywords,
      description
    } = this.state;
    formData.append('title', title);
    formData.append('description', description);
    formData.append('keywords', JSON.stringify(keywords.split(",")));
    const len = this.input.files.length;
    for (var x = 0; x < len; x++) {
        formData.append("files", this.input.files[x]);
    }
    createPost(formData).then(() => {
      this.setState({
        open: false,
      })
    })
  }

  handleTextChange(type, value) {
    this.setState({
      [type]: value
    });
  }

  render() {
    const { classes } = this.props;
    const {
      title,
      keywords,
      description
    } = this.state;
    return (
      <div>
        <Button className="common_button_style" onClick={() => {
          this.setState({
            open: true
          })
          }}>
          Post material
        </Button>
        {/* <Button className='model-align' variant="outlined" color="primary" onClick={this.handleClickOpen}>
          Post Query
        </Button> */}
        <Dialog
          fullScreen
          open={this.state.open}
          onClose={() => {
            this.setState({
              open: false,
            })

          }}
          TransitionComponent={Transition}
        >
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton color="inherit" onClick={() => {
                this.setState({
                  open: false,
                })
                }} aria-label="Close">
                <CloseIcon />
              </IconButton>
              <Typography variant="h6" color="inherit" className={classes.flex}>
                Contribute for Others.
              </Typography>
              <Button color="inherit" onClick={() => {
                  this.upload();
                }}>
                Upload
              </Button>
            </Toolbar>
          </AppBar>
          <form style={{marginLeft:'30px',marginRight:'50px'}} className={classes.container} noValidate autoComplete="off">
          <div>
          <TextField
            label="Title"
            id="title"
            className={classes.textField}
            value={title}
            onChange={({ target }) => {
              this.handleTextChange('title', target.value);
            }}
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
          label="Keywords"
          className={classes.textField}
          value={keywords}
          onChange={({ target }) => {
            this.handleTextChange('keywords', target.value);
          }}
          id="keywords"
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
          value={description}
          onChange={({ target }) => {
            this.handleTextChange('description', target.value);
          }}
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
         <button
            style={{float:'left',marginLeft:'3px',marginTop:'10px',padding:'20px',maxWidth:'50%'}}
            onClick={() => {
              if (this.input) {
                this.input.click();
              }
            }}
          >
            Upload</button>
         <input type="file" style={{display: "none"}} ref={el => {
           if (el) {
            this.input = el;
           }
         }} />
         </div>
          </Dialog>
      </div>
    );
  }
}

Model.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Model);
