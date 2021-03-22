import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react'
import { Home } from "../Home";
import { About } from "../About";
import { Laliga } from "../laliga/laliga";
import { DrawerContent } from './DrawerContent';
import { MyStackNavigator } from "../Navigations/StackNavigator";
import { UpcomingFixtures } from "../team/UpcomingFixtures/UpcomingFixtures";


const Drawer = createDrawerNavigator();

export const NavigationDrawer = () =>
{
    return <Drawer.Navigator initialRouteName="About" drawerContent={props => <DrawerContent {...props} /> } >
    {/* <Drawer.Screen name="StackNavigator" component={MyStackNavigator}  /> */}
    <Drawer.Screen name="About" component={About} />
    <Drawer.Screen name="Upcoming Fixtures" component={UpcomingFixtures} />
    {/* <Drawer.Screen name="Laliga" component={Laliga} /> */}
  </Drawer.Navigator>
}

