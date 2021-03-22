import React, { useEffect, useState } from 'react'
import { Image, Text, View } from 'react-native'
import { CardFixture } from './CardFixture'
import LaLiga_Logo from "../../../RawData/images/laliga.png";


export const UpcomingFixtures = () =>
{
   

    const [myData, setMyData] = useState([])

    const fetchData = [
        {
            title: "CHAMPIONS LEAGUE",
            logo: LaLiga_Logo,
            data: null
        },
        {
            title: "EUROPA LEAGUE",
            logo: LaLiga_Logo,
            data: null
        }
        ,
        {
            title: "LaLiga",
            logo: LaLiga_Logo,
            data: null
        },
        {
            title: "ENGLISH PREMIER LEAGUE",
            logo: LaLiga_Logo,
            data: null
        },
        {
            title: "BUNDESLIGA",
            logo: LaLiga_Logo,
            data: null
        },
        {
            title: "SERIE A",
            logo: LaLiga_Logo,
            data: null
        }
    ]

    useEffect(
        () => {
            async function getLeagueId() {
                
                const response = await fetch(`https://v3.football.api-sports.io/fixtures?season=2020`, {
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
            if(myData)
            {
                for (let i = 0; i < myData.length; i++) {
                    const element = myData[i];
                    
                    switch (element.league.id) {
                        case 140:
                            // laliga
                            fetchData[2].data = element
                            break;
                        case 30:
                            // epl
                            fetchData[3].data = element
                            break;
                        case 135:
                            // serie a
                            fetchData[5].data = element
                            break;
                        case 78:
                           // budesliga 
                           fetchData[4].data = element
                            break;
                        case 2:
                            // champion league
                            fetchData[0].data = element
                            break;
                        case 3:
                           // Europa league 
                           fetchData[1].data = element
                            break;
                        
                        default:
                            break;
                    }
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