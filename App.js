import React from 'react'
import {StatusBar, View, Text} from 'react-native'
 import Home from './comp/Home'
export default function App() {
    return (
        <View style={{flex:1}}>
            <StatusBar hidden={false} />
            <Home />
        </View>
    )
}