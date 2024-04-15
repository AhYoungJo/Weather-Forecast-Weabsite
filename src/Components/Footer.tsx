import React from 'react';
import '../Styles/Footer.scss'

const Footer = () => {
    return (
        <div className='Footer'>
            <ul>
                <li>Menu</li>
                <li>홈으로</li>
                <li>마이페이지</li>
                <li>관심지역</li>
                <li>Contact</li>
                <li>Git</li>
            </ul>
            <ul>
                <li>Join Us</li>
                <li>로그인</li>
                <li>회원가입</li>
            </ul>
        </div>
    );
};

export default Footer;