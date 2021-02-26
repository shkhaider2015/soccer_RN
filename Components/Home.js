import React from 'react'
import { Text, View } from 'react-native'
import { FixtureListUI } from './laliga/fixtureList'
import { FixtureUI } from './laliga/fixtureUI'
import { useDispatch, useSelector } from 'react-redux';
import { fetchFixtures } from './API/APIActions';
import { fetchFixturesBegin, fetchFixturesFailure, fetchFixturesSuccess } from './Redux/ActionTypes';
import { bubbleSortByTime } from './Utility/updateFixtureArray';


export const Home = () =>
{
    const dispatch = useDispatch()

    React.useEffect(
        () => {
            async function getLeagueId()
            {
                dispatch(
                    fetchFixturesBegin()
                )
                
                const response = await fetch("https://v3.football.api-sports.io/fixtures?league=140&season=2020", {
                    "method": "GET",
                    "headers": {
                        "x-rapidapi-host": "v3.football.api-sports.io",
                        "x-rapidapi-key": "bb282edd25b616a90605f35b51ceb83d"
                    }
                })

                if(!response.ok)
                {
                    dispatch(
                        fetchFixturesFailure(response.statusText)
                    )
                    throw Error(response.statusText);
                }
                else
                {
                    const data = await response.json()
                    const data2 = await bubbleSortByTime(data['response'])
                    dispatch(
                        fetchFixturesSuccess(data2)
                    )

                }
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