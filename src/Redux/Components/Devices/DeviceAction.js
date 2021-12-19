import { GET_DEVICES, GET_DEVICES_LOAD_MORE, GET_DEVICES_STOP_MORE, GET_DEVICES_LOADING,GET_DEVICES_ERROR } from '../../Type';
import {API} from '../../../Helpers/Api';

export const getDevices = (Token, Limit=5, Offset=0, Search="", LoadMore = false) => async dispatch =>{
    const Config = {
        headers: {
            'Accept' : 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${Token}`
        }
    }

    try{
        dispatch({ type: GET_DEVICES_LOADING });

        let URL = `/devices?limit=${Limit}&offset=${Offset}&search=${Search}`;
        
        const Res = await API.get(URL , Config);

        if (LoadMore) {
            dispatch(
                { 
                    type: GET_DEVICES_LOAD_MORE, 
                    payload: Res
                });

                if(Res.data.data.results.length === 0){
                    dispatch({ 
                        type: GET_DEVICES_STOP_MORE
                    });
                }
        } else {
            dispatch({ 
                type: GET_DEVICES,
                payload: Res
            })
        }

    }
    catch (Err){

        dispatch({ 
            type: GET_DEVICES_ERROR
        });
    }
}