import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';

class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyAOcQYtqKaXZGLkXvFpAvCHsXlVZILFelw',
            authDomain: 'manager-c5509.firebaseapp.com',
            databaseURL: 'https://manager-c5509.firebaseio.com',
            projectId: 'manager-c5509',
            storageBucket: 'manager-c5509.appspot.com',
            messagingSenderId: '152669382929'
        };

        firebase.initializeApp(config);
    }
    render() {
        return (
            <Provider store={createStore(reducers)}>
                <View>
                    <Text>
                        Hi!
                    </Text>
                </View>
            </Provider>
        );
    }
}

export default App;
