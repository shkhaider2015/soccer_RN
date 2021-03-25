import React, { useEffect, useState } from 'react'
import { FlatList, Image, SafeAreaView, ScrollView, Text, View } from 'react-native'
import { CardFixture } from './CardFixture'

import LaLiga_Logo from "../../../RawData/images/laliga.png";
import epl_Logo from "../../../RawData/images/epl.png";
import Champion_Logo from "../../../RawData/images/uefa_champions_league.png";
import seria_Logo from "../../../RawData/images/seriea.png";
import bundes_Logo from "../../../RawData/images/bundes.png";
import Europa_Logo from "../../../RawData/images/uefa_europa_league.png";

import { bubbleSortByTime } from "../../Utility/updateFixtureArray";
import { dateForApi } from '../../Utility/TimeUtils';
import { MemodFixtureUI } from '../Fixtures/fixtureUI';


const renderItem = ({ item }) => <MemodFixtureUI item={item} />

const ff = ({ item }) => item.data.length
? <View style={{ flexDirection: 'column' }}>
<View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'center' }} >
    <Image
        style={{ width: 60, height: 40 }}
        source={item.logo}
    />
    <Text style={{ fontWeight: 'bold', marginStart: 10 }} >{item.title}</Text>
</View>

<FlatList
    data={item.data}
    renderItem={renderItem}
    keyExtractor={(item, index) => index.toString()}
/>


</View>
: null

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

// change

export const UpcomingFixtures = () => {

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
                console.log("True")
                getLeagueId()
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

                
            }
            else {
                console.log("My Data length ", myData.length)
            }
        },
        [myData]
    )


    return <View>

        {/* <View
            style={{ flexDirection: 'column' }}
        >
            <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'center' }} >
                <Image
                    style={{ width: 60, height: 40 }}
                    source={LaLiga_Logo}
                />
                <Text style={{ fontWeight: 'bold', marginStart: 10 }} >Laliga</Text>
            </View>

            <FlatList
                data={fetchData[2].data}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
            />


        </View> */}

        {/* <ScrollView>
            {
                isLoading
                ? fetchData.map(
                    (obj, ind) => {
                        console.log("Object : ", obj)
                        if (obj.data.length) {
                            return ff(obj)
                        }
                    }
                    )
                : null
            }
        </ScrollView> */}

        {/* {
            isLoading
            ? <Text>Loading</Text>
            : <SafeAreaView style={{ flex : 1, flexDirection: 'column' }} > */}
                {/* <ScrollView  > */}
                    {/* {
                        fetchData.map(
                            (obj, ind) => {
                                if (obj.data.length) {
                                    console.log("Object : ", ind)
                                    return ff(obj, ind)
                                }
                            }
                        )
                    } */}
                {/* </ScrollView> */}
            {/* </SafeAreaView>
        } */}

{
            isLoading
            ? <Text>Loading</Text>
            : <FlatList
            data={fetchData}
            renderItem={ff}
            keyExtractor={(item, index) => index.toString()}
                />
        }



    </View>
}