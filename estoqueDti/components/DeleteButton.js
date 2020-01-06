import React, { Component } from 'react';
import { Image, TouchableHighlight } from 'react-native';


class DeleteButton extends Component {
  render () {
    return (
      <TouchableHighlight onPress={() => this.props.callback()}>
        <Image source={require('../assets/delete.png')}></Image>
      </TouchableHighlight>
    );
  }
}


export default DeleteButton