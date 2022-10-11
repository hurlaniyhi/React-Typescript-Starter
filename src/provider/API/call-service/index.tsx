import React, { useContext } from 'react'
import VisibilityContext from 'src/provider/state-manager/visibilityProvider'
import ApiCaller from '../interceptor'
import { endpoints } from 'src/provider/config/constant'


const ApiContext = React.createContext<any>(null)

export const ApiProvider = (props: any) => {
    const {loader, notifier} = useContext(VisibilityContext)
   

    const callActions = {
    
    }

    return (
        <ApiContext.Provider value={{API: callActions}} >
            {props.children}
        </ApiContext.Provider>
    )
}

export default ApiContext