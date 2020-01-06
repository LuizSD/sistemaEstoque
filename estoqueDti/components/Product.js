import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Product extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.product}>{this.props.name}</Text>
        <Text style={styles.value}>{this.props.value}</Text>
        <Text style={styles.value}>{this.props.qnt}</Text>
      </View>
     );
  }
}

const styles = StyleSheet.create({
    product: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 18,
      marginLeft: 10
    },
    value: {
      color: '#fff',
      fontSize: 18,
    },
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: 200,
      height: '100%',
      alignItems: 'center'
    },
  });

export default Product