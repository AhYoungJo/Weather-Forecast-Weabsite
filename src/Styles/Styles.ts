import styled from 'styled-components';

export const LoadingText = styled.div`
    font: 1rem 'Noto Sans KR';
    text-align: center;
`;

export interface BackgroundProps {
    $bgurl: string;
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
            url(${(props) => props.$bgurl});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 50%;
    /* border: 10px solid white; */
    box-shadow: 0px 1px 20px 1px #e7e7e7;
`;

interface ButtonProps {
    $buttoncolor: string;
    $hoverbgcolor: string;
    $bordercolor: string;
    $hoverbordercolor: string;
    $bordersize: number;
    $buttonw: number;
    $buttonh: number;
    $fontcolor: string;
    $hoverfontcolor: string;
    $fontszie: number;
    $transsec: number;
    $radius: number;
}

export const Button = styled.div<ButtonProps>`
    background-color: ${(props) => props.$buttoncolor};
    border: ${(props) => props.$bordersize}px solid ${(props) => props.$bordercolor};
    width: ${(props) => props.$buttonw}px; 
    height: ${(props) => props.$buttonh}px;
    color: ${(props) => props.$fontcolor};
    font-size: ${(props) => props.$fontszie}px;
    transition: ${(props) => props.$transsec}s;
    border-radius: ${(props) => props.$radius}px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    &:hover {
        cursor: pointer;
        background-color: ${(props) => props.$hoverbgcolor};
        border: ${(props) => props.$bordersize}px solid ${(props) => props.$hoverbordercolor};
        color: ${(props) => props.$hoverfontcolor};
    }
`;

interface WindDegProps {
    $degree: number;
}
export const WindDegreeStyle = styled.div<WindDegProps>`
    transform: rotate(${(props) => props.$degree}deg);
`
interface WindSpeedChartProps {
    $height: number;
    $color: string
}

export const WindSpeedChart = styled.div<WindSpeedChartProps>`
    min-height: ${(props) => props.$height}px;
    width: 30px;
    background-color: ${(props) => props.$color};
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

export const HPAFStyle = styled.div`
margin: 10px 0;
padding: 10px;
border-radius: 1.5em;
background-color: white;
display: flex;
flex-direction: column;
justify-content: center;
text-align: center;
gap: 2em;
width: 7.5em;
height: 12em;
`;

export const HPAFDiv = styled.div`
display: flex;
flex-direction: row;
width: 100%;
border: 1px solid blue;
justify-content: space-between;
`

//boolean은 프롭스로 전달 받을 수 없다는...
interface SidebarProps {
    $isopen: boolean;
}

export const Sidebar = styled.div<SidebarProps>`
    display: ${(props) => (props.$isopen ? 'block' : 'none')}; 
`;