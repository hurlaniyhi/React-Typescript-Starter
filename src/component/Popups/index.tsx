import React, { useContext } from 'react'
import { Loader, Notifier } from '../index'
import VisibilityContext from 'src/provider/state-manager/visibilityProvider'

export const PopUps: React.FC<any> = () => {
    const { visibility } = useContext(VisibilityContext)

    return (
        <>
            { visibility.isLoading ? <Loader /> : null }
            <Notifier />
        </>
    )
}