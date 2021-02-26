import React from 'react'
import { FlatList, View, Text } from 'react-native'
import FCBarcelona from "../../RawData/images/fc_barcelona.gif";
import ATLETICO_MADRID from "../../RawData/images/atletico_madrid.png";
import { MemodFixtureUI } from './fixtureUI';
import { useSelector } from 'react-redux'
import { todaysDate } from '../Utility/TimeUtils';

const myData = [
    {
        home: 'FC barcelona',
        homeLogo: FCBarcelona,
        away: 'Atletico Madrid',
        awayLogo: ATLETICO_MADRID
    },
    {
        home: 'FC barcelona',
        homeLogo: FCBarcelona,
        away: 'Atletico Madrid',
        awayLogo: ATLETICO_MADRID
    },
    {
        home: 'Atletico Madrid',
        homeLogo: ATLETICO_MADRID,
        away: 'FC barcelona',
        awayLogo: FCBarcelona,
    },
    {
        home: 'FC barcelona',
        homeLogo: FCBarcelona,
        away: 'Atletico Madrid',
        awayLogo: ATLETICO_MADRID
    },
    {
        home: 'Atletico Madrid',
        homeLogo: ATLETICO_MADRID,
        away: 'FC barcelona',
        awayLogo: FCBarcelona,
    },
    {
        home: 'Atletico Madrid',
        homeLogo: ATLETICO_MADRID,
        away: 'FC barcelona',
        awayLogo: FCBarcelona,
    },
    {
        home: 'FC barcelona',
        homeLogo: FCBarcelona,
        away: 'Atletico Madrid',
        awayLogo: ATLETICO_MADRID
    },
    {
        home: 'FC barcelona',
        homeLogo: FCBarcelona,
        away: 'Atletico Madrid',
        awayLogo: ATLETICO_MADRID
    },

]

const renderItem =( {item} ) => <MemodFixtureUI item={item} />

const FixtureListUI = () => {
    const [flatListIndex, setFlatListIndex] = React.useState(0)
    const select = useSelector(state => state)
    const refFlatList = React.useRef(null)

    React.useEffect(
        () => {
            // select.LeagueFixtures.items.map(
            //     (obj, ind) => {
            //         if(todaysDate(obj.fixture.date, new Date()))
            //         {
            //             setFlatListIndex(ind)
            //             break
            //         }
            //         else if(obj.fixture.status.short !== "FT")
            //         {
            //             setFlatListIndex(ind)
            //             break
            //         }
            //     }
            // )




            if (refFlatList.current) {
                refFlatList.current.scrollToIndex({
                    animated: true,
                    // index: select.LeagueFixtures.items.some((obj, ind) => {
                    //     console.log("OBJ : ", obj.fixture.status.short)
                    //     if (obj.fixture.status.short === "NS" && select.LeagueFixtures.items[ind+1].fixture.status.short === "NS" ) {
                    //         console.log("Ind : ", ind)
                    //         return ind
                    //     }
                    // }),
                    index: 0
                })
            }
        },
        []
    )


    if (select.LeagueFixtures.loading) {
        return <View>
            <Text style={{ marginStart: 'auto', marginEnd: 'auto', marginTop: 20 }} >Wait ...</Text>
        </View>
    }
    else {

        return <View style={{ backgroundColor: 'white', marginBottom: 40 }} >
            <FlatList
                ref={refFlatList}
                data={select.LeagueFixtures.items.filter((element) => {
                    if(element.fixture.status.short === "NS")
                    {
                        return element
                    }
                })}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                // onScrollToIndexFailed={info => {
                //     const wait = new Promise(resolve => setTimeout(resolve, 2000));
                //     wait.then(() => {
                //         refFlatList?.current?.scrollToIndex({ index: info.index, animated: false });
                //     })
                // }}
            />
        </View>
    }

}

export { FixtureListUI }