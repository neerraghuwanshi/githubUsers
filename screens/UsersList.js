import React, { useState, useEffect } from 'react'
import { 
    View,
    FlatList,
    StyleSheet,
} from 'react-native'

import UsersListItem from '../components/UsersListItem'


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
        <View>
            <FlatList
                ListFooterComponent={<View style={styles.footer}></View>}
                style={styles.container}
                showsVerticalScrollIndicator={false}
                data={users}
                keyExtractor={(item)=> item.id}
                renderItem={({item}) => (
                    <UsersListItem
                        item={item}
                        {...props}/>
                )}/>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
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