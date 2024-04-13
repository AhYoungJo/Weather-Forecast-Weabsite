import styled from 'styled-components';

export const LoadingText = styled.div`
    font: 1rem 'Noto Sans KR';
    text-align: center;
`;

export interface BackgroundProps {
    bgURL: string;
}

export const Background = styled.div<BackgroundProps>`
    background-image: linear-gradient(
        to bottom, 
            rgba(157, 165, 255, 0.38),
            rgba(255, 255, 255, 0),
            rgba(255, 255, 255, 0),
            rgba(255, 255, 255, 0),
            rgba(255, 255, 255, 0),
            rgba(255, 255, 255, 0),
            rgba(255, 255, 255, 0),
            rgba(255, 255, 255, 0),
            rgba(255, 255, 255, 0),
            rgba(255, 255, 255, 0),
            rgba(255, 255, 255, 0),
            rgba(255, 255, 255, 0),
            rgba(255, 255, 255, 0),
            rgba(255, 255, 255, 0),
            rgba(255, 255, 255, 0),
            rgba(255, 255, 255, 0),
            rgba(255, 255, 255, 0),
            rgba(255, 255, 255, 0),
            rgba(255, 255, 255, 0),
            rgba(255, 255, 255, 0),
            rgba(255, 255, 255, 0),
            rgba(255, 255, 255, 0),
            rgb(255, 168, 168, 0.1383)
        ), 
            url(${(props) => props.bgURL});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 50%;
    border: 10px solid white;
    box-shadow: 0px 1px 10px 1px #e7e7e7;
`;

interface ButtonProps {
    buttonColor: string;
    hoverBgColor: string;
    borderColor: string | null;
    hoverBorderColor: string;
    borderSize: number | null;
    buttonW: number;
    buttonH: number;
    fontColor: string;
    hoverFontColor: string;
    fontSzie: number;
    transSec: number;
    radius: number;
}

export const Button = styled.div<ButtonProps>`
    background-color: ${(props) => props.buttonColor};
    border: ${(props) => props.borderSize}px solid ${(props) => props.borderColor};
    width: ${(props) => props.buttonW}px; 
    height: ${(props) => props.buttonH}px;
    color: ${(props) => props.fontColor};
    font-size: ${(props) => props.fontSzie}px;
    transition: ${(props) => props.transSec}s;
    border-radius: ${(props) => props.radius}px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    &:hover {
        cursor: pointer;
        /* background-color: ${(props) => props.hoverBgColor};
        border: ${(props) => props.borderSize}px solid ${(props) => props.hoverBorderColor};
        color: ${(props) => props.hoverFontColor}; */
        background-color: white;
        border: 1px solid black;
        color: black;
    }
`;

interface WindDegProps {
    degree: number;
}
export const WindDegreeStyle = styled.div<WindDegProps>`
    transform: rotate(${(props) => props.degree}deg);
`
interface WindSpeedChartProps {
    height: number;
    color: string
}

export const WindSpeedChart = styled.div<WindSpeedChartProps>`
    min-height: ${(props) => props.height}px;
    width: 30px;
    background-color: ${(props) => props.color};
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`