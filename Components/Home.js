import React from 'react'
import { Text, View } from 'react-native'
import { FixtureListUI } from './laliga/fixtureList'
import { FixtureUI } from './laliga/fixtureUI'
import { useDispatch, useSelector } from 'react-redux';
import { fetchFixtures } from './API/APIActions';
import { fetchFixturesSuccess } from './Redux/ActionTypes';


export const Home = () =>
{
    const dispatch = useDispatch()

    React.useEffect(
        () => {
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
                console.log("Data : ", data['response'])
                dispatch(
                    fetchFixturesSuccess(data['response'])
                )
            }

            // getData()
            getLeagueId()
        },
        []
    )
    
    return <View>
        <Text>Home Page</Text>
        
    </View>
}