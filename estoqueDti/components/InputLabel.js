import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';

class InputLabel extends Component {
    render() {
        return (
            <Text style={styles.text}>{this.props.text}</Text>
        );
    }
}

const styles = StyleSheet.create({
    text: {
        color: '#504d9c',
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 5
    }
});

export default InputLabel