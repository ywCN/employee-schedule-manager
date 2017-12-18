import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView, View, Text } from 'react-native';
import { employeesFetch } from '../actions';

class EmployeeList extends Component {
    componentWillMount() { // whenever this comp will be show, try to get info
        this.props.employeesFetch();
        this.createDataSource(this.props);
    }

    componentWillReceiveProps(nextProps) {
        // nextProps are te next set of props that this 
        // component will be rendered with
        // this.props is still the old set of props
        this.createDataSource(nextProps);
    }

    createDataSource({ employees }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(employees);
    }

    render() {
        // console.log(this.props);
        return (
            <View>
                <Text>hhhhhhh</Text>
                <Text>hhhhhhh</Text>
                <Text>hhhhhhh</Text>
                <Text>hhhhhhh</Text>
                <Text>hhhhhhh</Text>
                <Text>hhhhhhh</Text>
            </View>
        );
    }
}

const mapStateToProps = state => {
    const employees = _.map(state.employees, (val, uid) => {
        return { ...val, uid }; // {shift:'Monday', name:'S', id: 'asd12'}
    });

    return { employees };
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
