import React, { useContext, useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { FixtureListUI } from './fixtureList'
import { bubbleSortByTime } from "../../Utility/updateFixtureArray";
import LeagueIdContext from '../Context/mCTX';


const Fixtures = () => {

    const dispatch = useDispatch()
    const mCTX = useContext(LeagueIdContext)
    const select = useSelector(state => state)
    const [fetchedData, setFetcheddata] = useState([])
    const [scrollIndex, setScrollIndex] = useState(0)

    console.log("jksfjksdjfkjdks : ", mCTX[0])

    const filterForSections = (arr) => {
        var ee = arr.map(
            (item, index) => item.occo
        )

        var unique = [...new Set(ee)]

        var hh = {}

        unique.map(
            (item1, index1) => {
                hh[item1] = arr.filter(
                    (item2, index2) => {
                        if (item2.occo === item1) {
                            return item2
                        }
                    }
                )
            }
        )

        console.log("hh : ", hh)
    }

    useEffect(
        () => {

            async function getLeagueId() {
                // dispatch(
                //     fetchFixturesBegin()
                // )

                const response = await fetch(`https://v3.football.api-sports.io/fixtures?league=${mCTX[0]}&season=2020`, {
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

                    setFetcheddata(data2)

                }
            }

            if (mCTX[0] !== null) {
                getLeagueId()

            }

        },
        [mCTX[0]]
    )

    useEffect(
        () => {
            console.log("UseEfeect()  2")

            if (fetchedData.length !== 0 && mCTX[0] === 2) {

            }
            else if (fetchedData.length !== 0) {
                console.log("Fetch data length is not zero", fetchedData.length)
                for (let i = 0; i < fetchedData.length; i++) {
                    const element = fetchedData[i];

                    if (element.fixture.status.short === "NS") {
                        console.log("Found NS",)
                        setScrollIndex(i)
                        break
                    }

                }
            }
            // if (fetchedData.length !== 0) {
            //     console.log("Fetch data length is not zero", fetchedData.length)
            //     for (let i = 0; i < fetchedData.length; i++) {
            //         const element = fetchedData[i];

            //         if (element.fixture.status.short === "NS") {
            //             console.log("Found NS", )
            //             setScrollIndex(i)
            //             break
            //         }

            //     }
            // }

        },
        [fetchedData]
    )


    return <View>
        {console.log("ScrollIndex : ", scrollIndex)}

        {
            scrollIndex === 0
                ? <Text>Loading ...</Text>
                : <FixtureListUI scrollIndex={scrollIndex} data={fetchedData} />
        }


    </View>
}

export { Fixtures }