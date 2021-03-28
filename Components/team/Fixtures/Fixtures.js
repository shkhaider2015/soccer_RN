import React, { useContext, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
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
    const [filteredData, setFiltereddata] = useState([])
    const [scrollIndex, setScrollIndex] = useState(null)

    console.log("jksfjksdjfkjdks : ", mCTX[0])

    const filterForSections = (arr) => {
        var keys = arr.map(
            (item, index) => item.league.round
        )

        var uniqueKeys = [...new Set(keys)]

        var filterData = []

        uniqueKeys.map(
            (item1, index1) => {
                var ff = {
                    title: item1,
                    data: arr.filter((item2, index) => {
                        if (item2.league.round === item1) {
                            return item2
                        }
                    })
                }
                filterData.push(ff)
                // filterData['title'] = item1
                // filterData['data'] = arr.filter(
                //     (item2, index2) => {
                //         if (item2.league.round === item1) {
                //             return item2
                //         }
                //     }
                // )
            }
        )

        // console.log("FilterData : ", filterData)
        setFiltereddata(filterData)
    }

    useEffect(
        () => {

            async function getLeagueId() {
                
                const response = await fetch(`https://v3.football.api-sports.io/fixtures?league=${mCTX[0].id}&season=2020`, {
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

                    // filterForSections(data2)
                    // setScrollIndex(null)
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
            console.log("UseEfeect()  2 and mCTX[0]   :  ", mCTX[0])

            // if (fetchedData.length !== 0 && mCTX[0] === 2) {

            // }
            // else if (fetchedData.length !== 0) {
            //     console.log("Fetch data length is not zero", fetchedData.length)
            //     for (let i = 0; i < fetchedData.length; i++) {
            //         const element = fetchedData[i];

            //         if (element.fixture.status.short === "NS") {
            //             console.log("Found NS",)
            //             setScrollIndex(i)
            //             break
            //         }

            //     }
            // }
            if (fetchedData.length !== 0) {
                console.log("Fetch data length is not zero", fetchedData.length)
                for (let i = 0; i < fetchedData.length; i++) {
                    const element = fetchedData[i];

                    if (element.fixture.status.short === "NS") {
                        console.log("Found NS", )
                        setScrollIndex(i)
                        break
                    }

                }

                if(!scrollIndex)
                {
                    setScrollIndex(fetchedData.length - 1)
                }
            }
            if (filteredData.length !== 0) {
                // for(var key in filteredData)
                // {
                //     console.log("key : ", key)
                //     for (let i = 0; i < filteredData[key].length; i++) {
                //         const element = filteredData[key][i];

                //         if(element.fixture.status.short === "NS")
                //         {
                //             console.log("Found NS")
                //             setScrollIndex({
                //                 title: key,
                //                 index: i
                //             })
                //             break;
                //         }

                //     }

                // }

                // filteredData.map(
                //     (item, index) => {
                //         for (let i = 0; i < item.data.length; i++) {
                //             const element = item.data[i];

                //             if (element.fixture.status.short === "NS") {
                //                 console.log("Found NS")
                //                 setScrollIndex({
                //                     title: key,
                //                     index: i
                //                 })
                //                 break;
                //             }


                //         }
                //     }
                // )

                // var isFound = false;
            //     if(mCTX[0] !== 2)
            //     {
            //         for (let i = 0; i < filteredData.length; i++) {
            //             const element1 = filteredData[i].data;
            //             if(isFound)
            //             {
            //                 break
            //             }
    
            //             for (let j = 0; j < element1.length; j++) {
            //                 const element2 = element1[j];
            //                 const matchDate = new Date(element2.fixture.date);
            //                 const today = new Date();
            //                 const tempElement2 = element1[j+1]
    
            //                 if(isFound)
            //                 {
            //                     break
            //                 }
            //                 if (element2.fixture.status.short === "NS" && tempElement2?.fixture.status.short === "NS") {
            //                     console.log("Found NS")
            //                     setScrollIndex({
            //                         titleIndex: i,
            //                         dataIndex: j
            //                     })
            //                     isFound = true
            //                 }
    
            //             }
    
                        
            //         }
            //     }
            //     else
            //     {
            //         setScrollIndex({
            //             titleIndex: filteredData.length -1 ,
            //             dataIndex: filteredData[filteredData.length - 1].data.length - 1
            //         })
            //     }

            }

        },
        [fetchedData]
    )


    return <View>
        {console.log("ScrollIndex : ", scrollIndex)}
        {/* {console.log("Data : ", filteredData[1]['data'])} */}

        {
            scrollIndex === null
                ? <Text>Loading ...</Text>
                : <FixtureListUI scrollIndex={scrollIndex} data={fetchedData} />
        }


    </View>
}

export { Fixtures }