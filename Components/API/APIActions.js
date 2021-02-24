import { useDispatch } from "react-redux"
import {
    fetchFixturesBegin,
    fetchFixturesSuccess,
    fetchFixturesFailure
} from "../Redux/ActionTypes";



export const fetchFixtures = () => {
    const dispatch = useDispatch();
    dispatch(fetchFixturesBegin());
    return fetch("https://v3.football.api-sports.io/fixtures?league=140&season=2020", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "v3.football.api-sports.io",
            "x-rapidapi-key": "bb282edd25b616a90605f35b51ceb83d"
        }
    })
        .then(handleError)
        .then(res => {
            console.log("Json nn")
            return res.json()
        })
        .then(json => {
            console.log("fetch Fixture success run")
            return dispatch(fetchFixturesSuccess(json.fixture))
        })
        .catch(error => dispatch(fetchFixturesFailure(error)));

}


const handleError = (response) => {
    if (!response.ok) {
        console.log("Error :")
        throw Error(response.statusText);
    }
    return response;
}