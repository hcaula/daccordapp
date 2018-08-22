import React from 'react';
import { View, Text } from 'react-native';
import { Session, NoSession } from './Router';
import SpotifyHelper from './helpers/SpotifyHelper';
import BleManager from 'react-native-ble-manager';

class App extends React.Component {

    state = {
        ready: false,
        hasSession: false
    }

    async componentDidMount() {
        BleManager.start({ showAlert: true, forceLegacy: false })
            .then(() => {
                // Success code
                console.log('Module initialized');

                BleManager.scan([], 5, true)
                    .then(() => {
                        console.log("Scan started");
                        setTimeout(() => {
                            BleManager.getDiscoveredPeripherals([])
                                .then((peripheralsArray) => {
                                    // Success code
                                    console.log('Discovered peripherals: ' + peripheralsArray.length);
                                });
                        }, 5000)
                    });

                // console.log(BleManager);
                // BleManager.bleManagerEmitter.addListener(
                //     'BleManagerDiscoverPeripheral',
                //     (args) => {
                //         console.log("peripheral discovered");
                //         console.log(args);
                //     }
                // );
            });

        // try {
        //     const hasSession = await SpotifyHelper.initialize();
        //     this.setState({ ready: true, hasSession: hasSession });
        // } catch (e) {
        //     console.error(e);
        // }
    }

    render() {
        const loading = (<View><Text>Loading...</Text></View>);

        if (!this.state.ready) return loading;
        else if (!this.state.hasSession) return <NoSession />;
        else return <Session />;
    }

}

export default App;