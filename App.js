import { createStackNavigator } from 'react-navigation';
import SignIn from './src/containers/SignIn';
import Feed from './src/containers/Feed';

const App = createStackNavigator({
    Home: {
        screen: SignIn,
        navigationOptions: {
            title: "Sign In"
        }
    },
    Feed: { screen: Feed }
});

export default App;