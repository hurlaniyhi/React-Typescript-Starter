import { useContext, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { NavBar } from 'src/component'
import AppInfoContext from 'src/provider/state-manager/appInfoProvider'
import './dashboard.scss'

export const DashboardRoutes = () => {
    const {recoverAppData} = useContext(AppInfoContext)

    useEffect(() => {
        recoverAppData()
    }, [])
    return (
        <div className="dashboard-container">
            <NavBar/>
            <div className="dashboard-modules">
                <Outlet/>
            </div>
        </div>
    )
}

export default {
    routeProps: {
        path: 'dashboard',
        element: <DashboardRoutes/>
    },
    name: 'Dashboard'
}