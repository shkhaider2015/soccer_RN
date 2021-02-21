import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react'
import { Home } from "../Home";
import { About } from "../About";
import { Laliga } from "../laliga/laliga";
import { DrawerContent } from './DrawerContent';


const Drawer = createDrawerNavigator();

export const NavigationDrawer = () =>
{
    return <Drawer.Navigator initialRouteName="Home" drawerContent={props => <DrawerContent {...props} /> } >
    <Drawer.Screen name="Home" component={Home} />
    <Drawer.Screen name="About" component={About} />
    <Drawer.Screen name="Laliga" component={Laliga} />
  </Drawer.Navigator>
}

