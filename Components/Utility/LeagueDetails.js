import React from 'react'

export const getLeague = (id) => {

    let leagueDetails = {
        databaseKey: null,
        fixturesURI: null,
        standingsURI: null,
        statesURI: null
    }

    switch(id)
    {
        case 140:
            //
            leagueDetails.databaseKey = "@Laliga"
            leagueDetails.fixturesURI = `https://v3.football.api-sports.io/fixtures?league=140&season=2020`
            leagueDetails.standingsURI = `https://v3.football.api-sports.io/standings?league=140&season=2020`
            leagueDetails.statesURI = `https://v3.football.api-sports.io/players/topscorers?league=140&season=2020`
            break;
        case 140:
            //
            break;
        case 140:
            //
            break;
        case 140:
            //
            break;
        case 140:
            //
            break;
        default:
            //
            break;
    }

    return leagueDetails;
}