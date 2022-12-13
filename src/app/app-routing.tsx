import { useEffect, useContext } from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import VisibilityContext from 'src/provider/state-manager/visibilityProvider'
import AppInfoContext from 'src/provider/state-manager/appInfoProvider'
import AOS from 'aos'
import access from 'src/utils/localAccess'
import 'aos/dist/aos.css'
import modules from 'src/app/app-module'
import dashboardModules from 'src/app/dashboard/dashboard-module'
import Home from 'src/app/dashboard/home'
import { PopUps } from 'src/component'

export const AppRoutes = () => {

    const {notifier, isConnected} = useContext(VisibilityContext)
    const {recoverStatesData} = useContext(AppInfoContext)

    useEffect(() => {
        AOS.init({
            duration: 300,
            delay: 20,
            easing: 'linear'
        })
    }, [])

    useEffect(() => {
        let isOnline = window.navigator.onLine
        access.setInternetStatus(isOnline)
        isConnected(isOnline)
        recoverStatesData()
    }, [])

    useEffect(() => {
        window.addEventListener("offline", 
        () => handleInternetConnection(false)
      );
        window.addEventListener("online", 
        () => handleInternetConnection(true)
      );

      return () => {
        window.removeEventListener("offline", () => handleInternetConnection(false)
        );
        window.removeEventListener("online", () => handleInternetConnection(true));
      };
    }, [])

    function handleInternetConnection (isOnline: boolean) {
        if(!isOnline)  notifier.show('Oops...You are offline', '')
        else notifier.show('Network has been restored', '', 'success')
        access.setInternetStatus(isOnline)
        isConnected(isOnline)
    }
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