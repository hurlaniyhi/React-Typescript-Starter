import { useContext, useEffect, useState } from 'react'
import { NotifierContainer } from './style'
import VisibilityContext from 'src/provider/state-manager/visibilityProvider'
import './style.scss'
import { AppText, CustomContainer, FlexRow } from 'src/style'
import { AiFillCheckCircle, AiFillWarning, AiFillCloseCircle } from 'react-icons/ai'
import { RiCloseFill } from 'react-icons/ri'

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

    function handleCloseNotifier () {
        notifier.hide()
        clearTimeout(time)
    }
    
    return (
        <NotifierContainer
            isNotifier={notification.status}
            type={notification.type}
            className="notifier-container"
        >
            <FlexRow justifyContent='flex-start' 
                style={{
                    color: notification.type === 'success' ? '#2BE76D' 
                    : notification.type === 'warning' ? '#FEBA55' : '#FF6062'
                }}
            >
                { notification.type === 'success' ?
                    <AiFillCheckCircle className='message-icon' /> :
                        notification.type === 'warning' ?
                            <AiFillWarning className='message-icon' /> :
                                <AiFillCloseCircle className='message-icon' />
                }
                <CustomContainer width='33' className='message-notif-text'>
                    <AppText textSize='1.4' fontWeight='800'>
                        {notification.type === 'success' ? 'Success' : notification.type === 'warning' ? 'Info' : 'Error'}
                    </AppText>
                    <AppText textSize='1.3' fontWeight='400' color='rgba(255, 255, 255, 0.8)' >
                        {notification.message}
                    </AppText>
                </CustomContainer>
            </FlexRow>
            <RiCloseFill className='message-icon-cancel' onClick={handleCloseNotifier} />
        </NotifierContainer>
    )
}