import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile94852Navigator from '../features/UserProfile94852/navigator';
import UserProfile92435Navigator from '../features/UserProfile92435/navigator';
import Tutorial92434Navigator from '../features/Tutorial92434/navigator';
import NotificationList92406Navigator from '../features/NotificationList92406/navigator';
import Settings92405Navigator from '../features/Settings92405/navigator';
import Settings92397Navigator from '../features/Settings92397/navigator';
import UserProfile92395Navigator from '../features/UserProfile92395/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile94852: { screen: UserProfile94852Navigator },
UserProfile92435: { screen: UserProfile92435Navigator },
Tutorial92434: { screen: Tutorial92434Navigator },
NotificationList92406: { screen: NotificationList92406Navigator },
Settings92405: { screen: Settings92405Navigator },
Settings92397: { screen: Settings92397Navigator },
UserProfile92395: { screen: UserProfile92395Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
