import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'


function UsersListItem(props) {

    const { item } = props

    const { login, avatar_url } = item

    const navigateToUserProfile = () => {
        props.navigation.navigate('UserProfile', login)
    }

    return (
        <TouchableOpacity onPress={navigateToUserProfile}>
            <View style={styles.container}>
                <Image
                    style={styles.image}
                    source={{
                        uri: avatar_url
                    }}/>
                <Text style={styles.username}>
                    {login}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 30,
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 30,
        backgroundColor: 'black',
    },
    username: {
        fontWeight: '500',
        fontSize: 16,
    },
})


export default UsersListItem