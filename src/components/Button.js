import React from 'react'
import { StyleSheet, Text, Dimensions, TouchableHighLight } from 'react-native'

const styles = StyleSheet.create({

    button: {

        fontSize: 40,
        height: Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width / 4,
        padding: 20,
        backgroundColor: '#f0f0f0',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#888',

    },
    operationButton: {
        color: '#fff',
        backgroundColor: '##fa8B231'
    },
    buttonDoule: {
        width: (Dimensions.get('window').width / 4) * 2
    },

    buttonTriple: {
        width: (Dimensions.get('window').width / 4) * 3
    },
})

export default props => {
    const stylesButton = [styles.button]

    if (props.double) stylesButton.push(styles.buttonDoule);
    if (props.triple) stylesButton.push(styles.buttonTriple);
    if (props.operation) stylesButton.push(styles.operationButton);
    return (
        <TouchableHighLight onPress={() => props.onClick(props.label)}>
            <Text style={stylesButton}>{props.label}</Text>
        </TouchableHighLight>
    )
}