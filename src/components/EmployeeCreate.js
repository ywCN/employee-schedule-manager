import React, { Component } from 'react';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';
import { Card, CardSection, Input, Button } from './common';

class EmployeeCreate extends Component {
    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        lable='Name'
                        placeholder='Jane'
                        
                        value={this.props.name}
                        // onChangeText={text => this.props.employeeUpdate({ prop: 'name', value: text })}
                        onChangeText={value => this.props.employeeUpdate({ prop: 'name', value })}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label='Phone'
                        placeholder='555-555-5555'

                        value={this.props.phone}
                        // onChangeText={text => this.props.employeeUpdate({ prop: 'phone', value: text })}
                        onChangeText={value => this.props.employeeUpdate({ prop: 'phone', value})}
                    />
                </CardSection>

                <CardSection>
                </CardSection>

                <CardSection>
                    <Button>
                        Create
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

export default connect(null, { employeeUpdate })(EmployeeCreate);
