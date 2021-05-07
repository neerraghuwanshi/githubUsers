import React from 'react'
import { View, StyleSheet } from 'react-native'


function ListItemSeparator() {
    return (
        <View style={styles.container}>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'grey',
        height: 2,
        marginBottom: 20,
    },
})


export default ListItemSeparator