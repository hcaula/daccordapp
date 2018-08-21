import React from 'react';
import { View, Text } from 'react-native';
import SpotifyButton from './SpotifyButton';

class SignIn extends React.Component {

    render() {
        return (
            <View>
                <Text>Sign In screen</Text>
                <SpotifyButton />
            </View>
        )
    }
}

export default SignIn;