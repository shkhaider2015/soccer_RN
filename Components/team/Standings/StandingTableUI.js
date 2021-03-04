import React, { useEffect, useState } from 'react'
import { Text, View, Image, FlatList, ScrollView, Dimensions, SafeAreaView, ProgressBarAndroid } from 'react-native'
import ATLMAD from "../../../RawData/images/atletico_madrid.png";
import { LeftSide } from './LeftSide';
import { RightSide } from './RightSide';
import { StandingRowUI } from './StandingRowUI';

const data = ['MP', 'W', 'D', 'L', 'GD', 'Pts']


const StandingTableUI = () => {

    const [fetchedData, setFetcheddata] = useState(null)

    useEffect(
        () => {
            async function getLeagueTable() {
                const response = await fetch("https://v3.football.api-sports.io/standings?league=140&season=2020", {
                    "method": "GET",
                    "headers": {
                        "x-rapidapi-host": "v3.football.api-sports.io",
                        "x-rapidapi-key": "bb282edd25b616a90605f35b51ceb83d"
                    }
                })

                if (!response.ok) {
                    console.log("Network Error")
                    throw Error(response.statusText);
                }
                else {
                    const data = await response.json()
                    const standings = await data['response'][0]['league']['standings'][0]
                    var i = 0
                    standings.map(
                        (item, index) => {
                            i++
                            console.log(i + " kkkk --> ", item.team.logo)
                        }
                    )
                    setFetcheddata(standings)
                }

            }


            if(!fetchedData)
            {
                getLeagueTable()
            }
        },
        [fetchedData]
    )

    if (fetchedData === null) {
        return <ProgressBarAndroid />
    }
    else {
        return <View
            style={{
                borderWidth: 1,
                borderRadius: 5,
                borderColor: 'gray'

            }}
        >
            <View style={{
                flexDirection: 'row',
                marginStart: 15,
                paddingStart: 5,
                paddingEnd: 5,
                paddingTop: 5,
                paddingBottom: 5,
            }} >

                <Text style={{ flex: 1 }} >Club</Text>

                <View style={{ flex: 1, flexDirection: 'row' }} >

                    <Text style={{ marginTop: 5, marginBottom: 5, width: 20 }} >MP</Text>
                    <Text style={{ marginTop: 5, marginBottom: 5, width: 20 }} >W</Text>
                    <Text style={{ marginTop: 5, marginBottom: 5, width: 20 }} >D</Text>
                    <Text style={{ marginTop: 5, marginBottom: 5, width: 20 }} >L</Text>
                    <Text style={{ marginTop: 5, marginBottom: 5, width: 20 }} >GD</Text>
                    <Text style={{ marginTop: 5, marginBottom: 5, width: 20 }} >Pts</Text>
                </View>



            </View>

            {/* <StandingRowUI data={fetchedData} /> */}
{/* kjkjkkj */}
            <FlatList
            data={fetchedData}
            renderItem={({item}) => <StandingRowUI data={item} />}
            keyExtractor={(item, index) => index.toString()}
        
            />



        </View>
    }




}

export { StandingTableUI }