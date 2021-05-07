import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import UsersStackNavigator from './navigation/UsersStackNavigator'


const App = () => {

    return (
        <NavigationContainer>
            <UsersStackNavigator/>
        </NavigationContainer>
    )
}


export default App;