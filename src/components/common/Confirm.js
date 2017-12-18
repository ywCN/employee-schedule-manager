import React from 'react';
import { Text, View, Modal } from 'react-native'; // modal has no default style
import { CardSection } from './CardSection';
import { Button } from './Button';

const Confirm = ({ children }) => {
    return ( // can think Modal as a big wrapper
        <Modal>
            <View>
                <CardSection>
                    <Text>{children}</Text>
                </CardSection>

                <CardSection>
                    <Button>Yes</Button>
                    <Button>No</Button> 
                </CardSection>
            </View>
        </Modal>
    );
};

export { Confirm };
