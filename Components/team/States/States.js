import React, { useEffect, useState } from 'react'
import { FlatList, Text, View } from 'react-native'
import { StatesUI } from './StatesUI'
import ProgressBar from 'react-native-progress/Bar'


const States = () => {

    const [fetchedData, setFetcheddata] = useState(null)

    useEffect(
        () => {
            async function getLeagueTable() {
                const response = await fetch("https://v3.football.api-sports.io/players/topscorers?league=140&season=2020", {
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
                    const standings = await data['response']
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

        return <View style={{ paddingBottom: 33 }} >

            <View style={{ flexDirection: 'row', height: 30, alignItems: 'center', backgroundColor: 'white', paddingEnd: 10 }} >
                <Text style={{ flex: 4, paddingStart: 20 }} >Player</Text>
                <Text style={{ flex: 1, textAlign: 'center' }} >Assist</Text>
                <Text style={{ flex: 1, textAlign: 'center' }} >Goals</Text>
            </View>

            <FlatList
            data={fetchedData}
            renderItem={({item}) => <StatesUI data={item} />}
            keyExtractor={(item, index) => index.toString()}
            />
        </View>

    }



}

export { States }