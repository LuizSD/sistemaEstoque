import React, {Component} from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import {connect} from 'react-redux'
import ProductBox from './../components/ProductBox'
import { loadProducts,selectProduct } from './../services/componentsRequests'

class ProductContainer extends Component {
    render() {
      loadProducts().then((data) => {
        this.props.loadProductsSuccess(data)
      });
        return (
          <View>
            {this.props.products.map((item, index)=>{
              return (
              <ProductBox 
                name={item.name}
                value={item.value}
                qnt={item.qnt}
                index={item.key}
                key={index}
                callbackEdit={(index) => {
                  selectProduct(index).then((data) => {
                    this.props.editProducts({buttonTitle: 'EDITAR', data: JSON.parse(data)});
                    this.props.callback(index);
                  })
                }}
                callbackDelete={() => loadProducts().then((data) => {
                  this.props.loadProductsSuccess(data)
                })}
              ></ProductBox>
            )
            })}
          </View>
          );
    }
}

function mapStateToProps(state) {  
  return {products: state.products};
}

function mapDispatchToProps(dispatch) {
  return {
    loadProductsSuccess: (res) => dispatch({type: 'LOAD_PRODUCT_LIST', res}),
    editProducts: (res) => dispatch({type: 'EDIT_PRODUCTS', res})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer)