import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';


const storeData = async (value) => {
    try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem('@leagueDetails', jsonValue)
    } catch (e) {
        // saving error
        console.log("Error while storing data : ", e)
    }
}


const getData = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem('@leagueDetails')
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        // error reading value
        console.log("Error while reading data : ", e)
    }
}


export const LaLigaData = () =>
{
    const [data, setData] = useState();
}