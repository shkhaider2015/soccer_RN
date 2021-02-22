import React from 'react'
import { Text, View } from 'react-native'
import { FixtureListUI } from './fixtureList'


const Laliga = () => {
    React.useEffect(
        () => {
            async function getData () {
                const response = await fetch("https://v3.football.api-sports.io/countries", {
                    "method": "GET",
                    "headers": {
                        "x-rapidapi-host": "v3.football.api-sports.io",
                        "x-rapidapi-key": "bb282edd25b616a90605f35b51ceb83d"
                    }
                })

                const data = await response.json()
                

                console.log("Data : ", res)
            }

            async function getLeagueId()
            {
                
                const response = await fetch("https://v3.football.api-sports.io/fixtures?league=140&season=2020", {
                    "method": "GET",
                    "headers": {
                        "x-rapidapi-host": "v3.football.api-sports.io",
                        "x-rapidapi-key": "bb282edd25b616a90605f35b51ceb83d"
                    }
                })

                const data = await response.json()
                console.log("Data : ", data)
            }

            // getData()
            getLeagueId()
        },
        []
    )


    return <View>

        <View style={{ paddingBottom: 15, alignItems: 'center', backgroundColor: '#FFFFFF', paddingTop: 10 }} >
            <Text style={{ fontSize: 22, fontWeight: 'bold' }} >Laliga Fixtures</Text>
            <Text style={{ fontSize: 12 }} >Seasion 20/21</Text>
        </View>

        <FixtureListUI />

    </View>
}

export { Laliga }