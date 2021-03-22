import React, { useContext, useEffect, useState } from 'react'
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { TeamStatus } from "./TeamStatus";
import { Laliga } from "../laliga/laliga";
import { About } from "../About";
import { Fixtures } from "../team/Fixtures/Fixtures";
// import { StandingTableUI } from "../team/Standings/StandingTableUI";
import { Standings } from "../team/Standings/Standings";
import { States } from "../team/States/States";
import { GetLeague } from "../Utility/UI";
import LeagueCTX from "../team/Context/mCTX";


const Tab = createMaterialTopTabNavigator();

const  UpperTabNavigation = () => {

  const mCTX = useContext(LeagueCTX)

  return (
    <Tab.Navigator initialRouteName="Laliga" 
    tabBarOptions={{
        activeTintColor: '#FFFFFF',
        labelStyle: { 
          fontSize: 14 
        },
        style: { 
          backgroundColor: mCTX[0] !== null ? mCTX[0].color : ""
        },
        
      }}

      
    >
        <Tab.Screen name="Laliga" component={Fixtures} options={{ tabBarLabel : "FIXTURES"}}  />
      <Tab.Screen name="Standings" component={Standings} options={{ tabBarLabel : mCTX[0].isGroup ? "Groups" : "STANDINGS"}} />
      <Tab.Screen name="States" component={States} options={{ tabBarLabel : "STATES"}} />
    </Tab.Navigator>
  );
}

export {UpperTabNavigation}