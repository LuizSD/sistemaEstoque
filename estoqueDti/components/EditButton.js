import React, { Component } from 'react';
import { Image, TouchableHighlight } from 'react-native';

class EditButton extends Component {
  render() {
    return (
      <TouchableHighlight onPress={() => {
        this.props.callback();
      }
    }>
      <Image source={require('../assets/edit-interface-symbol.png')}></Image>
    </TouchableHighlight>
    );
  }
}



export default EditButton