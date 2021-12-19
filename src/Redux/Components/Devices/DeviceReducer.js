
import { GET_DEVICES, GET_DEVICES_LOADING, GET_DEVICES_ERROR, GET_DEVICES_LOAD_MORE, GET_DEVICES_STOP_MORE  } from '../../Type';

export const initialState = {
    Count:0,
    Devices:[],
    Error:false,
    Loading:false,
    StopMore:false
}

const DeviceReducer = (State = initialState, Action) => {

    const {type, payload} = Action;

    switch (type) {
        case GET_DEVICES:
            return {
                ...State,
                Count:payload.data.data.count,
                Devices:payload.data.data.results,
                Error:false,
                Loading:false,
                StopMore:false
            }
        case GET_DEVICES_LOAD_MORE:
            return {
                ...State,
                Count:payload.data.data.count,
                Devices:[...State.Devices, ...payload.data.data.results],
                Error:false,
                Loading:false,
                StopMore:false
            }
        case GET_DEVICES_STOP_MORE:
            return {
                ...State,
                StopMore:true
            }
        case GET_DEVICES_LOADING:
            return {
                ...State,
                Loading:true,
                Error:false,
                StopMore:false
            }
        case GET_DEVICES_ERROR:
            return {
                ...State,
                Count:0,
                Devices:[],
                Error:true,
                Loading:false,
                StopMore:false
            }
    

        default:
            return State;
    }

}

export default DeviceReducer;