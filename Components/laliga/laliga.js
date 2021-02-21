import React from 'react'
import { Text, View } from 'react-native'
import { FixtureListUI } from './fixtureList'


const Laliga = () => {
    React.useEffect(
        () => {
            fetch("https://api-football-v1.p.rapidapi.com/v2/leagues/season/2018", {
                "method": "GET",
                "headers": {
                    "x-rapidapi-key": "2t0E5XaR8PmshNJqHXrNrwBnd9xtp1zkfSCjsn5Y0hHZpzsUhl",
                    "x-rapidapi-host": "api-football-v1.p.rapidapi.com"
                }
            })
                .then(response => {
                    console.log("RESPONSE : ",response);
                })
                .catch(err => {
                    console.error(err);
                });
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