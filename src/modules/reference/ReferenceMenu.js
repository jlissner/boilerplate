import React, { Component } from 'react';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';

class ReferenceMenu extends Component {
  render() {
    return (
      <MenuList>
        <MenuItem component="a" href="#ButtonReference">Buttons</MenuItem>
        <MenuItem>Text Input</MenuItem>
        <MenuItem>Select</MenuItem>
        <MenuItem>Checkboxs</MenuItem>
        <MenuItem>Radios</MenuItem>
        <MenuItem>Tables</MenuItem>
        <MenuItem>Notifications</MenuItem>
        <MenuItem>Loading</MenuItem>
      </MenuList>
    );
  }
}

export default ReferenceMenu;
