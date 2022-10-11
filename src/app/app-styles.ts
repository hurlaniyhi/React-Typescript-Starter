import styled from 'styled-components'
import { StyleProps } from 'src/model'

export const Container = styled.div`
    width: 100%;
    height: 100%;
    padding-left: 35rem;
    background-color: #000926;
    position: relative;

    @media (max-width: 750px) {
        padding-left: 0;
    }
`
export const InfoSideBar = styled.div`
    width: 35rem;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #00071F;

    @media (max-width: 750px) {
        display: none
    }
`

export const InfoWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    padding: 4rem 5rem;
`

export const SubContainer = styled.div`
    width: 100%;
    height: 100%;
    padding: 4rem 4rem 3rem 4rem;

    @media (max-width: 360px) {
        padding: 4rem 3rem 3rem 3rem
    }
`

export const ScreenContainer = styled.div<StyleProps>`
    width: 100%;
    height: 100%;
    position: relative;
    padding: ${({padding}) => padding || 2}rem;
`

export const SidePopupContainer = styled.div<StyleProps>`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0, .5);
    transition: all .2s;
    z-index: ${({zIndex}) => zIndex || 7};
`

export const CenterPopupContainer = styled.div<StyleProps>`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0, .6);
    overflow-y: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
    z-index: ${({zIndex}) => zIndex || 9};

    &::-webkit-scrollbar {
        display: none
    }
`
export const CenterPopup = styled.div<StyleProps>`
    background: #081952;
    min-height: 60rem;
    width: 87rem;
    border-radius: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 8rem 2rem 2rem 2rem;
    position: relative;

    @media (max-width: 800px) {
        width: 90%
    }
    @media (max-width: 530px) {
        min-height: 55rem
    }
`
export const SidePopup = styled.div<StyleProps>`
    width: ${({width}) => width || 50}rem;
    height: 100%;
    position: fixed;
    top: 0;
    right: 0;
    padding: ${({padding}) => padding || 2}rem;
    background-color: #081952;
    overflow-y: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
    transition: all .2s;

    &::-webkit-scrollbar {
        display: none
    }

    @media (max-width: 650px) {
        width: 100%
    }
`

export const FormGroupsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    width: 100%
`
export const Form = styled.form<StyleProps>`
    width: 100%;
    margin-top: ${({topMargin}) => topMargin || 0}rem;
    margin-bottom: ${({bottomMargin}) => bottomMargin || 0}rem;
`
export const FormGroup = styled.div<StyleProps>`
    width: ${({width}) => width || 100}%;
    margin-right: ${({rightMargin}) => rightMargin || 0}%;
    margin-top: ${({topMargin}) => topMargin || 0}rem;
    margin-bottom: ${({bottomMargin}) => bottomMargin || 3}rem;

    label {
        margin: 0
        padding-bottom: 0.8rem;
        font-weight: 500;
    }
    input, select, textarea, #react_select {
        border: 1px solid #fff;
        border-radius: .8rem;
        background-color: transparent;
        padding: 0 1.5rem;
        color: #fff;
        outline: none;
        height: 5rem;
        width: 100%;
    }
    textarea {
        height: 17rem;
        padding: 1rem 1.5rem;
    }
    input::-webkit-calendar-picker-indicator {
        filter: invert(1);
    }
`
export const FormGroupWithIcon = styled.div<StyleProps>`
    width: ${({width}) => width || 100}%;
    margin-right: ${({rightMargin}) => rightMargin || 0}%;
    margin-top: ${({topMargin}) => topMargin || 0}rem;
    margin-bottom: ${({bottomMargin}) => bottomMargin || 3}rem;;

    label {
        margin: 0;
        padding-bottom: 0.8rem;
        font-weight: 500;
    }
`
export const FlexEndWrapper = styled.div<StyleProps>`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    margin-top: ${({topMargin}) => topMargin || 0}rem;
    margin-bottom: ${({bottomMargin}) => bottomMargin || 0}rem;

    span {
        transition: all .2s;
        color: #6DE7B4;
        cursor: pointer;
        font-weight: 700;

        &:hover {
            color: #FED0B7
        }
    }
`

export const Button = styled.button<StyleProps>`
    width: ${({width, sizeUnit}) => sizeUnit && width ? `${width}${sizeUnit}` : width ? `${width}rem` : '20rem'};
    height: ${({height}) => height || 4.5}rem;
    background: ${({bgColor}) => bgColor || '#6DE7B4'};
    border-radius: ${({radius}) => radius || 0.8}rem;
    outline: none;
    border: none;
    border: ${({borderColor}) => borderColor ? `1px solid ${borderColor}` : 'none'};
    transition: all .2s;
    font-size: ${({titleSize}) => titleSize || 1.5}rem;
    color: ${({color}) => color || '#00071F'};
    font-weight: ${({fontWeight}) => fontWeight || 700};
    margin-right: ${({rightMargin}) => rightMargin || 0}rem;
    margin-left: ${({leftMargin}) => leftMargin || 0}rem;
    margin-top: ${({topMargin}) => topMargin || '0'}rem;
    margin-bottom: ${({bottomMargin}) => bottomMargin || '0'}rem;
    padding: 0 ${({padding}) => padding || 0}rem;
    padding-top: ${({topPadding}) => topPadding || 0}rem;
    padding-bottom: ${({bottomPadding}) => bottomPadding || 0}rem;
    padding-left: ${({leftPadding, padding}) => leftPadding ? leftPadding : padding ? padding : 0}rem;
    padding-right: ${({rightPadding, padding}) => rightPadding ? rightPadding : padding ? padding : 0}rem;

    &:hover, &:focus {
        background: ${({hoverBgColor, bgColor}) => hoverBgColor || bgColor};
        color: ${({hoverColor, color}) => hoverColor ? hoverColor : color ? color : '#00071F'};
        outline: none
    }
`
export const OutlineButton = styled.button<StyleProps>`
    width: ${({width, sizeUnit}) => sizeUnit && width ? `${width}${sizeUnit}` : width ? `${width}rem` : '20rem'};
    height: ${({height}) => height || 4.5}rem;
    border: 1px solid ${({color}) => color || '#6DE7B4'};
    border-radius: ${({radius}) => radius || 0.8}rem;
    outline: none;
    background: transparent;
    transition: all .2s;
    font-size: ${({titleSize}) => titleSize || 1.5}rem;
    color: ${({color}) => color || '#00071F'};
    font-weight: ${({fontWeight}) => fontWeight || 700};
    margin-right: ${({rightMargin}) => rightMargin || 0}rem;
    margin-left: ${({leftMargin}) => leftMargin || 0}rem;
    margin-top: ${({topMargin}) => topMargin || '0'}rem;
    margin-bottom: ${({bottomMargin}) => bottomMargin || '0'}rem;
    padding: 0 ${({padding}) => padding || 0}rem;
    padding-top: ${({topPadding}) => topPadding || 0}rem;
    padding-bottom: ${({bottomPadding}) => bottomPadding || 0}rem;
    padding-left: ${({leftPadding, padding}) => leftPadding ? leftPadding : padding ? padding : 0}rem;
    padding-right: ${({rightPadding, padding}) => rightPadding ? rightPadding : padding ? padding : 0}rem;

    &:hover, &:focus {
        background: ${({hoverBgColor, color}) => hoverBgColor || color};
        color: ${({hoverColor}) => hoverColor || '#00071F'};
        border: none;
        outline: none
    }
`
export const BorderlessButton = styled.button<StyleProps>`
    outline: none;
    transition: all .2s;
    font-size: ${({titleSize}) => titleSize || 1.5}rem;
    color: ${({color}) => color || '#6DE7B4'};
    font-weight: ${({fontWeight}) => fontWeight || 700};
    margin-right: ${({rightMargin}) => rightMargin || 0}rem;
    margin-left: ${({leftMargin}) => leftMargin || 0}rem;
    margin-top: ${({topMargin}) => topMargin || '0'}rem;
    margin-bottom: ${({bottomMargin}) => bottomMargin || '0'}rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    background: transparent;
    border: none;

    &:hover, &:focus {
        border: none;
        color: ${({hoverColor, color}) => hoverColor || color};
        outline: none
    }
`

export const SelectButton = styled.div<StyleProps>`
    width: ${({width}) => width}rem;
    height: ${({height}) => height}rem;
    border-radius: 10rem;
    display: grid;
    place-items: center;
    padding: 0.7rem;
    margin-right: ${({rightMargin}) => rightMargin || 0.8}rem;
    margin-bottom: 1rem;
    border: 1px solid #8095E0;
    position: relative;

    input {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: 3;
        opacity: 0
    }
    label {
        z-index: 2;
        text-align: center;
        font-size: ${({size}) => size || 1.5}rem;
        margin: 0;
        padding: 0
    }
    span {
        width: 100%;
        height: ${({height}) => height}rem;
        position: absolute;
        top: 0;
        left: 0;
        border-radius: 10rem;
        transition: all .2s;
    }
    input:checked ~ span {
        background-color: #2E4DBD;
        width: ${({width}) => Number(width) + 0.5}rem;
        height: ${({height}) => Number(height) + 0.5}rem;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%)
    }
    input:checked ~ label {
        font-weight: 700
    }
`
export const Divider = styled.div<StyleProps>`
    width: 100%;
    margin-top: ${({margin}) => margin || 3}rem;
    margin-bottom: ${({margin}) => margin || 3}rem;
    border: 1px solid ${({bgColor}) => bgColor || 'rgba(255, 255, 255, 0.07)'};
`
export const LevelBar = styled.div<StyleProps>`
    width: 100%;
    height: .4rem;
    background-color: #000;
    margin-top: ${({topMargin}) => topMargin || 0}rem;
    margin-bottom: ${({bottomMargin}) => bottomMargin || 0}rem;

    span {
        display: block;
        width: ${({strokeWidth}) => strokeWidth || 50}%;
        height: 0.4rem;
        background-color: ${({bgColor}) => bgColor || '#6DE7B4'};
    }
`
export const SideBarSummary = styled.div<StyleProps>`
    width: 100%;
    padding: 0rem 2rem;
    padding-top: ${({topPadding}) => topPadding || 3}rem;
    padding-bottom: ${({bottomPadding}) => bottomPadding || 3}rem;
    border-radius: .8rem;
    border: ${({borderType}) => borderType ? `1px ${borderType} rgba(255,255,255, 0.5)` : 'none'};
    background-color: ${({bgColor}) => bgColor || 'transparent'};
`

export const DataWithLabel = styled.div<StyleProps>`
    text-align: ${({align}) => align || 'center'};
    width: ${({width}) => `${width}rem` || 'auto' };

    label {
        display: block;
        font-size: ${({titleSize}) => titleSize || 1.5}rem;
        color: ${({titleColor}) => titleColor || '#E2E2E2'};
        font-weight: ${({titleWeight}) => titleWeight || 400};
        margin-bottom: 0;
        padding-bottom: 0;
    }
    span {
        font-size: ${({textSize}) => textSize || 1.5}rem;
        color: ${({color}) => color || '#fff'};
        font-weight: ${({fontWeight}) => fontWeight || 600}
    }
`

export const CustomContainer = styled.div<StyleProps>`
    width: ${({width, sizeUnit}) => sizeUnit && width ? `${width}${sizeUnit}` : width ? `${width}rem` : '100%'};
    height: ${({height}) => `${height}rem` || 'auto'};
    margin-top: ${({topMargin}) => topMargin || 0}rem;
    margin-bottom: ${({bottomMargin}) => bottomMargin}rem;
    margin-left: ${({leftMargin}) => leftMargin || 0}rem;
    margin-right: ${({rightMargin}) => rightMargin || 0}rem;
    padding-top: ${({topPadding}) => topPadding || 0}rem;
    padding-bottom: ${({bottomPadding}) => bottomPadding || 0}rem;
    padding-left: ${({leftPadding}) => leftPadding || 0}rem;
    padding-right: ${({rightPadding}) => rightPadding || 0}rem;
    background-color: ${({bgColor}) => bgColor || 'transparent'};
    border-radius: ${({radius}) => radius || 0}rem;
    border: ${({borderColor}) => borderColor ? `1px solid ${borderColor}` : 'none'};
    overflow: hidden;
    position: relative;
`

export const FlexColumn = styled.div<StyleProps>`
    display: flex;
    flex-direction: column;
    height: ${({height}) => `${height}rem` || 'auto'};
    justify-content: ${({justifyContent}) => justifyContent || 'center'};
    align-items: ${({alignItems}) => alignItems || 'center'};
    width: ${({width}) => width || 100}%;
    margin-top: ${({topMargin}) => topMargin || 0}rem;
    margin-bottom: ${({bottomMargin}) => bottomMargin}rem;
    margin-left: ${({leftMargin}) => leftMargin || 0}rem;
    margin-right: ${({rightMargin}) => rightMargin || 0}rem;
    padding-top: ${({topPadding}) => topPadding || 0}rem;
    padding-bottom: ${({bottomPadding}) => bottomPadding || 0}rem;
    padding-left: ${({leftPadding}) => leftPadding || 0}rem;
    padding-right: ${({rightPadding}) => rightPadding || 0}rem;
    background-color: ${({bgColor}) => bgColor || 'transparent'};
    border-radius: ${({radius}) => radius || 0}rem;
    border: ${({borderColor}) => borderColor ? `1px solid ${borderColor}` : 'none'};
    position: relative;
`
export const FlexRow = styled.div<StyleProps>`
    display: flex;
    flex-direction: row;
    justify-content: ${({justifyContent}) => justifyContent || 'center'};
    align-items: ${({alignItems}) => alignItems || 'center'};
    flex-wrap: ${({wrap}) => wrap || 'nowrap'};
    width: ${({width, sizeUnit}) => sizeUnit && width ? `${width}${sizeUnit}` : width ? `${width}rem` : '100%'};
    margin-top: ${({topMargin}) => topMargin || 0}rem;
    margin-bottom: ${({bottomMargin}) => bottomMargin}rem;
    margin-left: ${({leftMargin}) => leftMargin || 0}rem;
    margin-right: ${({rightMargin}) => rightMargin || 0}rem;
    padding-top: ${({topPadding}) => topPadding || 0}rem;
    padding-bottom: ${({bottomPadding}) => bottomPadding || 0}rem;
    padding-left: ${({leftPadding}) => leftPadding || 0}rem;
    padding-right: ${({rightPadding}) => rightPadding || 0}rem;
    background-color: ${({bgColor}) => bgColor || 'transparent'};
    border-radius: ${({radius}) => radius || 0}rem;
    border: 1px solid ${({borderColor}) => borderColor || 'transparent'};
    position: relative;
    cursor: pointer;
`
export const AppText = styled.p<StyleProps>`
    font-size: ${({textSize}) => textSize || 1.5}rem;
    width: ${({width, sizeUnit}) => sizeUnit && width ? `${width}${sizeUnit}` : width ? `${width}rem` : 'auto'};
    color: ${({color}) => color || '#fff'};
    font-weight: ${({fontWeight}) => fontWeight || 700};
    margin-top: ${({topMargin}) => topMargin || 0}rem;
    margin-bottom: ${({bottomMargin}) => bottomMargin || 0}rem;
    margin-left: ${({leftMargin}) => leftMargin || 0}rem;
    margin-right: ${({rightMargin}) => rightMargin || 0}rem;
    padding-top: ${({topPadding}) => topPadding || 0}rem;
    padding-bottom: ${({bottomPadding}) => bottomPadding || 0}rem;
    padding-left: ${({leftPadding}) => leftPadding || 0}rem;
    padding-right: ${({rightPadding}) => rightPadding || 0}rem;
    text-align: ${({align}) => align || 'left'};
`
export const AppSpan = styled.span<StyleProps>`
    width: ${({width, sizeUnit}) => sizeUnit && width ? `${width}${sizeUnit}` : width ? `${width}rem` : 'auto'};
    font-size: ${({textSize}) => textSize || 1.5}rem;
    color: ${({color}) => color || '#fff'};
    font-weight: ${({fontWeight}) => fontWeight || 700};
    margin-top: ${({topMargin}) => topMargin || 0}rem;
    margin-bottom: ${({bottomMargin}) => bottomMargin}rem;
    margin-left: ${({leftMargin}) => leftMargin || 0}rem;
    margin-right: ${({rightMargin}) => rightMargin || 0}rem;
    padding-top: ${({topPadding}) => topPadding || 0}rem;
    padding-bottom: ${({bottomPadding}) => bottomPadding || 0}rem;
    padding-left: ${({leftPadding}) => leftPadding || 0}rem;
    padding-right: ${({rightPadding}) => rightPadding || 0}rem;
    text-align: ${({align}) => align || 'left'};
`
export const ScreenTitle = styled.h4<StyleProps>`
    width: ${({width, sizeUnit}) => sizeUnit && width ? `${width}${sizeUnit}` : width ? `${width}rem` : 'auto'};
    font-size: ${({textSize}) => textSize || 1.5}rem;
    color: ${({color}) => color || '#fff'};
    font-weight: ${({fontWeight}) => fontWeight || 700};
    margin-top: ${({topMargin}) => topMargin || 0}rem;
    margin-bottom: ${({bottomMargin}) => bottomMargin}rem;
    margin-left: ${({leftMargin}) => leftMargin || 0}rem;
    margin-right: ${({rightMargin}) => rightMargin || 0}rem;
    padding-top: ${({topPadding}) => topPadding || 0}rem;
    padding-bottom: ${({bottomPadding}) => bottomPadding || 0}rem;
    padding-left: ${({leftPadding}) => leftPadding || 0}rem;
    padding-right: ${({rightPadding}) => rightPadding || 0}rem;
    text-align: ${({align}) => align || 'left'};
`
export const AppLink = styled.a<StyleProps>`
    color: ${({color}) => color || '#6DE7B4'};
    text-decoration: ${({decoration}) => decoration || 'underline'};
    font-size: ${({textSize}) => textSize || 1.5}rem;
    font-weight: ${({fontWeight}) => fontWeight || 700};
    margin-top: ${({topMargin}) => topMargin || 0}rem;
    margin-bottom: ${({bottomMargin}) => bottomMargin || 0}rem;
    margin-left: ${({leftMargin}) => leftMargin || 0}rem;
    margin-right: ${({rightMargin}) => rightMargin || 0}rem;
    padding-top: ${({topPadding}) => topPadding || 0}rem;
    padding-bottom: ${({bottomPadding}) => bottomPadding || 0}rem;
    padding-left: ${({leftPadding}) => leftPadding || 0}rem;
    padding-right: ${({rightPadding}) => rightPadding || 0}rem;
    text-align: ${({align}) => align || 'left'};
    border-bottom: ${({hasBottomBorder, color}) => hasBottomBorder ? `1px solid ${color || '#6DE7B4'}` : 'none'};
    outline: none;
    cursor: pointer;
    transition: all .2s;

    &:hover, &:visited {
        outline: none;
    }

    &:hover {
        color: ${({color, hoverColor}) => hoverColor || color};
        border-bottom: ${({hasBottomBorder, hoverColor, color}) => hasBottomBorder ? `1px solid ${hoverColor || color}` : 'none'};
        text-decoration: ${({decoration}) => decoration || 'underline'};
        outline: none
    }
`
export const AppLabel = styled.label<StyleProps>`
    color: ${({color}) => color || '#6DE7B4'};
    text-decoration: ${({decoration}) => decoration || 'none'};
    font-size: ${({textSize}) => textSize || 1.5}rem;
    font-weight: ${({fontWeight}) => fontWeight || 700};
    margin-top: ${({topMargin}) => topMargin || 0}rem;
    margin-bottom: ${({bottomMargin}) => bottomMargin}rem;
    margin-left: ${({leftMargin}) => leftMargin || 0}rem;
    margin-right: ${({rightMargin}) => rightMargin || 0}rem;
    text-align: ${({align}) => align || 'left'};
    outline: none;
    cursor: pointer;
    transition: all .2s;

    &:hover, &:visited {
        outline: none;
    }

    &:hover {
        color: ${({color, hoverColor}) => hoverColor || color};
    }
`
export const Icon = styled.img<StyleProps>`
    margin-top: ${({topMargin}) => topMargin || 0}rem;
    margin-bottom: ${({bottomMargin}) => bottomMargin}rem;
    margin-left: ${({leftMargin}) => leftMargin || 0}rem;
    margin-right: ${({rightMargin}) => rightMargin || 0}rem;
    width: ${({width}) => `${width}rem` || 'auto'};

    @media (max-width: 600px) {
        transform: scale(0.85)
    }
`

export const CenterAlignedPopup = styled.div<StyleProps>`
    background: #081952;
    width: 70rem;
    border-radius: 1.5rem;
    padding: 3rem;
    position: relative;
    margin: 2rem 1rem;
    overflow-y: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
    transition: all .2s;
    max-height: 90%;

    &::-webkit-scrollbar {
        display: none
    }

    @media (max-width: 700px) {
        width: 90%;
    }
    @media (max-width: 560px) {
        height: 95%;
    } 
`

export const SignatureContainer = styled.div<StyleProps>`
    background: #081952;
    width: 65rem;
    min-height: 55rem;
    border-radius: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3rem;
    position: relative;
    margin: 2rem 1rem;
    overflow-y: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
    transition: all .2s;
    max-height: 90%;

    &::-webkit-scrollbar {
        display: none
    }

    @media (max-width: 700px) {
        width: 90%;
    }
`

export const Circle = styled.div<StyleProps>`
    width: ${({size}) => size || 2}rem;
    height: ${({size}) => size || 2}rem;
    border-radius: 50%;
    background: ${({bgColor}) => bgColor};
    border: 1px solid ${({borderColor}) => borderColor || 'transparent'};
    margin-top: ${({topMargin}) => topMargin || 0}rem;
    margin-bottom: ${({bottomMargin}) => bottomMargin}rem;
    margin-left: ${({leftMargin}) => leftMargin || 0}rem;
    margin-right: ${({rightMargin}) => rightMargin || 0}rem;
    display: grid;
    place-items: center;
    transition: all .2s;
` 
export const RoundImageContainer = styled.div<StyleProps>`
    width: ${({size}) => size || 2}rem;
    height: ${({size}) => size || 2}rem;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: ${({bgColor}) => bgColor || 'transparent'};
    border: 1px solid ${({borderColor}) => borderColor || 'transparent'};
    margin-top: ${({topMargin}) => topMargin || 0}rem;
    margin-bottom: ${({bottomMargin}) => bottomMargin}rem;
    margin-left: ${({leftMargin}) => leftMargin || 0}rem;
    margin-right: ${({rightMargin}) => rightMargin || 0}rem;
    position: relative;

    img {
        min-width: ${({isMaxWidth}) => isMaxWidth ? '100%' : 'auto'};
        max-width: ${({isMaxWidth}) => isMaxWidth ? '100%' : 'auto'};
    }
`
export const AbsoluteContainer = styled.div<StyleProps>`
    position: absolute;
    top: ${({top}) => top || 'none'}rem;
    right: ${({right}) => right || 'none'}rem;
    left: ${({left}) => left || 'none'}rem;
    bottom: ${({bottom}) => bottom || 'none'}rem;
    background: ${({bgColor}) => bgColor || 'transparent'};
    width: ${({width, sizeUnit}) => sizeUnit && width ? `${width}${sizeUnit}` : width ? `${width}rem` : 'auto'};
    height: ${({height}) => height === 'full' ? '100%' : height ? `${height}rem`: 'auto'};
    border-radius: ${({radius}) => radius || 0}rem;
    z-index: ${({zIndex}) => zIndex || 1};
    transition: all 0.2s;
`
export const FixedContainer = styled.div<StyleProps>`
    position: fixed;
    top: ${({top}) => top || 'none'}rem;
    right: ${({right}) => right || 'none'}rem;
    left: ${({left}) => left || 'none'}rem;
    bottom: ${({bottom}) => bottom || 'none'}rem;
    background: ${({bgColor}) => bgColor || 'transparent'};
    width: ${({width, sizeUnit}) => sizeUnit && width ? `${width}${sizeUnit}` : width ? `${width}rem` : 'auto'};
    height: ${({height}) => height === 'full' ? '100%' : height ? `${height}rem`: 'auto'};
    border-radius: ${({radius}) => radius || 0}rem;
    padding-top: ${({topPadding}) => topPadding || 0}rem;
    padding-bottom: ${({bottomPadding}) => bottomPadding || 0}rem;
    padding-left: ${({leftPadding}) => leftPadding || 0}rem;
    padding-right: ${({rightPadding}) => rightPadding || 0}rem;
`
export const ChartToggleTypes = styled.div<StyleProps>`
    width: 23rem;
    height: 3rem;
    background-color: #00071F;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    position: relative;
    overflow: hidden;
    border-radius: 10rem;

    .chart-toggler {
        width: 7.67rem;
        height: 2.8rem;
        position: absolute;
        top: 50%;
        left: ${({type}) => type === 'loan' ? '0' : type === 'portfolio' ? '7.6' : '15.2'}rem;
        transform: translateY(-50%);
        background-color: #2E4DBD;
        border-radius: 10rem;
        transition: all 0.2s;
        z-index: 1
    }
`
export const ChartToggleText = styled.span<StyleProps>`
    font-size: 1.1rem;
    width: 7.67rem;
    height: 100%;
    color: ${({isPicked}) => isPicked ? '#fff' : '#676767'};
    font-weight: ${({isPicked}) => isPicked ? '700' : '400'};
    display: grid;
    place-items: center;
    text-align: center;
    cursor: pointer;
    z-index: 2;
`

export const ToggleTypes = styled.div<StyleProps>`
    width: 23rem;
    height: 3rem;
    background-color: #00071F;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    position: relative;
    overflow: hidden;
    border-radius: 10rem;

    .chart-toggler {
        width: 7.67rem;
        height: 2.8rem;
        position: absolute;
        top: 50%;
        left: ${({type}) => type === 'Days' ? '0' : type === 'Weeks' ? '7.6' : '15.2'}rem;
        transform: translateY(-50%);
        background-color: #2E4DBD;
        border-radius: 10rem;
        transition: all 0.2s;
        z-index: 1
    }
`
export const ToggleText = styled.span<StyleProps>`
    font-size: 1.1rem;
    width: 7.67rem;
    height: 100%;
    color: ${({isPicked}) => isPicked ? '#fff' : '#676767'};
    font-weight: ${({isPicked}) => isPicked ? '700' : '400'};
    display: grid;
    place-items: center;
    text-align: center;
    cursor: pointer;
    z-index: 2;
`
export const RangeInputWrapper = styled.div<StyleProps>`
    width: ${({width}) => width || 100}%;
    margin-right: ${({rightMargin}) => rightMargin || 0}%;
    margin-top: ${({topMargin}) => topMargin || 0}rem;
    margin-bottom: ${({bottomMargin}) => bottomMargin || 3}rem;

    label {
        margin: 0
        padding-bottom: 0.8rem;
        font-weight: 500;
    }
`
export const RangeInput = styled.div<StyleProps>`
    min-width: 100%;
    border: 1px solid #fff;
    border-radius: 0.8rem;
    color: #fff;
    height: 5rem;
    display: flex;
    flex-direction: row;

    input {
        border: none;
        background-color: transparent;
        outline: none;
        padding: 0 1.5rem;
        width: 48%;
        text-align: center;
        color: #fff;
        font-weight: 500;
    }
    span {
        width: 6rem;
        display: grid;
        place-items: center;
        font-weight: 600;
        border-left: 1px solid #fff;
        border-right: 1px solid #fff;
    }
`