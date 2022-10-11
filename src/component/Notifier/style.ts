import { StyleProps } from 'src/model'
import styled from 'styled-components'

export const NotifierContainer = styled.div<StyleProps>`
    left: ${({isNotifier}) => isNotifier ? 50 : -100}%;
    opacity: ${({isNotifier}) => isNotifier ? 1 : 0};
    transform: ${({isNotifier}) => isNotifier ? 'translateX(-50%)' : 'translateX(0%)'};
    background-color: #081952;
    border-left: 8px solid ${({type}) => type === 'success' ? '#2BE76D' : type === 'warning' ? '#FEBA55' : '#FF6062'};

    >p, >i {
        color:
    }
`