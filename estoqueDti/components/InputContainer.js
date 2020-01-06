import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {connect} from 'react-redux'
import {ToastAndroid} from 'react-native';
import InputText from './InputText'
import InputLabel from './InputLabel'
import { loadProducts, createProduct, editProduct } from '../services/componentsRequests';

const formValues = {
  name: '',
  qnt: 0,
  value: 0
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    height: '100%',
    padding: 15
  },
});

class InputContainer extends Component {
  render () {
    return (
      <View style={styles.container}>
          <InputLabel text='Nome'></InputLabel>
          <InputText callback={getResponseName.bind(this)} keyboard='default'></InputText>
          <InputLabel text='Valor'></InputLabel>
          <InputText callback={getResponseValue.bind(this)} keyboard='numeric'></InputText>
          <InputLabel text='Quantidade'></InputLabel>
          <InputText callback={getResponseQnt.bind(this)} keyboard='numeric'></InputText>
          <Button
           title={this.props.formData.buttonTitle}
           color='#28b7c5'
           onPress={() => {
              let body = {
                name: formValues.name, 
                value: +formValues.value, 
                qnt: +formValues.qnt
              };
              if (this.props.formData.buttonTitle === 'CADASTRAR') {
                createProduct(body).then(() => {
                  loadProducts().then((data) => {
                    this.props.loadProductsSuccess(data);
                    ToastAndroid.show('Produto cadastrado com sucesso!', ToastAndroid.SHORT);
                  });
                })
              } else if (this.props.formData.buttonTitle === 'EDITAR') {
                editProduct(body, this.props.formData.key).then(() => {
                  loadProducts().then((data) => {
                    this.props.loadProductsSuccess(data);
                    ToastAndroid.show('Produto editado com sucesso!', ToastAndroid.SHORT);
                  });
                })
              }
             
            }
          }></Button>
      </View>
        
     );
  }
}

function getResponseName(value) {
  formValues.name = value;
}

function getResponseValue(value) {
  formValues.value = value;
}

function getResponseQnt(value) {
  formValues.qnt = value;
}

function mapStateToProps(state) { 
  return {products: state.products};
}

function mapDispatchToProps(dispatch) {
  return {
    loadProductsSuccess: (res) => dispatch({type: 'LOAD_PRODUCT_LIST', res})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputContainer)