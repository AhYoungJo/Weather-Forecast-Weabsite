import React from 'react';
import '../Styles/Sidebar.scss';
import { Link } from 'react-router-dom';

const Sidebar: React.FC= () => {
    return (
            <div className='BlackDiv'>
                <div className='Sidebar'>
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
    );
};

export default Sidebar;