import React, { useState, useEffect } from 'react'
import { View, 
    StyleSheet, 
    Image, 
    ScrollView, 
    Text,
    ActivityIndicator,
} from 'react-native'
import Colors from '../constants/Colors'


function UserProfile(props) {

    const loginParam = props.route.params

    const [user, setUser] = useState(null)

    const [repositoriesList, setRepositoriesList] = useState(null)

    const [gistsList, setGistsList] = useState(null)

    const repos = repositoriesList && repositoriesList.map(item => (
        <React.Fragment key={item.id}>
            <View style={styles.rowContainer}>
                <Text style={styles.bullet}>
                    &bull;
                </Text>
                <View>
                    <Text style={styles.listItem1}>
                        {`Name: ${item.name}`}
                    </Text>
                    <Text style={styles.listItem2}>
                        {`Url: ${item.url}`}
                    </Text>
                </View>
            </View>
        </React.Fragment>
    ))

    const gists = gistsList && gistsList.map(item => (
        <React.Fragment key={item.id}>
            <View style={styles.rowContainer}>
                <Text style={styles.bullet}>
                    &bull;
                </Text>
                <View>
                    <Text style={styles.listItem1}>
                        {`Id: ${item.id}`}
                    </Text>
                    <Text style={styles.listItem2}>
                        {`Url: ${item.url}`}
                    </Text>
                </View>
            </View>
        </React.Fragment>
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
        gists ?
        <ScrollView 
            style={styles.container}
            contentContainerStyle={styles.contentContainer}>

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
            <Text style={styles.location}>
                {user.location}
            </Text>}
            
            <View style={styles.repositoriesContainer}>
                <Text style={styles.heading}>
                    {`Repositories: ${
                        repositoriesList.length < 21 ?
                        repositoriesList.length :
                        '20+'
                    }`}
                </Text>
                {repos}
            </View>

            <View style={styles.repositoriesContainer}>
                <Text style={styles.heading}>
                    {`Gists: ${
                        gistsList.length < 21 ?
                            gistsList.length :
                            '20+'
                    }`}
                </Text>
                {gists}
            </View>

            <View style={styles.lastElement}>

            </View>

        </ScrollView> :
        <View style={styles.activityContainer}>
            <ActivityIndicator
                size='large'
                color={Colors.primary}/>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    activityContainer: {
        flex: 1,
        justifyContent: 'center',
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
        marginBottom: 10,
    },
    bio: {
        fontSize: 14,
        fontWeight: '500',
        marginBottom: 20,
        marginLeft: 10,
    },
    location: {
        fontSize: 14,
        fontWeight: '500',
        marginBottom: 20,
        marginLeft: 20,
    },
    heading: {
        fontSize: 14,
        fontWeight: '700',
        marginBottom: 10,
    },
    repositoriesContainer: {
        marginBottom: 10,
    },
    listItem1: {
        fontSize: 14,
        fontWeight: '500',
        marginLeft: 5,
        marginBottom: 3,
    },
    listItem2: {
        fontSize: 14,
        fontWeight: '500',
        marginLeft: 5,
        marginBottom: 10,
    },
    lastElement: {
        marginBottom: 40,
    },
    rowContainer: {
        flexDirection: 'row',
    },
    bullet: {
        marginLeft: 10,
    },
})


export default UserProfile


export const UserProfileScreenOptions = () => {
    return {
        headerTitle: 'UserProfile',
    }
}