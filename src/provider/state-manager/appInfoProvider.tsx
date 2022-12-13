import React, {useReducer} from 'react'
import { Action, KeyValuePayload } from '../../model'


const AppInfoContext = React.createContext<any>(null)
const initialState = {
    token: '', userData: {}
}

const AppInfoReducer = (state: any, action: Action<KeyValuePayload>) => {
    switch(action.type){
        case "set-property": 
            return { ...state, [action.payload.key]: action.payload.value }
        case 'clear-data': 
            return { ...initialState }
    }
}

export const AppInfoProvider = (props: any) => {
    const [state, dispatch] = useReducer(AppInfoReducer, {
      ...initialState
    })

    async function setInfoProperty (key: string, value: any) {
        localStorage.setItem(key, JSON.stringify(value))
        let isString = typeof(value) === 'string' ? true : false
        let isNumber = typeof(value) === 'number' ? true : false
        localStorage.setItem(key, isString ? value : isNumber ? String(value) : JSON.stringify(value))
        await dispatch({type: "set-property", payload: {key, value}})
    }

    async function recoverAppData () {
        for (let item of Object.keys(initialState)) {
            let retrievedData = await localStorage.getItem(item)!
            retrievedData = ['number', 'string'].includes(typeof state[item]) ? retrievedData : ( !['null', 'undefined'].includes(retrievedData) ? JSON.parse(retrievedData): state[item])
            await setInfoProperty(item, retrievedData)
        }
    }

    async function clearAppData () {
        await dispatch({type: "clear-data", payload: {key: '', value: ''}})
    }

    async function recoverStatesData () {
        await Promise.all([
            recoverAppData(), // other context state recovering method will be import and added here
        ])
    }

    async function logout () {
        await Promise.all([
            localStorage.clear(), clearAppData() // other context state clearing method will be import and added here
        ])
    }
  

    const stateActions = {
       setInfoProperty,
       recoverStatesData,
       clearAppData,
       logout
    }

    return (
        <AppInfoContext.Provider value={{info: state, ...stateActions}} >
            {props.children}
        </AppInfoContext.Provider>
    )
}

export default AppInfoContext