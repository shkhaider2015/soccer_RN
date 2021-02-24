export const FETCH_FIXTURE_BEGIN = "FIXRURELISTBEGIN";
export const FETCH_FIXTURE_SUCCESS = "FIXRURELISTSUCCESS";
export const FETCH_FIXTURE_FAILUR = "FIXRURELISTFAILURE";


export const fetchFixturesBegin = () => ({
    type: FETCH_FIXTURE_BEGIN
  });
  
  export const fetchFixturesSuccess = fixture => ({
    type: FETCH_FIXTURE_SUCCESS,
    payload: { fixture }
  });
  
  export const fetchFixturesFailure = error => ({
    type: FETCH_FIXTURE_FAILUR,
    payload: { error }
  });