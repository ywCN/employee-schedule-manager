import _ from 'lodash'; // need to iterate all properties of employee
import React, { Component } from 'react';
import { connect } from 'react-redux';
import EmployeeForm from './EmployeeForm';
import { employeeUpdate } from '../actions';
import { Card, CardSection, Button } from './common';

class EmployeeEdit extends Component {
    componentWillMount() {
        // for each prop of employee, call action creato with key-value pair
        _.each(this.props.employee, (value, prop) => {
            this.props.employeeUpdate({ prop, value });
        });
    }
    
    onButtonPress() {
        const { name, phone, shift } = this.props;

        console.log(name, phone, shift); // detect changes
    }

    render() {
        return (
            <Card>
                <EmployeeForm />
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Save Changes
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;

    return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeEdit);
