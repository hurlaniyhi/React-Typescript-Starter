import { StyleProps } from 'src/model'
import styled from 'styled-components'

export const NotifierContainer = styled.div<StyleProps>`
    right: ${({isNotifier}) => isNotifier ? 3 : -70}rem;
    opacity: ${({isNotifier}) => isNotifier ? 1 : 0};
    transform: translateX(0%);
    background-color: #ffffff;

    @media (max-width: 380px) {
        right: ${({isNotifier}) => isNotifier ? 50 : 50}%;
        transform: ${({isNotifier}) => isNotifier ? 'translateX(50%)' : 'translateX(0%)'};
    }
`