import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
    return ( // in the array, the rightmost style will override style on the left
        <View style={[styles.containerStyle, props.style]}>
            {props.children}
        </View>
    );
};

const styles = {
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row', // 'column' is default
        borderColor: '#ddd',
        position: 'relative'
    }
};

export { CardSection };
