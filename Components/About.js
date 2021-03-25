import React from 'react'
import { Text } from 'react-native'
import { TodaysFixture } from "./API/todaysFixture";


export const About = () =>
{
    TodaysFixture();
    return <Text>About Page</Text>
}