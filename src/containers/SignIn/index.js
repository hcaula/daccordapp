import React from 'react';
import { View, Text } from 'react-native';
import Spotify from './Spotify';

class SignIn extends React.Component {

    render() {
        return (
            <View>
                <Text>Sign In screen</Text>
                <Spotify/>
            </View>
        )
    }
}

export default SignIn;