import React, {useEffect, useState} from 'react';
import cancle from '../Assets/Images/cancle_90.png'
import '../Styles/Header.scss';
import '../Styles/Sidebar.scss';
import {Link } from 'react-router-dom';
import $ from 'jquery';
import { Button } from '../Styles/Styles';
import Home from '../Assets/Images/house_fiiled_90.png';
import MyPage from '../Assets/Images/my_page.png';
import Favorite from '../Assets/Images/interest_90.png';
import Conatact from '../Assets/Images/call_90.png';
import GitHub from '../Assets/Images/github_96.png';


const Header: React.FC = () => {

    useEffect(() => {
        const SideBarOpenButt = $('#SideBarOpenButt');
        const cancleButton = $('#cancleSideBar');
    
        $('#SideBarDiv').hide()
        // cancleButton 클릭 이벤트 핸들러 추가
        cancleButton.on('click', () => {
            $('#SideBarDiv'). hide()
        });

        // SideBarOpenButt 클릭 이벤트 핸들러 추가
        SideBarOpenButt.on('click', () => {
            $('#SideBarDiv').show()
        });
    
        // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
        return () => {
            cancleButton.off('click');
            SideBarOpenButt.off('click');
        };
      }, []); // 빈 배열을 전달하여 컴포넌트가 마운트될 때만 실행

    
    
    return (
        <nav>
            <div className='header'>
                <Link to='/' className='header__logo'>
                    <img src='#' alt="logo" />
                </Link>
                <div className='header__left'>

                    <button type="button" id="SideBarOpenButt">메뉴</button>

                    <div className='BlackDiv' id='SideBarDiv'>
                        <div className='Sidebar'>
                            <div className='Sidebar__top' >
                                <h1>고객님 환영합니다.</h1>
                                <img src={cancle} alt='cancle.icon' className='cancelIcon' id="cancleSideBar"/>
                            </div>
                            <div className='Sidebar__SignButtons'>
                                <Button buttonColor = '#4083E6' 
                                    hoverBgColor = '#f7f7f7'
                                    borderColor = {null}
                                    hoverBorderColor = 'white'
                                    borderSize = {null}
                                    buttonW = {68}
                                    buttonH = {35}
                                    fontColor = 'white'
                                    hoverFontColor = '#032455'
                                    fontSzie = {15}
                                    transSec = {0.4}
                                    radius= {7}>
                                    로그인
                                </Button>
                                <Button buttonColor = '#f7f7f7' 
                                    hoverBgColor = '#4083E6'
                                    borderColor = '#4083E6'
                                    hoverBorderColor = 'transparent'
                                    borderSize = {2.3}
                                    buttonW = {81}
                                    buttonH = {35}
                                    fontColor = '#032455'
                                    hoverFontColor = '#f7f7f7'
                                    fontSzie = {15}
                                    transSec = {0.4}
                                    radius= {7}>
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
                            <Link to='/'>
                                <div className='ContactDiv'>
                                    <img src={Conatact} alt='Contact'/>
                                    <span>Contact</span>
                                </div>
                            </Link>
                            <br/><br />
                            <Link to='/'>
                                <div className='GitDiv'>
                                    <img src={GitHub} alt='Git'/>
                                    <span>Git</span>
                                </div>
                            </Link>
                        </div>       
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;