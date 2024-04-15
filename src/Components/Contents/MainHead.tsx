import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../Store/Data/Reducers/index';
import { MainHeadProps  } from '../../Store/Type/Interface'
import { Background } from '../../Styles/Styles';


const MainHead: React.FC<MainHeadProps> = ({weatherGIF, todayDateData}) => {
    const {address, shortenAddress}  = useSelector((state: RootState) => (state.address))
    const weatherIcon = todayDateData && todayDateData[0] && todayDateData[0].icon;
    const maxTemp = todayDateData && todayDateData[0] && todayDateData[0].temp_max;
    const minTemp = todayDateData && todayDateData[0] && todayDateData[0].temp_min;
    const temp = todayDateData && todayDateData[0] && todayDateData[0].temp;
    const description = todayDateData && todayDateData[0] && todayDateData[0].description;


    return (
        <div>
              <div className='Main__head'>
                <div className='Main__head__IntroWeather'>
                    <div className='Main__head__IntroWeather__right'>
                        <img src="https://img.icons8.com/stickers/100/marker.png" alt="marker"/>
                        <span>{shortenAddress}</span>
                        {weatherIcon ? <img src={weatherIcon} alt='weatherIcon'/> : <li>loading...</li>}
                    </div>
                    <div className='Main__head__IntroWeather__left'>
                        <div>
                            {maxTemp ? <li>{maxTemp}℃ </li>: <li>loading...</li>}
                            {minTemp ? <li>{minTemp}℃</li> : <li>loading...</li>}
                        </div>
                        {temp ? <li className='Main__head__IntroWeather__left__temp'>{temp}℃</li> : <li>loading...</li>}
                    </div>
                </div>

                <div className='Main__head__inputDiv'>
                        <input id='Input_Top' type="text" className='Main__head__inputDiv__input' placeholder='장소를 검색하세요.'/>
                        <div className="Main__head__inputDiv__icon"></div>
                </div>
                
                <Background bgURL={weatherGIF}>
                        <div className='Main__head__InteractivBG'>
                        </div>
                </Background>

                <div className='Main__head__weatherDiv'>
                        <ul>
                            {description ? <li>{description}
                             </li>: <li>loading...</li>}
                            {/* {todayDateData ? <li>{asYesterdayTemp} </li>: <li>loading...</li>} */}
                        </ul>
                </div>

            </div>
        </div>
    );
};

export default MainHead;