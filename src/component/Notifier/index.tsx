import { useContext, useEffect, useState } from 'react'
import { NotifierContainer } from './style'
import VisibilityContext from 'src/provider/state-manager/visibilityProvider'
import './style.scss'

export const Notifier: React.FC<any> = () => {
    const { visibility: {notification}, notifier } = useContext(VisibilityContext)

    var [time, setTime] = useState<any>(null)

    useEffect(() => {
        if(notification.status) {
          time =  setTimeout(() => {
            notifier.hide()
            }, 5000)
        }

        return () => { clearTimeout(time) }
    }, [notification.status])
    
    return (
        <NotifierContainer
            isNotifier={notification.status}
            isSuccess={notification.type === 'success' ? true : false}
            className="notifier-container"
        >
             { notification.type != 'success' ? 
                <i className="fa fa-exclamation-triangle message-icon"></i> :
                <i className="fa fa-check-circle message-icon"></i>
            }
            <p className="notifier-text">
                {notification.message}
            </p>
        </NotifierContainer>
    )
}