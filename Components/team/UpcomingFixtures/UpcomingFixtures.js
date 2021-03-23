import React, { useEffect, useState } from 'react'
import { Image, Text, View } from 'react-native'
import { CardFixture } from './CardFixture'
import LaLiga_Logo from "../../../RawData/images/laliga.png";
import { bubbleSortByTime } from "../../Utility/updateFixtureArray";

export const UpcomingFixtures = () =>
{
   
    const [isLoading, setIsLoading] = useState(true);
    const [myData, setMyData] = useState([]);

    const fetchData = [
        {
            title: "CHAMPIONS LEAGUE",
            logo: LaLiga_Logo,
            data: []
        },
        {
            title: "EUROPA LEAGUE",
            logo: LaLiga_Logo,
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
            logo: LaLiga_Logo,
            data: []
        },
        {
            title: "BUNDESLIGA",
            logo: LaLiga_Logo,
            data: []
        },
        {
            title: "SERIE A",
            logo: LaLiga_Logo,
            data: []
        }
    ]

    useEffect(
        () => {
            async function getLeagueId() {
                
                const response = await fetch(`https://v3.football.api-sports.io/fixtures?season=2020&date=2021-03-23`, {
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

            if(!myData)
            {
                getLeagueId()
            }
        },
        []
    )

    useEffect(
        () => {
            if(myData.length())
            {
                console.log("Array is not empty second side effect")
                for (let i = 0; i < myData.length; i++) {
                    const element = myData[i];
                    
                    switch (element.league.id) {
                        case 140:
                            // Laliga
                            fetchData[2].data.push(element)
                            break;
                        case 30:
                            // Epl
                            fetchData[3].data.push(element)
                            break;
                        case 135:
                            // Serie a
                            fetchData[5].data.push(element)
                            break;
                        case 78:
                           // Budesliga
                           fetchData[4].data.push(element)
                            break;
                        case 2:
                            // Champion league
                            fetchData[0].data.push(element)
                            break;
                        case 3:
                           // Europa league 
                           fetchData[1].data.push(element)
                            break;
                        
                        default:
                            break;
                    }
                }

                setIsLoading(!isLoading)

                for(const e of fetchData)
                {
                    console.log("data : ", e.data)
                }
            }
        },
        [myData]
    )

    
    return <View>
        
        <View
        style={{ flexDirection: 'column' }}
        >
            <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'center' }} >
                <Image
                style={{ width : 60, height: 40 }}
                 source={LaLiga_Logo}
                />
                <Text style={{ fontWeight: 'bold', marginStart : 10 }} >Laliga</Text>
            </View>



        </View>


        
    </View>
}