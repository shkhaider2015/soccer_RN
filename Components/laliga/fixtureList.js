import React from 'react'
import { FlatList, View, Text } from 'react-native'
import FCBarcelona from "../../RawData/images/fc_barcelona.gif";
import ATLETICO_MADRID from "../../RawData/images/atletico_madrid.png";
import { FixtureUI } from './fixtureUI';
import { useSelector } from 'react-redux'

const myData = [
    {
        home : 'FC barcelona',
        homeLogo : FCBarcelona,
        away : 'Atletico Madrid',
        awayLogo : ATLETICO_MADRID
    },
    {
        home : 'FC barcelona',
        homeLogo : FCBarcelona,
        away : 'Atletico Madrid',
        awayLogo : ATLETICO_MADRID
    },
    {
        home : 'Atletico Madrid',
        homeLogo : ATLETICO_MADRID,
        away : 'FC barcelona',
        awayLogo : FCBarcelona,
    },
    {
        home : 'FC barcelona',
        homeLogo : FCBarcelona,
        away : 'Atletico Madrid',
        awayLogo : ATLETICO_MADRID
    },
    {
        home : 'Atletico Madrid',
        homeLogo : ATLETICO_MADRID,
        away : 'FC barcelona',
        awayLogo : FCBarcelona,
    },
    {
        home : 'Atletico Madrid',
        homeLogo : ATLETICO_MADRID,
        away : 'FC barcelona',
        awayLogo : FCBarcelona,
    },
    {
        home : 'FC barcelona',
        homeLogo : FCBarcelona,
        away : 'Atletico Madrid',
        awayLogo : ATLETICO_MADRID
    },
    {
        home : 'FC barcelona',
        homeLogo : FCBarcelona,
        away : 'Atletico Madrid',
        awayLogo : ATLETICO_MADRID
    },
    
]

const FixtureListUI = () =>
{
    const select = useSelector(state => state)
    console.log("SELECT : ", select)

    if(select.LeagueFixtures.loading)
    {
        return <View>
            <Text style={{ marginStart : 'auto', marginEnd : 'auto', marginTop : 20 }} >Wait ...</Text>
        </View>
    }
    else
    {

    return <View style={{ backgroundColor : 'white', paddingBottom : 40 }} >
        <FlatList
        data={select.LeagueFixtures.items}
        renderItem={ ({item}) => <FixtureUI item={item} /> }
        keyExtractor={(item, index) => index.toString()} 
        />
    </View>
    }

}

export {FixtureListUI}