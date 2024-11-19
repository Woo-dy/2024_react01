import React from 'react';

function Count(props) {
    let cnt = 5;

    let increment = () => {
        cnt = cnt + 1;
        console.log("cnt : " + cnt);
    };

    let decrement = () => {
        cnt = cnt - 1;
        console.log("cnt : " + cnt);
    };

    return (
        <div className='listItems boxItems'>
            <button onClick={increment}>+</button> 
            <box className="box_cnt">{cnt}</box>
            <button onClick={decrement}>-</button>
        </div>
    );
}

export default Count;