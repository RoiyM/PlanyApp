import React from 'react';
import {KeyboardAvoidingView, ScrollView, TouchableWithoutFeedback, Keyboard, Platform} from 'react-native';

const KeyboardAvoidingWrapper = ({children, ContainerStyle}) => {
    return (
        <KeyboardAvoidingView style={{flex: 1}} behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <ScrollView contentContainerStyle={ContainerStyle}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    {children}
                </TouchableWithoutFeedback>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}
//{ flex: 1, justifyContent: "space-around" }
export default KeyboardAvoidingWrapper;