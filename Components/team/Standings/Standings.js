import React, {useState, useContext, useEffect} from 'react'
import { Text } from 'react-native'
import LeagueIdContext from '../Context/mCTX';
import ProgressBar from 'react-native-progress/Bar'
import { StandingTableUI } from './StandingTableUI';


const Standings = () => {
    const [fetchedData, setFetcheddata] = useState(null)
    const mCTX = useContext(LeagueIdContext)


    useEffect(
        () => {
            async function getLeagueTable() {
                const response = await fetch(`https://v3.football.api-sports.io/standings?league=${mCTX[0]}&season=2020`, {
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
                    
                    setFetcheddata(standings)
                }

            }


            if(mCTX[0] !== null)
            {
                getLeagueTable()
            }
        },
        [mCTX[0]]
    )

    if (fetchedData === null) {
        return <ProgressBar size={30} indeterminate={true} />
    }
    else
    {
        return <StandingTableUI fetchedData={fetchedData} />
    }
}

export {Standings}