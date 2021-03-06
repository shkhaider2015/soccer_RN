import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react'
import { Home } from "../Home";
import { About } from "../About";
import { Laliga } from "../laliga/laliga";
import { DrawerContent } from './DrawerContent';
import { MyStackNavigator } from "../Navigations/StackNavigator";


const Drawer = createDrawerNavigator();

export const NavigationDrawer = () =>
{
    return <Drawer.Navigator initialRouteName="StackNavigator" drawerContent={props => <DrawerContent {...props} /> } >
    <Drawer.Screen name="StackNavigator" component={MyStackNavigator} />
    <Drawer.Screen name="About" component={About} />
    <Drawer.Screen name="Laliga" component={Laliga} />
  </Drawer.Navigator>
}

