import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { dateForApi } from "../Utility/TimeUtils";
import { bubbleSortByTime } from "../Utility/updateFixtureArray";


import LaLiga_Logo from "../../RawData/images/laliga.png";
import epl_Logo from "../../RawData/images/epl.png";
import Champion_Logo from "../../RawData/images/uefa_champions_league.png";
import seria_Logo from "../../RawData/images/seriea.png";
import bundes_Logo from "../../RawData/images/bundes.png";
import Europa_Logo from "../../RawData/images/uefa_europa_league.png";



const fetchData = [
    {
        title: "CHAMPIONS LEAGUE",
        logo: Champion_Logo,
        data: []
    },
    {
        title: "EUROPA LEAGUE",
        logo: Europa_Logo,
        data: []
    }
    ,
    {
        title: "LaLiga",
        logo: LaLiga_Logo,
        data: []
    },
    {
        title: "ENGLISH PREMIER LEAGUE",
        logo: epl_Logo,
        data: []
    },
    {
        title: "BUNDESLIGA",
        logo: bundes_Logo,
        data: []
    },
    {
        title: "SERIE A",
        logo: seria_Logo,
        data: []
    }
]

const matchTime = (prevTime, currTime) =>
{
    var returnValue = false;
    var prT = new Date(prevTime);
    var curT = new Date(currTime);

    if(prT.getFullYear() === curT.getFullYear())
    {
        if(prT.getMonth() === curT.getMonth())
        {
            if(prT.getDate() === curT.getDate())
            {
                returnValue = true;
            }
        }
        else
        {
            returnValue = false
        }
    }
    else
    {
        returnValue = false
    }

    console.log("returnValue : ", returnValue)
    return returnValue
}

const storeData = async (value) => {
    try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem('@todaysFixture', jsonValue)
    } catch (e) {
      // saving error
      console.log("Error while storing data : ", e)
    }
}


const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@todaysFixture')
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(e) {
      // error reading value
      console.log("Error while reading data : ", e)
    }
}
  
  var isCall = true;

export const TodaysFixture = () =>
{
    const [isLoading, setIsLoading] = useState(true);
    const [myData, setMyData] = useState([]);


    useEffect(
        () => {
            console.log("Use Effect 1")
            async function getLeagueId() {
                var time = dateForApi()
                console.log("Time : ", time)
                const response = await fetch(`https://v3.football.api-sports.io/fixtures?season=2020&date=${time}`, {
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
                    const data2 = await bubbleSortByTime(data['response'])
                    setMyData(data2)

                }
            }

            if (!myData.length) {
                console.log("data length is zero")
                
                getData()
                .then(res => {
                    if(res)
                    {
                        console.log("Response Time : ", res.isCall)
                        if(!matchTime(res.lastCall, new Date().getTime() ) )
                        {
                            isCall = false;
                            console.log("API Call  -------------> ")
                            getLeagueId()
                        }
                        else
                        {
                            console.log("Time Matched !!")
                        }
                    }
                    else
                    {
                        console.log("API Call  -------------> ")
                        getLeagueId()
                    }
                })
                .catch(err => console.log("Error accour in catch"))

                if(isCall)
                {
                    // console.log("API Call  -------------> ")
                    // getLeagueId()
                }
            }
        },
        []
    )

    useEffect(
        () => {
            console.log("Use Effect 2")
            if (myData.length) {
                console.log("Array is not empty second side effect")
                for (let i = 0; i < myData.length; i++) {
                    const element = myData[i];
                    switch (element.league.id) {
                        case 140:
                            // Laliga
                            console.log("----> laliga")
                            fetchData[2].data.push(element)
                            break;
                        case 30:
                            // Epl
                            console.log("----> epl")
                            fetchData[3].data.push(element)
                            break;
                        case 135:
                            // Serie a
                            console.log("----> sera a")
                            fetchData[5].data.push(element)
                            break;
                        case 78:
                            // Budesliga
                            console.log("----> bundes")
                            fetchData[4].data.push(element)
                            break;
                        case 2:
                            // Champion league
                            console.log("----> UCL")
                            fetchData[0].data.push(element)
                            break;
                        case 3:
                            // Europa league 
                            console.log("----> europa")
                            fetchData[1].data.push(element)
                            break;
                        default:
                            break;
                    }
                }

                setIsLoading(!isLoading)

                var millis = new Date().getTime();
                storeData({
                    lastCall: millis,
                    data: fetchData
                })

                
            }
            else {
                console.log("Arra is empty -> My Data length ", myData.length)
            }
        },
        [myData]
    )

    

    // if(!isLoading)
    // {
    //     var millis = new Date().getTime();

    //     if(isCall)
    //     {
    //         storeData({
    //             lastCall: millis,
    //             data: myData
    //         })
    //     }

    // }
}