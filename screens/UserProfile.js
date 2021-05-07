import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Image, ScrollView, Text } from 'react-native'


function UserProfile(props) {

    const loginParam = props.route.params

    const [user, setUser] = useState(null)

    const [repositoriesList, setRepositoriesList] = useState([])

    const [gistsList, setGistsList] = useState([])

    const repos = repositoriesList.map((item, index)=> (
        <Text 
            key={item.id} 
            style={styles.listItem}>
            {index + 1 + '. ' +item.name}
        </Text>
    ))

    useEffect(() => {
        fetch(`https://api.github.com/users/${loginParam}`)
        .then(response => response.json())
        .then(data => {
            setUser(data)
            fetch(`https://api.github.com/users/${loginParam}/repos`)
            .then(response => response.json())
            .then(data => {
                setRepositoriesList(data)
            })
            fetch(`https://api.github.com/users/${loginParam}/gists`)
            .then(response => response.json())
            .then(data => {
                setGistsList(data)
            })
        })
    }, [])

    return (
        <ScrollView style={styles.container}>
            {user && <>

                <Image
                    style={styles.image}
                    source={{
                        uri: user.avatar_url
                    }}/>

                <Text style={styles.username}>
                    {user.login}
                </Text>

                <Text style={styles.name}>
                    {user.name}
                </Text>

                {user.bio && 
                <Text style={styles.bio}>
                    {user.bio}
                </Text>}
                
                {user.location && 
                <Text style={styles.bio}>
                    {user.location}
                </Text>}
                
                <View style={styles.repositoriesContainer}>
                    <Text style={styles.heading}>
                        {`Repositories: ${repositoriesList.length}`}
                    </Text>
                    {repos}
                </View>

                <View style={styles.repositoriesContainer}>
                    <Text style={styles.heading}>
                        {`Gists: ${gistsList.length}`}
                    </Text>
                </View>

                <View style={styles.lastElement}>

                </View>

            </>}
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingBottom: 100,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: 'black',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 10,
    },
    username: {
        fontSize: 16,
        fontWeight: '700',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 30,
    },
    name: {
        fontSize: 14,
        fontWeight: '700',
        marginBottom: 20,
    },
    bio: {
        fontSize: 14,
        fontWeight: '500',
        marginBottom: 20,
    },
    heading: {
        fontSize: 14,
        fontWeight: '700',
        marginBottom: 10,
    },
    repositoriesContainer: {
        marginBottom: 10,
    },
    listItem: {
        fontSize: 14,
        fontWeight: '500',
        marginLeft: 20,
        marginBottom: 10,
    },
    lastElement: {
        marginBottom: 40,
    },
})


export default UserProfile


export const UserProfileScreenOptions = () => {
    return {
        headerTitle: 'UserProfile',
    }
}