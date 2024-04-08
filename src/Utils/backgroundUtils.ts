import Cloudy from '../Assets/Background/Cloudy.gif';
import Sunny from '../Assets/Background/Sunny.gif';
import Snowy from '../Assets/Background/Snowy.gif';
import Rainy from '../Assets/Background/Rainy.gif';



export const getBackgroundKeyword = (code: string): string => {
    let backgroundKeyword: string;
    switch (code) {
        case 'Clear':
            backgroundKeyword = Sunny; // 맑음
            break;
        case 'Clouds':
            backgroundKeyword = Cloudy; // 흐림
            break;
        case 'Rain':
            backgroundKeyword = Rainy; // 비
            break;
        case 'Snow':
            backgroundKeyword = Snowy; // 눈
            break;
        default:
            backgroundKeyword = Sunny; // 기본값
    }
    return backgroundKeyword;
};