import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

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
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store}>
                <LoginForm />
            </Provider>
        );
    }
}

export default App;
