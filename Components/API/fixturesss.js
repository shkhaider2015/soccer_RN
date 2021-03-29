import React, { useContext, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { bubbleSortByTime } from "../Utility/updateFixtureArray";
import LeagueIDContext from "../team/Context/mCTX";

const struct = [
    {
        id: 998,
        name: 'laliga',
        logo: 'kjhahj.png',
        lastCall: 99878787878,
        fixtures: [],
        standings: [],
        states: []
    },
    {
        id: 998,
        name: 'epl',
        logo: 'kjhahj.png',
        lastCall: 99878787878,
        fixtures: [],
        standings: [],
        states: []
    }
]

const matchTime = (prevTime, currTime) => {
    var returnValue = false;
    var prT = new Date(prevTime);
    var curT = new Date(currTime);

    if (prT.getFullYear() === curT.getFullYear()) {
        if (prT.getMonth() === curT.getMonth()) {
            if (prT.getDate() === curT.getDate()) {
                returnValue = true;
            }
        }
        else {
            returnValue = false
        }
    }
    else {
        returnValue = false
    }

    console.log("returnValue : ", returnValue)
    return returnValue
}


export const GetFixture = () => {
    const mCTX = useContext(LeagueIDContext);

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

    useEffect(
        () => {

            async function hh() {
                const data = await getData();
                if (!data) {
                    // data is null
                    // First Time API Call
                    return
                }
                else {

                }




            }

            if (mCTX[0]) {
                hh()
            }

        },
        [mCTX[0]]
    )

}