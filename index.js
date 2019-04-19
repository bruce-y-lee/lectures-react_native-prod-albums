//import a library to help create a component
import React from 'react';
import {Text, AppRegistry, View} from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';
//create a component

const App = () =>
//  {
    // return 
    (
    //     <Text>Some Text</Text>
    <View>
        <Header headerText={'Albums'}/>
        <AlbumList />
    </View>
    )
    
// }


//render it to the device
// ReactNative.AppRegistry.registerComponent('albums',() => App);
AppRegistry.registerComponent('albums',() => App);











// /**
//  * @format
//  */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);

