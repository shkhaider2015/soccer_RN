import React, { useEffect, useState } from 'react'
import { Text, View, Image, FlatList, ScrollView, Dimensions, SafeAreaView } from 'react-native'
import ATLMAD from "../../../RawData/images/atletico_madrid.png";
import { LeftSide } from './LeftSide';
import { RightSide } from './RightSide';
import { StandingRowUI } from './StandingRowUI';
// import * as Progress from 'react-native-progress'
import ProgressBar from 'react-native-progress/Bar'

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


            if (!fetchedData) {
                getLeagueTable()
            }
        },
        [fetchedData]
    )

    if (fetchedData === null) {
        return <ProgressBar size={30} indeterminate={true} />
    }
    else {
        return <View style={{ backgroundColor: 'white' }} >
            <View style={{
                flexDirection: 'row',
                paddingTop: 5,
                paddingBottom: 5,
                borderBottomWidth: 1
            }} >

                <View style={{ marginTop: 5, marginBottom: 5, marginStart: 0, flex: 1, textAlign: 'left' }} >
                    <Text style={{ marginStart: 20 }} >Club</Text>
                </View>

                <View style={{ flex: 1, flexDirection: 'row' }} >

                    <Text style={{ marginTop: 5, marginBottom: 5, textAlign: 'center', width: 30 }} >MP</Text>
                    <Text style={{ marginTop: 5, marginBottom: 5, textAlign: 'center', width: 30 }} >W</Text>
                    <Text style={{ marginTop: 5, marginBottom: 5, textAlign: 'center', width: 30 }} >D</Text>
                    <Text style={{ marginTop: 5, marginBottom: 5, textAlign: 'center', width: 30 }} >L</Text>
                    <Text style={{ marginTop: 5, marginBottom: 5, textAlign: 'center', width: 30 }} >GD</Text>
                    <Text style={{ marginTop: 5, marginBottom: 5, textAlign: 'center', width: 30, fontWeight: 'bold' }} >Pts</Text>
                </View>



            </View>

            
            <View style={{ marginBottom: 85, marginTop: 10 }} >
                <FlatList
                    data={fetchedData}
                    renderItem={({ item }) => <StandingRowUI data={item} />}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>



        </View>
    }




}

export { StandingTableUI }