import API from "../utils/API";
import { IS_AUTHENTICATED } from '../constants/actionTypes';


export const login = ({email, password}) => async dispatch => {
    try {
        const {data} = await API.loginUser({
          email,
          password

        })
        dispatch({
            type: IS_AUTHENTICATED,
            payload: data.user
        });
        console.log('--success', data);
      } catch(error) {
        console.error(error);
      }
}

export const getAuthenticated = () => async dispatch => {
    try {
        const {data} = await API.getAuthenticated();
        console.log(data);
        if(data) {
            dispatch({
                type: IS_AUTHENTICATED,
                payload: data
            });
        } else {
            console.log('ssss')
        }
        // if(getUser) login
        //else logout
    } catch(error) {
        //window redirect to login
    }
}


export const logout = () => async dispatch => {
    try {
        const revoke = await API.logout()
        dispatch({
            type: IS_AUTHENTICATED,
            payload: null
        });
        //should automatically display logout nav 
        //or redirect to anther page
    } catch(e) {
        //just refresh page
    }
}