import { combineReducers } from "redux"
import { 
    FETCH_FIXTURE_BEGIN, 
    FETCH_FIXTURE_SUCCESS, 
    FETCH_FIXTURE_FAILUR 
} from "./ActionTypes"

const initialState = {
    fixture: {
        id: 605065,
        referee: "Pablo González",
        timezone: "UTC",
        date: "2020-09-13T12:00:00+00:00",
        timestamp: 1599998400,
        periods: {
            first: 1599998400,
            second: 1600002000,
        },
        venue: {
            id: 1470,
            name: "Estadio de Mendizorroza",
            city: "Vitoria-Gasteiz",
        },
        status: {
            long: "Match Finished",
            short: "FT",
            elapsed: 90
        },
    },
    league: {
        id: 140,
        name: "Primera Division",
        country: "Spain",
        logo: "https://media.api-sports.io/football/leagues/140.png",
        flag: "https://media.api-sports.io/flags/es.svg",
        season: 2020,
        round: "Regular Season - 1",
    },
    teams: {
        home: {
            id: 542,
            name: "Alaves",
            logo: "https://media.api-sports.io/football/teams/542.png",
            winner: false,
            },
            away: {
            id: 543,
            name: "Real Betis",
            logo: "https://media.api-sports.io/football/teams/543.png",
            winner: true,
            }
    },
    goals: {
        home: 0,
        away: 1,
    },
    score: {
        halftime: {
            home: 0,
            away: 0,
            },
            fulltime: {
            home: 0,
            away: 1,
            },
            extratime: {
            home: null,
            away: null,
            },
            penalty: {
            home: null,
            away: null,
            },
    }
}

const initState = {
    items : [],
    loading : false,
    error : null
}

const LeagueFixures = (state = initState, action) =>
{
    switch(action.type)
    {
        case FETCH_FIXTURE_BEGIN:
            // return [ action.payload, ...state ]
            console.log("Begin")
            return{
                ...state,
                loading: true,
                error: null
            }
        case FETCH_FIXTURE_SUCCESS:
            console.log("success")
            return{
                ...state,
                loading: false,
                items: action.payload.fixture
            }
        case FETCH_FIXTURE_FAILUR:
            console.log("failure")
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                items: []
            }
        default:
            return state
    }
}

const Reducers = combineReducers({
    LeagueFixtures : LeagueFixures
})

export {Reducers}