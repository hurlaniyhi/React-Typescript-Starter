import { ReactElement } from "react"
import { RouteData } from "src/model"

const routeData = (path: string, name: string, component: ReactElement<any, any>): RouteData => {
    return { 
        routeProps: {
            path,
            element: component
        },
        name
    }
}

export default {
    routeData
}