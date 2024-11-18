import React from 'react';
import Book from './Book.jsx';

function Library(props) {
    return (
        <>
            <Book name="처음 만난 리액트" numOfPage="350" />
            <Book name="처음 만난 스프링 부트" numOfPage="550" />
            <Book name="처음 만난 MySQL" numOfPage="250" />
        </>
    );
}

export default Library;