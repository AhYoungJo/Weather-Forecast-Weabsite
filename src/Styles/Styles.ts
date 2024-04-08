import styled from 'styled-components';

export const LoadingText = styled.div`
    font: 1rem 'Noto Sans KR';
    text-align: center;
`;

interface BackgroundProps {
    bgURL: string;
}

/* background-image: url(${props => props.bgURL}); */
export const Background = styled.div<BackgroundProps>`
    background-image: url(${(props) => props.bgURL});
    background-size: cover;
    /* 배경 이미지 스타일 설정 */
    width: 100vw;
    height: 780px;
`;