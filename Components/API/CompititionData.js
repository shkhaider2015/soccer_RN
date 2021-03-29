import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';


const matchTime = (prevTime, currTime) => {
    var returnValue = false;
    var prT = new Date(prevTime);
    var curT = new Date(currTime);

    if (prT.getFullYear() === curT.getFullYear()) {
        if (prT.getMonth() === curT.getMonth()) {
            if (prT.getDate() === curT.getDate()) {
                // returnValue = true;
                if( ( prT.getHours() - curT.getHours() ) < 8 )
                {
                    returnValue = true
                }
                else
                {
                    // returnValue = false
                }
            }
        }
        else {
            // returnValue = false
        }
    }
    else {
        // returnValue = false
    }

    console.log("returnValue : ", returnValue)
    return returnValue
}


const gg = {
    id: 998,
    name: 'laliga',
    logo: 'kjhahj.png',
    lastCall: 99878787878,
    data : {
        fixtures: [],
        standings: [],
        states: []
    }
}

const storeData = async (key, value) => {
    try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem(key, jsonValue)
    } catch (e) {
        // saving error
        console.log("Error while storing data : ", e)
    }
}
const getData = async (key) => {
    try {
        const jsonValue = await AsyncStorage.getItem(key)
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        // error reading value
        console.log("Error while reading data : ", e)
    }
}

async function getLeagueData(uri) {
                
    const response = await fetch(uri, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "v3.football.api-sports.io",
            "x-rapidapi-key": "bb282edd25b616a90605f35b51ceb83d"
        }
    })

    if (!response.ok) {
        throw Error(response.statusText);
    }
    else {
        const data = await response.json()
        const sortedData = await bubbleSortByTime(data['response'])

        return sortedData;
    }
}


export const LaLigaData = () =>
{
    const [data, setData] = useState();
    const [shouldAPICall, setShouldAPICall] = useState(false)

    useEffect(
        () => {
            getData("@Laliga")
            .then(res => {
                if(res && !shouldAPICall)
                {
                    if( !matchTime( res.lastCall, new Date().getTime() ) && !shouldAPICall )
                    {
                        // api call
                        setShouldAPICall(!shouldAPICall)
                    }
                }
                else
                {
                    // first Api call
                    setShouldAPICall(!shouldAPICall)
                }
                
            })
        },
        []
    )

    useEffect(
        () => {
            let laligaID = 140;
            let season = 2020;
            let uri = `https://v3.football.api-sports.io/fixtures?league=${laligaID}&season=${season}`

            if(shouldAPICall)
            {
               let data = getLeagueData(uri)
               setData(data)
            }
        },
        [shouldAPICall]
    )

    useEffect(
        () => {

            if(data)
            {
                let value = {
                    
                }
                storeData("Laliga", )
            }
        },
        [data]
    )
}