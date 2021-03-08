import React, { useContext, useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { FixtureListUI } from './fixtureList'
import { fetchFixturesBegin, fetchFixturesSuccess, fetchFixturesFailure } from "../../Redux/ActionTypes";
import { bubbleSortByTime } from "../../Utility/updateFixtureArray";
import LeagueIdContext from '../Context/mCTX';


const Fixtures = () => {

    const dispatch = useDispatch()
    const mCTX = useContext(LeagueIdContext)
    const select = useSelector(state => state)
    const [scrollIndex, setScrollIndex] = useState(0)

    // const {leagueId} = route.params;
    console.log("Fixtures mCTX : ", mCTX)

    useEffect(
        () => {

            async function getLeagueId() {
                dispatch(
                    fetchFixturesBegin()
                )

                const response = await fetch(`https://v3.football.api-sports.io/fixtures?league=${mCTX}}&season=2020`, {
                    "method": "GET",
                    "headers": {
                        "x-rapidapi-host": "v3.football.api-sports.io",
                        "x-rapidapi-key": "bb282edd25b616a90605f35b51ceb83d"
                    }
                })

                if (!response.ok) {
                    dispatch(
                        fetchFixturesFailure(response.statusText)
                    )
                    throw Error(response.statusText);
                }
                else {
                    const data = await response.json()
                    const data2 = await bubbleSortByTime(data['response'])
                    dispatch(
                        fetchFixturesSuccess(data2)
                    )

                }
            }

            if(mCTX)
            {
                getLeagueId()

            }
            
            // else
            // {
                console.log("Item Lrength ==== ", select.LeagueFixtures.items.length)

            if (scrollIndex === 0 && select.LeagueFixtures.items.length !== 0) {
                for (let i = 0; i < select.LeagueFixtures.items.length; i++) {
                    const element = select.LeagueFixtures.items[i];

                    if (element.fixture.status.short === "NS") {
                        console.log(i)
                        setScrollIndex(i)
                        break
                    }

                }
            }
            // }

        },
        []
    )


    return <View>
        {console.log("ScrollIndex : ", scrollIndex)}
        {/* <View style={{ paddingBottom: 15, alignItems: 'center', backgroundColor: '#FFFFFF', paddingTop: 10 }} >
            <Text style={{ fontSize: 22, fontWeight: 'bold' }} >Laliga Fixtures</Text>
            <Text style={{ fontSize: 12 }} >Seasion 20/21</Text>
        </View> */}

        {
            scrollIndex === 0
                ? <Text>Loading ...</Text>
                : <FixtureListUI scrollIndex={scrollIndex} data={select.LeagueFixtures.items} />
        }


    </View>
}

export { Fixtures }