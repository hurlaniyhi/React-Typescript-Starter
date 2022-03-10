import React from 'react'
import ApiCaller from '../interceptor'
import { endpoints } from 'src/provider/config/constant'


const ApiContext = React.createContext<any>(null)

export const ApiProvider = (props: any) => {
   

    const callActions = {
    
    }

    return (
        <ApiContext.Provider value={{API: callActions}} >
            {props.children}
        </ApiContext.Provider>
    )
}

export default ApiContext