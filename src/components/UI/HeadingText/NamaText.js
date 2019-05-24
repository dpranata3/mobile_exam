import React from 'react'
import { Text, StyleSheet } from 'react-native'

const namaText = props => (
    <Text {...props} style = {styles.textHeading}>
        {props.children}
    </Text>
)

const styles = StyleSheet.create({
    textHeading: {
        fontSize: 32,
        fontWeight: 'bold',
        bottom:5
    }
})

export default namaText