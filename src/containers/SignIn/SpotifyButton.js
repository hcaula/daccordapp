import React from 'react';
import { Button } from 'react-native';
import SpotifyHelper from '../../helpers/SpotifyHelper'

class SpotifyButton extends React.Component {

    async login() {
        try {
            return await SpotifyHelper.login();
        } catch (e) {
            console.error(e);
        }
    }

    render() {
        return (
            <Button
                onPress={this.login}
                title="Login on Spotify"
                color="green"
            />
        );
    }
}

export default SpotifyButton;