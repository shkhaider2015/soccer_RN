import React, { useEffect } from 'react'
import { Button, Text, View } from 'react-native'
import { TodaysFixture } from "./API/todaysFixture";
import { LaLigaData } from "./API/CompititionData";
import { useCounter } from './API/customHookExample';


export const About = () =>
{
    // TodaysFixture();
    // LaLigaData()
    const { count, add, subtract } = useCounter(100);

    const gg = () => {
        console.log("GG()")
        add()
    }
    useEffect(
        () => {
            // add()
        },
        []
    )
    return <View>
        <Text>About Page</Text>
        <Text> Counter Value : {count} </Text>
        <Button 
        title="Increment"
        onPress={() => add()} />
    </View>
}