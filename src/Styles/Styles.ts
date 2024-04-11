import styled from 'styled-components';

export const LoadingText = styled.div`
    font: 1rem 'Noto Sans KR';
    text-align: center;
`;

interface BackgroundProps {
    bgURL: string;
}

export const Background = styled.div<BackgroundProps>`
    background-image: url(${(props) => props.bgURL});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 100vw; 
    top: 0;
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