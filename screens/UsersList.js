import React, { useState, useEffect } from 'react'
import { 
    View,
    FlatList,
    StyleSheet,
    ActivityIndicator,
} from 'react-native'

import UsersListItem from '../components/UsersListItem'
import Colors from '../constants/Colors'


function UsersList(props) {

    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('https://api.github.com/users')
        .then(response => response.json())
        .then(data => {
          setUsers(data)
        })
    }, [])

    return (
        <View style={styles.container}>
            {users.length > 0 ?
            <FlatList
                style={styles.flatList}
                ListFooterComponent={<View style={styles.footer}></View>}
                showsVerticalScrollIndicator={false}
                data={users}
                keyExtractor={(item)=> item.id}
                renderItem={({item}) => (
                    <UsersListItem
                        item={item}
                        {...props}/>
                )}/> :
            <ActivityIndicator 
                size='large'
                color={Colors.primary}/>}
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    flatList: {
        padding: 20,
    },
    footer:{
        marginBottom: 40,
    }
})


export default UsersList


export const UsersListScreenOptions = () => {
    return {
        headerTitle: 'UsersList',
    }
}