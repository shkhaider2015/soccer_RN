import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Laliga_Logo from "../../RawData/images/laliga.png";
import { bubbleSortByTime } from "../Utility/updateFixtureArray";
import { getLeague } from "../Utility/LeagueDetails";


const matchTime = (prevTime, currTime) => {
    var returnValue = false;
    var prT = new Date(prevTime);
    var curT = new Date(currTime);

    if (prT.getFullYear() === curT.getFullYear()) {
        if (prT.getMonth() === curT.getMonth()) {
            if (prT.getDate() === curT.getDate()) {
                // returnValue = true;
                if ((prT.getHours() - curT.getHours()) < 8) {
                    returnValue = true
                }
                else {
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


async function getLeagueData(uri, shouldSort = true) {

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
        let sortedData = null
        // shouldSort ?  sortedData = await bubbleSortByTime(data['response']) : sortedData = data['response']
        if (shouldSort) {
            sortedData = await bubbleSortByTime(data['response'])
        }
        else {
            sortedData = await data['response']
        }

        return sortedData;
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }




  
export const LaLigaData = ({ id }) => {
    const [data, setData] = useState({});
    const [shouldAPICall, setShouldAPICall] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [league, setLeague] = useState(id)
    // var league = getLeague(id);

    useEffect(
        () => {
            getData(league.databaseKey)
                .then(res => {
                    console.log(res)
                    if (res && !shouldAPICall) {
                        console.log("Res is true and sac is false")
                        if (!matchTime(res.lastCall, new Date().getTime()) && !shouldAPICall) {
                            // api call
                            console.log("Time Not Matched")
                            setShouldAPICall(!shouldAPICall)
                        }
                        else {
                            console.log("Time Matched !!")
                            setIsLoading(!isLoading)
                        }
                    }
                    else {
                        console.log("res is false")
                        // first Api call
                        setShouldAPICall(!shouldAPICall)
                    }

                })
        },
        []
    )

    useEffect(
        () => {
            let fixturesURI = `https://v3.football.api-sports.io/fixtures?league=140&season=2020`
            let StandingsURI = `https://v3.football.api-sports.io/standings?league=140&season=2020`
            let StatesURI = `https://v3.football.api-sports.io/players/topscorers?league=140&season=2020`

            if (shouldAPICall) {
                console.log("ShouldAPICall -->  API CALL ")
                let fixturesData = getLeagueData(league.fixturesURI)
                let standingData = getLeagueData(league.standingsURI)
                let stateData = getLeagueData(league.statesURI, false)




                let dd = {
                    fixtures: fixturesData,
                    standings: standingData,
                    states: stateData
                }
                setTimeout(() => {
                    setData(dd)
                }, 3000);
                //    setData(dd)
            }
        },
        [shouldAPICall]
    )

    useEffect(
        () => {

            if (Object.keys(data).length) {
                console.log("At Laliga : Data is not Null")
                let time = new Date().getTime()
                let value = {
                    id: league.id,
                    name: league.name,
                    logo: league.logo,
                    lastCall: time,
                    data: data
                }
                storeData(league.databaseKey, value)
                setIsLoading(!isLoading)
            }
        },
        [data]
    )


    useEffect(
        () => {
            if (!isLoading) {
                getData(league.databaseKey).then(res => {
                    if (res) {
                        console.log("Res : ", res.data.fixtures._W)
                    }
                })
                    .catch(err => console.log("Error --> ", err))
                console.log("At Laliga : Process Complete")
            }
        },
        [isLoading]
    )

    



}



