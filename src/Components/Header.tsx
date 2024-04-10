import React, {useEffect, useState} from 'react';
import cancle from '../Assets/Images/cancle_90.png'
import '../Styles/Header.scss';
import {Link } from 'react-router-dom';
import $ from 'jquery';


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
                                <h1>(고객명이 없으면)고객님 환영합니다.</h1>
                                <img src={cancle} alt='cancle.icon' className='cancelIcon' id="cancleSideBar"/>
                            </div>
                            <div className='Sidebar__SignButtons'>
                                <button>로그인</button>
                                <button>회원가입</button>
                            </div>
                            <div className='Sidebar__Home&MyPage'>
                                <Link to='/'>
                                    <div className='HomeDiv'>
                                        <img src="#" alt='Home'/>
                                        <span>홈으로</span>
                                    </div>
                                </Link>
                                <Link to='/'>
                                    <div className='MyPageDiv'>
                                        <img src="#" alt='MyPage'/>
                                        <span>마이페이지</span>
                                    </div>
                                </Link>
                            </div>
                            <br/> <div className='Sidebar__hrDiv'/> <br />
                            <Link to='/'>
                                <div className='FavoriteDiv'>
                                    <img src='#' alt='Favorite'/>
                                    <span>관심지역</span>
                                </div>
                            </Link>
                            <br />
                            <Link to='/'>
                                <div className='ContactDiv'>
                                    <img src='#' alt='Contact'/>
                                    <span>Contact</span>
                                </div>
                            </Link>
                            <br/>
                            <Link to='/'>
                                <div className='GitDiv'>
                                    <img src='#' alt='Git'/>
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