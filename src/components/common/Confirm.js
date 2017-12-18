import React from 'react';
import { Text, View, Modal } from 'react-native'; // modal has no default style
import { CardSection } from './CardSection';
import { Button } from './Button';

const Confirm = ({ children, visible, onAccept, onDecline }) => {


    return ( // can think Modal as a big wrapper
        <Modal
            transparent
            visible={visible} // if this Modal shoud be visible
            animationType='slide'
            onRequestClose={() => {}} // empty function for doing nothing
        >
            <View>
                <CardSection>
                    <Text>{children}</Text>
                </CardSection>

                <CardSection>
                    <Button onPress={onAccept}>Yes</Button>
                    <Button onPress={onDecline}>No</Button> 
                </CardSection>
            </View>
        </Modal>
    );
};

const styles = {
    cardSelectionStyle: {
        justifyContent: 'center'
    },
    textStyle: {
        flex: 1,
        fontSize: 18,
        textAlign: 'center',
        lineHeight: 40
    },
    containerStyle: {
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        position: 'relative',
        flex: 1,
        justifyContent: 'center'
    }
};

export { Confirm };
