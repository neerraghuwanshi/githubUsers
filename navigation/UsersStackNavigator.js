import React from 'react';
import { createStackNavigator } from  '@react-navigation/stack';

import { defaultNavOptions } from './defaultNavOptions'
import UsersList, { UsersListScreenOptions } from '../screens/UsersList';
import UserProfile, { UserProfileScreenOptions } from '../screens/UserProfile';


const UsersNavigator = createStackNavigator()

export default UsersStackNavigator = () => {
    return (
        <UsersNavigator.Navigator
            screenOptions={defaultNavOptions}>
            <UsersNavigator.Screen 
                name="UsersList"
                component={UsersList}
                options={UsersListScreenOptions}/>
            <UsersNavigator.Screen 
                name="UserProfile"
                component={UserProfile}
                options={UserProfileScreenOptions}/>
        </UsersNavigator.Navigator>
    )
}