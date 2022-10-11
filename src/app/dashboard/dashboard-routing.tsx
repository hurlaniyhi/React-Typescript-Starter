import { useContext, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import AppInfoContext from 'src/provider/state-manager/appInfoProvider'
import './dashboard.scss'

export const DashboardRoutes = () => {
    const {recoverStatesData} = useContext(AppInfoContext)

    useEffect(() => {
        recoverStatesData()
    }, [])
    
    return (
        <div className="dashboard-container">
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