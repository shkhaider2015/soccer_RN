import React from 'react'
import { Text } from 'react-native'
import { TodaysFixture } from "./API/todaysFixture";
import { LaLigaData } from "./API/CompititionData";


export const About = () =>
{
    // TodaysFixture();
    LaLigaData()
    return <Text>About Page</Text>
}