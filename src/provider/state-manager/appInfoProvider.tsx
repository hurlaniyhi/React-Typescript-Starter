import React, {useReducer} from 'react'
import { Action, KeyValuePayload } from '../../model'


const AppInfoContext = React.createContext<any>(null)

const AppInfoReducer = (state: any, action: Action<KeyValuePayload>) => {
    switch(action.type){
        case "set-property": 
            return { ...state, [action.payload.key]: action.payload.value }
    }
}

export const AppInfoProvider = (props: any) => {
    const [state, dispatch] = useReducer(AppInfoReducer, {
      
    })

    async function setInfoProperty (key: string, value: any) {
        await dispatch({type: "set-property", payload: {key, value }})
    }

    async function recoverAppData () {
        const username = await localStorage.getItem('username')
        setInfoProperty('adminUsername', username)
    }
  

    const stateActions = {
       setInfoProperty,
       recoverAppData
    }

    return (
        <AppInfoContext.Provider value={{info: state, ...stateActions}} >
            {props.children}
        </AppInfoContext.Provider>
    )
}

export default AppInfoContext