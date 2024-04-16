import React from 'react';
import '../Styles/Footer.scss'

const Footer = () => {
    return (
        <div className='Footer'>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th >Menu</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>홈으로</td>
                            <td>마이페이지</td>
                            <td>관심지역</td>
                            <td>Contact</td>
                            <td>Git</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th ></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>로그인</td>
                            <td>회원가입</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Footer;