import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import modules from 'src/app/app-module'
import dashboardModules from 'src/app/dashboard/dashboard-module'
import Home from 'src/app/dashboard/home'
import { PopUps } from 'src/component'

export const AppRoutes = () => {
    return (
        <>
            <PopUps />
            <Router>
                <Routes>
                    {
                        modules.map(module => (
                            module.name === 'Dashboard' ? 
                                <Route {...module.routeProps} key={module.name} >
                                    {
                                        dashboardModules.map(dashboardModule => (
                                            <Route {...dashboardModule.routeProps} key={dashboardModule.name}  />
                                        ))
                                    } 
                                      <Route index element={Home.routeProps.element} />
                                </Route> 
                            :
                                <Route {...module.routeProps} key={module.name}  />
                        ))
                    }
                    <Route path="*" element={<Navigate to="/" />}/>
                </Routes>
            </Router>
        </>
    )
}