import { createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import PrincipalScreen from './src/screens/PrincipalScreen';
import Cenario1_1Screen from './src/screens/Cenario1_1Screen';
import Cenario2_1Screen from './src/screens/Cenario2_1Screen';
import Cenario3_1Screen from './src/screens/Cenario3_1Screen';
//to usando uma versao diferente do curso, entao tem q importar stacknavigator do react navigation stack
const navigator = createStackNavigator(
{
  Principal: PrincipalScreen,
  Cenario1: Cenario1_1Screen,
  Cenario2: Cenario2_1Screen,
  Cenario3: Cenario3_1Screen,
},{
  initialRouteName: 'Principal',
  defaultNavigationOptions : {
    title: 'Madrugada dos Bugs'
  }
});

export default createAppContainer(navigator);