import React, { useEffect, useState } from 'react'
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { TeamStatus } from "./TeamStatus";
import { Laliga } from "../laliga/laliga";
import { About } from "../About";
import { Fixtures } from "../team/Fixtures/Fixtures";
import { StandingTableUI } from "../team/Standings/StandingTableUI";
import { States } from "../team/States/States";


const Tab = createMaterialTopTabNavigator();

const  UpperTabNavigation = () => {

  // console.log("Tabnav : LeagueId : ", leagueId)

  return (
    <Tab.Navigator initialRouteName="Laliga" 
    tabBarOptions={{
        activeTintColor: '#FFFFFF',
        labelStyle: { 
          fontSize: 14 
        },
        style: { 
          backgroundColor: '#6802cf' 
        },
        
      }}

      
    >
        <Tab.Screen name="Laliga" component={Fixtures} options={{ tabBarLabel : "FIXTURES"}}  />
      <Tab.Screen name="Standings" component={StandingTableUI} options={{ tabBarLabel : "STANDINGS"}} />
      <Tab.Screen name="States" component={States} options={{ tabBarLabel : "STATES"}} />
    </Tab.Navigator>
  );
}

export {UpperTabNavigation}