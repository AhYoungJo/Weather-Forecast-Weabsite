import React, {useEffect, useState} from 'react';
import cancle from '../Assets/Images/cancle_90.png'
import '../Styles/Header.scss';
import '../Styles/Sidebar.scss';
import {Link } from 'react-router-dom';
import { Button, Sidebar } from '../Styles/Styles';
import Home from '../Assets/Images/house_fiiled_90.png';
import MyPage from '../Assets/Images/my_page.png';
import Favorite from '../Assets/Images/interest_90.png';
import Conatact from '../Assets/Images/call_90.png';
import GitHub from '../Assets/Images/github_96.png';
import logo from '../Assets/Images/Logo.png';


const Header: React.FC = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    
    return (
        <nav>
            <div className='header'>
                <Link to='/' className='header__logo'>
                    <img src={logo} alt="logo" />
                </Link>
                <div className='header__left'>

                <button type="button" onClick={toggleSidebar}>메뉴</button>
                <Sidebar $isopen={isSidebarOpen} >
                    <div className='BlackDiv' id='SideBarDiv'>
                        <div className='Sidebar'>
                            <div className='Sidebar__top' >
                                <h1>고객님 환영합니다.</h1>
                                <img src={cancle} alt='cancle.icon' className='cancelIcon' id="cancleSideBar" onClick={toggleSidebar}/>
                            </div>
                            <div className='Sidebar__SignButtons'>
                                <Button 
                                    $buttoncolor = '#4083E6' 
                                    $hoverbgcolor = '#f7f7f7'
                                    $bordercolor = 'transparent'
                                    $hoverbordercolor = 'white'
                                    $bordersize = {0}
                                    $buttonw = {81}
                                    $buttonh = {35}
                                    $fontcolor = 'white'
                                    $hoverfontcolor = '#032455'
                                    $fontszie = {15}
                                    $transsec = {0.4}
                                    $radius= {7}>
                                    로그인
                                </Button>
                                <Button 
                                    $buttoncolor = '#f7f7f7' 
                                    $hoverbgcolor = '#4083E6'
                                    $bordercolor = '#4083E6'
                                    $hoverbordercolor = 'transparent'
                                    $bordersize = {2.3}
                                    $buttonw = {81}
                                    $buttonh = {35}
                                    $fontcolor = '#032455'
                                    $hoverfontcolor = '#f7f7f7'
                                    $fontszie = {15}
                                    $transsec = {0.4}
                                    $radius= {7}>
                                    회원가입
                                </Button>
                            </div>
                            <div className='Sidebar__SecondButtDiv'>
                                <Link to='/'>
                                    <div className='Sidebar__SecondButtDiv__HomeDiv'>
                                        <div className='Sidebar__SecondButtDiv__HomeDiv__Icon'>
                                            <div className='Round'></div>    
                                            <img src={Home} alt='Home'/>    
                                        </div>
                                        <span>홈으로</span>
                                    </div>
                                </Link>
                                <Link to='/'>
                                    <div className='Sidebar__SecondButtDiv__MyPageDiv'>
                                        <div className='Sidebar__SecondButtDiv__MyPageDiv__Icon'>
                                            <div className='MyPageRound'></div>    
                                            <img className='MyPageImg' src={MyPage} alt='MyPage'/>    
                                        </div>
                                        <span className='MyPageSpan'>마이페이지</span>
                                    </div>
                                </Link>
                            </div>
                            <br />
                            <br/> <div className='Sidebar__hrDiv'/> <br />
                            <br />
                            <Link to='/'>
                                <div className='FavoriteDiv'>
                                    <img src={Favorite} alt='Favorite'/>
                                    <span>관심지역</span>
                                </div>
                            </Link>
                            <br /><br />
                            <a href="https://www.canva.com/design/DAGCjRnTw14/oFG6jr1ZHfhRf7S_UQXOMQ/edit?utm_content=DAGCjRnTw14&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" rel='Contact'>
                                <div className='ContactDiv'>
                                    <img src={Conatact} alt='Contact'/>
                                    <span>Contact</span>
                                </div>
                            </a>
                            <br/><br />
                            <a href="https://github.com/AhYoungJo/Weather-Forecast-Weabsite" rel='GitHub'>
                                <div className='GitDiv'>
                                    <img src={GitHub} alt='Git'/>
                                    <span>Git</span>
                                </div>
                            </a>
                        </div>       
                    </div>
                    </Sidebar>
                </div>
            </div>
        </nav>
    );
};

export default Header;