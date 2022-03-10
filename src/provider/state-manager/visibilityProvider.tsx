import React, {useReducer} from 'react'
import { Action, KeyValuePayload } from '../../model'

  
const VisibilityContext = React.createContext<any>(null)

const VisibilityReducer = (state: any, action: Action<KeyValuePayload>) => {
    switch(action.type){
        case "set-visibility": 
            return { ...state, [action.payload.key]: action.payload.value }
    }
}

export const VisibilityProvider = (props: any) => {
    const [state, dispatch] = useReducer(VisibilityReducer, {
        isLoading: false,
        notification: {status: false, message: '', type: 'info'}
    })

    async function loader (value: boolean) {
        await dispatch({type: "set-visibility", payload: {key: 'isLoading', value }})
    }

    const notifier = {
        show: async function (message: string, type?: string) {
            const messageType = type ? type.toLowerCase() : 'info'
            await dispatch({type: "set-visibility", payload: {key: 'notification', value: {status: true, message, type: messageType} }})
        },
        hide: async function () {
            await dispatch({type: "set-visibility", payload: {key: 'notification', value: {status: false, message: state.notification.message, type: state.notification.type} }})
        }
    }
  

    const stateActions = {
        loader,
        notifier
    }

    return (
        <VisibilityContext.Provider value={{visibility: state, ...stateActions}} >
            {props.children}
        </VisibilityContext.Provider>
    )
}

export default VisibilityContext