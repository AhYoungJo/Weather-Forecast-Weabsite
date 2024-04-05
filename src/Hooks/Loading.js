import React from 'react'
import {GridLoader} from 'react-spinners';

// 술사진 로딩 페이지 
const override = {
    span: '20px',
    margin : '0 auto',
    marginTop:'220px',
    textAlign : 'center',
    color : '#fff',
    size : '20'
};

const Loading = ({loading }) =>{
    return (
        <div>
            <GridLoader 
            color = "#fff"
            loading ={loading}
            cssOverride={override}
            size={25}
            speedMultiplier={0.8}
            margin={5}
            />
            <div style = {{
                padding:'20px',
                color:'#fff',
                fontWeight : '700',
            }}>
            <h> 사진을 분석하고 있어요 </h>
            </div>
        </div>
    )
}

export default Loading;