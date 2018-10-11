import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Grid from '@material-ui/core/Grid';
import DialogTitle from '@material-ui/core/DialogTitle';
import SettingsIcon from '@material-ui/icons/Settings';
import ReferenceMenu from './ReferenceMenu';
import ReferenceButtons from './ReferenceButtons';

const styles = (theme) => ({
  button: {
    position: 'fixed',
    bottom: theme.spacing.unit * 4,
    right: theme.spacing.unit * 4,
  },
  menu: {
    background: theme.palette.grey[300],
  },
  container: {
    height: '100%',
  },
  content: {
    maxHeight: '100%',
    overflow: 'auto',
  },
})

class Reference extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: true,
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({
      open: true,
    });
  }

  closeModal() {
    this.setState({
      open: false,
    });
  }

  render() {
    const { classes } = this.props;
    const { open } = this.state;

    return (
      <React.Fragment>
        <Button
          className={classes.button}
          color="primary"
          onClick={this.openModal}
          variant="fab"
        >
          <SettingsIcon />
        </Button>
        <Dialog
          fullWidth
          maxWidth='lg'
          open={open}
          onClose={this.closeModal}
        >
          <DialogTitle>Material UI Reference</DialogTitle>
          <DialogContent>
            <Grid container spacing={8} className={classes.container}>
              <Grid item xs={2} className={classes.menu}>
                <ReferenceMenu />
              </Grid>
              <Grid item xs={10} className={classes.content}>
                <ReferenceButtons />
              </Grid>
            </Grid>
          </DialogContent>
        </Dialog>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Reference)
