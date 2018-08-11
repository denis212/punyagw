import React from 'react';

import { AppRegistry } from 'react-native';
import App from './App';
import Routes from './src/components/Routes';
import Splash from './Splash';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = { currentScreen: 'Splash' };
        console.log('Start doing some tasks for about 3 seconds')
        setTimeout(()=>{
            console.log('Done some tasks for about 3 seconds')
            this.setState({ currentScreen: 'Routes' })
        }, 3000)
    }
    render() {
        const { currentScreen } = this.state
        let mainScreen = currentScreen === 'Splash' ? <Splash /> : <Routes />
        return mainScreen
    }
}

AppRegistry.registerComponent('PunyaGw',()=> Main);
