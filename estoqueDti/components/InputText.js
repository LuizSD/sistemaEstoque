import React, { Component } from 'react';
import { TextInput, StyleSheet } from 'react-native';

class InputText extends Component {
    render() {
        return (
            <TextInput onChangeText={(text) =>{
                this.props.callback(text);
            }} 
            style={styles.input}
            keyboardType={this.props.keyboard}
            maxLength={15}/>
        );
    }
}



const styles = StyleSheet.create({
    input: {
        height: 40,
        borderBottomColor: '#000',
        borderTopColor: 'transparent',
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        width: '100%',
        borderWidth: 1,
        marginBottom: 20
    }
});

export default InputText