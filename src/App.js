import React from 'react';
import { View, Text } from 'react-native';
import { Session, NoSession } from './Router';
import SpotifyHelper from './helpers/SpotifyHelper';

class App extends React.Component {

    state = {
        ready: false,
        hasSession: false
    }

    async componentDidMount() {
        try {
            const hasSession = await SpotifyHelper.initialize();
            this.setState({ ready: true, hasSession: hasSession });
        } catch (e) {
            console.error(e);
        }
    }

    render() {
        const loading = (<View><Text>Loading...</Text></View>);

        if (!this.state.ready) return loading;
        else if (!this.state.hasSession) return <NoSession />;
        else return <Session />;
    }

}

export default App;