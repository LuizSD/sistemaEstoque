import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Product from './../components/Product'
import EditButton from './../components/EditButton'
import DeleteButton from './../components/DeleteButton'
import { genericDelete } from '../services/requests'
import {ToastAndroid} from 'react-native';

class ProductBox extends Component {
  render() {
    return (
      <View style={styles.box}>
        <View>
          <Product 
            name={this.props.name}
            qnt={this.props.qnt}
            value={this.props.value}>
          </Product>
        </View>
        <View style={styles.buttons}>
          <EditButton callback={() => {
           this.props.callbackEdit(this.props.index);
          }}></EditButton>
          <DeleteButton callback={() =>
               genericDelete('delete', this.props.index).then((res) => {
                ToastAndroid.show('Produto deletado com sucesso.', ToastAndroid.SHORT);
                this.props.callbackDelete();
              })
              }></DeleteButton>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    box: {
      backgroundColor: '#504d9c',
      width: '100%',
      height:50,
      marginTop: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
      elevation: 4,
      borderRadius: 5
    },
    buttons: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '30%',
      height: '100%',
      alignItems: 'center',
      paddingLeft: 10,
      paddingRight: 10
    }
  });

export default ProductBox