import styled from 'styled-components'
import { StyleProps } from 'src/model'
import { FaBars } from 'react-icons/fa'

export const NavBarContainer = styled.nav<StyleProps>`
    width: 100%;
    height: ${({isBar}) => isBar ? 13 : 8}rem;
    background-color: #05001b;
    position: fixed;
    top: 0;
    left: 0;
    overflow: hidden;
    z-index: 4;
    transition: all .2s;

    @media (max-width: 330px) {
        height: ${({isBar}) => isBar ? 10 : 8}rem;
    }

`
export const NavBarLogo = styled.img`
    position: absolute;
    top: 1rem;
    left: -1rem;
    transform: scale(.65);

    @media (max-width: 900px) {
        transform: scale(.55);
        top: .5rem;
        left: -3rem;
    }
    @media (max-width: 600px) {
        transform: scale(.45);
        top: .2rem;
        left: -6rem;
    }   
`
export const MenuIcon = styled(FaBars)`
    font-size: 3.5rem;
    position: absolute;
    color: rgba(255, 255, 255, 0.7);
    top: 2.2rem;
    right: 3rem;
    transition: all .2s;
    display: none;

    &:hover {
        color: #65E6A2
    }

    @media (max-width: 600px) {
        display: inline-block;
    }
`
export const OptionWrapper = styled.p<StyleProps>`
    text-align: center;
    color: rgba(255, 255, 255, 0.7);
    font-size: 1.8rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    transition: all .2s;
    font-weight: 600;
    float: right;
    margin-right: 5rem;
    margin-top: 2rem;
    cursor: pointer;

    @media (max-width: 670px) {
        margin-right: 2.5rem
    }
    @media (max-width: 600px) {
        float: none;
        margin-top: 8rem;
        margin-right: 0
    }
    @media (max-width: 330px) {
        font-size: 1.5rem;
    }

    >span {
       opacity: ${({isBar}) => isBar ? 1 : 0}rem;
       transition: all .2s;
    }

    >span:first-child {
        padding-right: 5rem;

        @media (max-width: 330px) {
            padding-right: 2.5rem;
        }
    
    }

    >span:last-child {
        padding-left: 5rem;

        @media (max-width: 330px) {
            padding-left: 2.5rem;
        }
    }
    >span:hover {
        color: #65E6A2
    }
    >span i {
        margin-right: 1rem
    }
`