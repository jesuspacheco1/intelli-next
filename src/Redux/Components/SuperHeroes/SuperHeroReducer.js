
import { GET_SUPERHEROES, GET_SUPERHEROES_LOADING, GET_SUPERHEROES_ERROR } from '../../Type';

export const initialState = {
    SuperHeroes:[],
    Error:false,
    Loading:false
}

const SuperHeroReducer = (State = initialState, Action) => {

    const {type, payload} = Action;

    switch (type) {
        case GET_SUPERHEROES:
            return {
                ...State,
                SuperHeroes:payload.results,
                Error:false,
                Loading:false
            }

        case GET_SUPERHEROES_LOADING:
            return {
                ...State,
                Loading:true,
                Error:false
            }

        case GET_SUPERHEROES_ERROR:
            return {
                ...State,
                SuperHeroes:[],
                Error:true,
                Loading:false
            }

        default:
            return State;
    }

}

export default SuperHeroReducer;