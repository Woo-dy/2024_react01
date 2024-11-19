import React from 'react';

// 이벤트 핸들러는 사용자가 마우스를 클릭하거나 입력상자에서 키보드를 타이핑하는 등 사용자와의
// 상호작용에 따라 실행되는 사용자 정의 함수
// ** 이벤트 핸들러를 추가하기 위해서는 먼저 함수를 정의하고 
//    이를 JSX 태그에 props 형태로 전달한다.
function Event01(props) {
    function handleClick() {
        alert('clicked me!');
    }

    return (
        <div className='listItems'>
            <button onClick={handleClick}>
                click me1
            </button>
            <button onClick={function handleClick2(){alert('clicked me2!')}}>
                click me2
            </button>
            <button onClick={() => {alert('clicked me3!')}}>
                click me3
            </button>
        </div>
    );
}

export default Event01;