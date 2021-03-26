import React, { useContext, useEffect } from 'react'
import { bubbleSortByTime } from "../Utility/updateFixtureArray";
import LeagueIDContext from "../team/Context/mCTX";


export const LaLigaFixture = () =>
{
    const mCTX = useContext(LeagueIDContext);
    
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
        },
        []
    )
}