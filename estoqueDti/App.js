import React from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createStore} from 'redux';
import {Provider} from 'react-redux'
import InputContainer, { sendDataToServer } from './components/InputContainer';
import ProductContainer from './components/ProductContainer';
import { ScrollView } from 'react-native-gesture-handler';

const initialSate = {
  products: [],
  formData: {
    buttonTitle: 'CADASTRAR',
    name: '',
    value: null,
    qnt: null,
    key: null
  }
}

const reduce = (state = initialSate,  action) => {
    switch(action.type) {
      case 'LOAD_PRODUCT_LIST': {
        return {products: action.res, 
          formData: {
            buttonTitle: 'CADASTRAR',
            name: '',
            value: '',
            qnt: ''
          }
        }
      }
      case 'EDIT_PRODUCTS': {
        return {products: state.products, 
          formData: {
            buttonTitle: action.res.buttonTitle,
            name: action.res.data[0].name,
            value: action.res.data[0].value,
            qnt: action.res.data[0].qnt,
            key: action.res.data[0].key
          }
        }
      }
    }
    return state
}

const store = createStore(reduce)

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'ESTOQUE DTI',
    headerStyle: {
      backgroundColor: '#28b7c5',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  render() {
    return (
      <Provider store={store}>
        <View>
          <View style={styles.header}>
            <Text>Produto</Text>
            <Text>Valor</Text>
            <Text>Quantidade</Text>
          </View>
          <ScrollView style={styles.scroll}>
            <ProductContainer callback={(index) => {
              this.props.navigation.navigate('Form')
            }}></ProductContainer>
          </ScrollView>
          <View style={styles.buttonView}>
          <Button  title='CADASTRAR PRODUTO'
               color='#28b7c5'
               onPress={() => this.props.navigation.navigate('Form')}>
          </Button>
          </View>
        </View>
      </Provider>
    );
  }
}

class FormScreen extends React.Component {
  static navigationOptions = {
    title: 'CADASTRO',
    headerStyle: {
      backgroundColor: '#28b7c5',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    }
  };
  render() {
    return (
    <Provider store={store}>
      <View>
       <InputContainer formData={store.getState().formData}></InputContainer>
      </View>
    </Provider>
    );
  }
}

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Form: {screen: FormScreen},
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scroll: {
    height: '81%',
    paddingLeft: 15,
    paddingRight: 15,
  },
  header: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: '#ddd',
    justifyContent: 'space-evenly',
    padding: 10
  },
  buttonView:{
    height: '10%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  }
});

const App = createAppContainer(MainNavigator);

export default App;