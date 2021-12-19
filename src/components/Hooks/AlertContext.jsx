/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useMemo} from 'react';

const AlertContext = React.createContext();

export function AlertProvider(props){

    const [parametersAlert, setParametersAlert] = useState({
        Active:false,
        Msg:'',
        Error:false
    })

    const updateAlert = (Msg, Error) => {
        closeAlert();
        setParametersAlert({
            Active:true,
            Msg:Msg,
            Error:Error
        })
    }

    const closeAlert = () => {
        setParametersAlert({
            Active:false,
            Msg:'',
            Error:false
        })
    }
    
    const value = useMemo(() =>{
        return({
            parametersAlert,
            updateAlert,
            closeAlert
        })
    },[parametersAlert])


    return <AlertContext.Provider value={value}>{props.children}</AlertContext.Provider>
}

export function useAlertParameters(){
    const context = React.useContext(AlertContext)
    if(!context){
        throw new Error('useAlertParameters debe de estar dentro del AlertProvider')
    }
    return context;
}