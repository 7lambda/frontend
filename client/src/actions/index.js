
import {axiosWithAuth} from "../helps/axiosWithAuth";
export const LOGIN = "LOGIN";
export const ADD_EVENT = "ADD_EVENT";
export const LOG_OUT = "LOG_OUT";
export const LOAD_EVENTS = "LOAD_EVENTS";
export const RESTORE_DATA = "RESTORE_DATA";

export const restoreData = (backup)=>{
    return {type:RESTORE_DATA, payload: backup}
}

export const login = (id,events) => {
    return(dispatch) => {
       dispatch({type:LOGIN, payload:id});
       dispatch({type:LOAD_EVENTS, payload: events});
    }
}

export const getEvents = () => {
    return (dispatch) => {
        axiosWithAuth()
            .get("/api/events/getall")
            .then(res => {
                dispatch({ type: LOAD_EVENTS, payload: res.data })
            })
            ;
    }
}

export const addEvent = (event) =>{
    return (dispatch)=>{
        axiosWithAuth().post("/api/events", event)
        .then(res=>{
            console.log(res.data);
        })
        .catch(error=>{
            console.log(error);
        })
    }
}



export const reset = e=>{
    return {type:LOG_OUT};
}