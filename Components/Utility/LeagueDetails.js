import React from 'react'

import Laliga_Logo from "../../RawData/images/laliga.png";
import SerieA_Logo  from "../../RawData/images/seriea.png";
import Champions_Logo from "../../RawData/images/uefa_champions_league.png";
import Bundesliga_Logo from "../../RawData/images/bundes.png";
import Epl_Logo from "../../RawData/images/epl.png";
import Europa_Logo  from "../../RawData/images/uefa_europa_league.png";

export const getLeague = (id) => {

    let leagueDetails = {
        id: 0,
        name: null,
        logo: null,
        databaseKey: null,
        fixturesURI: null,
        standingsURI: null,
        statesURI: null
    }

    switch(id)
    {
        case 140:
            //
            leagueDetails.id = 140,
            leagueDetails.name = "Laliga"
            leagueDetails.logo = Laliga_Logo
            leagueDetails.databaseKey = "@Laliga"
            leagueDetails.fixturesURI = `https://v3.football.api-sports.io/fixtures?league=140&season=2020`
            leagueDetails.standingsURI = `https://v3.football.api-sports.io/standings?league=140&season=2020`
            leagueDetails.statesURI = `https://v3.football.api-sports.io/players/topscorers?league=140&season=2020`
            break;
        case 30:
            //
            leagueDetails.id = 30,
            leagueDetails.name = "EPL"
            leagueDetails.logo = Epl_Logo
            leagueDetails.databaseKey = "@Epl"
            leagueDetails.fixturesURI = `https://v3.football.api-sports.io/fixtures?league=30&season=2020`
            leagueDetails.standingsURI = `https://v3.football.api-sports.io/standings?league=30&season=2020`
            leagueDetails.statesURI = `https://v3.football.api-sports.io/players/topscorers?league=30&season=2020`
            break;
        case 135:
            //
            leagueDetails.id = 135,
            leagueDetails.name = "Serie A"
            leagueDetails.logo = SerieA_Logo
            leagueDetails.databaseKey = "@Seriea"
            leagueDetails.fixturesURI = `https://v3.football.api-sports.io/fixtures?league=135&season=2020`
            leagueDetails.standingsURI = `https://v3.football.api-sports.io/standings?league=135&season=2020`
            leagueDetails.statesURI = `https://v3.football.api-sports.io/players/topscorers?league=135&season=2020`
            break;
        case 78:
            //
            leagueDetails.id = 78,
            leagueDetails.name = "Bundesliga"
            leagueDetails.logo = Bundesliga_Logo
            leagueDetails.databaseKey = "@Bundesliga"
            leagueDetails.fixturesURI = `https://v3.football.api-sports.io/fixtures?league=78&season=2020`
            leagueDetails.standingsURI = `https://v3.football.api-sports.io/standings?league=78&season=2020`
            leagueDetails.statesURI = `https://v3.football.api-sports.io/players/topscorers?league=78&season=2020`
            break;
        case 2:
            //
            leagueDetails.id = 2,
            leagueDetails.name = "Champions League"
            leagueDetails.logo = Champions_Logo
            leagueDetails.databaseKey = "@ChampionsLeague"
            leagueDetails.fixturesURI = `https://v3.football.api-sports.io/fixtures?league=2&season=2020`
            leagueDetails.standingsURI = `https://v3.football.api-sports.io/standings?league=2&season=2020`
            leagueDetails.statesURI = `https://v3.football.api-sports.io/players/topscorers?league=2&season=2020`
            break;
        case 3:
            //
            leagueDetails.id = 3,
            leagueDetails.name = "Europa League"
            leagueDetails.logo = Europa_Logo
            leagueDetails.databaseKey = "@EuropaLeague"
            leagueDetails.fixturesURI = `https://v3.football.api-sports.io/fixtures?league=3&season=2020`
            leagueDetails.standingsURI = `https://v3.football.api-sports.io/standings?league=3&season=2020`
            leagueDetails.statesURI = `https://v3.football.api-sports.io/players/topscorers?league=3&season=2020`
            break;
        default:
            console.log("Default Break")
            break;
    }

    return leagueDetails;
}