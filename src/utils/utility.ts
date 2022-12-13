import { ReactElement } from "react"
import { RouteData } from "src/model"
import access from "./localAccess"

const routeData = (path: string, name: string, component: ReactElement<any, any>): RouteData => {
    return { 
        routeProps: {
            path,
            element: component
        },
        name
    }
}

const toTitleCase = (text: string) => {
    text = text.toLowerCase()
    return text[0].toUpperCase() + text.substring(1, text.length)
}

const splitCamelCase = (text: string, isTitleCase?: boolean) => {
    let result = text.replace(/([a-z])([A-Z])/g, '$1 $2')
    result = isTitleCase ? result[0].toUpperCase() + result.substring(1) : result 
    return result
}

const getPageTitle = () => {
    let route = toTitleCase(window.location.href.split('/').pop()!)
    let pageTitle = route ? route.split('-').join(' ') : 'Hydra'
    return pageTitle
}

export const erroMessage = (text: any) => {
    const isOnline = access.getInternetStatus()
    return !isOnline ? 'No Internet Connection' : `Message: ${text || 'An error occured'}`
}

export const requestMessage = (resp: any, text = '') => {
    return resp.message || text || 'Something went wrong'
}

export const catchErrMsg = (err: any) => {
    let message = err?.response?.data?.message
    
    if (err.response?.status === 500) message = 'Something went wrong (Server)'
    return message 
}

export default {
    routeData,
    toTitleCase,
    getPageTitle,
    requestMessage,
    catchErrMsg,
    erroMessage,
    splitCamelCase
}