import React from 'react';
import Item from './Item';

function PackingList(props) {
    return (
        <section className='listItems'>
            <h1>조건부 렌더링</h1>
            <ul>
                <Item 
                    isPacked={true} 
                    name="손흥민"
                />
                <Item 
                    isPacked={false} 
                    name="황희찬"
                />
                <Item 
                    isPacked={true} 
                    name="이강인"
                />
            </ul>
        </section>
    );
}

export default PackingList;