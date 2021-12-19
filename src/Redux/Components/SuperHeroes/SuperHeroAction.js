import { GET_SUPERHEROES, GET_SUPERHEROES_LOADING,GET_SUPERHEROES_ERROR } from '../../Type';
import {APISUPERHERO} from '../../../Helpers/Api';

export const getSuperHeroes = (Search="") => async dispatch =>{
    const Config = {
        headers: {
            'Accept' : 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'PUT, GET, POST, DELETE, OPTION',
            'Access-Control-Allow-Headers': '*'
        }
    }

    try{
        dispatch({ type: GET_SUPERHEROES_LOADING });

        let URL = `/10225565552183372/search/${Search}`
        
        const Res = await APISUPERHERO.get(URL , Config);
        console.log(Res);
        dispatch({ 
            type: GET_SUPERHEROES,
            payload: Res
        })
    }
    catch (Err){
        console.log(Err.request)
        console.log(Err.response)
        dispatch({ 
            type: GET_SUPERHEROES_ERROR
        });
    }
}