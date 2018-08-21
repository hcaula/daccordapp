import { StackNavigator, TabNavigator } from 'react-navigation';
import SignIn from './containers/SignIn';
import Feed from './containers/Feed';

export const NoSession = StackNavigator({
    SignIn: {
        screen: SignIn,
        navigationOptions: {
            title: "Sign In"
        }
    }
});

export const Session = TabNavigator({
    Feed: {
        screen: Feed,
        navigationOptions: {
            title: "Feed"
        }
    }
});
