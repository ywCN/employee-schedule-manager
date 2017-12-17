import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';


const RouterComponent = () => {
    return ( // initial make the scene the first one to show
        <Router sceneStyle={{ paddingTop: 65 }}>
            <Scene key='auth'>
                <Scene key='login' component={LoginForm} title='Please Login' />
            </Scene>

            <Scene key='main'>
                <Scene
                    key='employeeList'
                    component={EmployeeList}
                    title='Employees'

                    rightTitle='Add'
                    onRight={() => console.log('right!!')}
                />

                <Scene key='employeeCreate' title='Create Employee' />
            </Scene>
        </Router>
    );
};

export default RouterComponent;
