import { StyleProps } from 'src/model'
import styled from 'styled-components'

export const NotifierContainer = styled.div<StyleProps>`
    left: ${({isNotifier}) => isNotifier ? 50 : -100}%;
    opacity: ${({isNotifier}) => isNotifier ? 1 : 0};
    transform: ${({isNotifier}) => isNotifier ? 'translateX(-50%)' : 'translateX(0%)'};
    background-color: ${({isSuccess}) => isSuccess ? '#ADDFAF': '#FFE0E0' };

    >p, >i {
        color: ${({isSuccess}) => isSuccess ? '#78A049' : '#B86533'}
    }
`