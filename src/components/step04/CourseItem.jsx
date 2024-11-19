import React from 'react';

function HeartIconBtn({ chk = false }) {
    if (chk) {
        return(
            <button className='btn'>
                <img className='btn_img' src='./img/heart-fill-icon.svg' alt='heart-fill-icon' />
            </button>
        )
    }

    return(
        <button className='btn'>
            <img className='btn_img' src='./img/heart-icon.svg' alt='heart-icon' />
        </button>
    )
}

function CourseItem({image, title, description, isFavorite}) {
    return (
        <>
            <article className="course">
                <img className="course__img" src={image} />
                <div className="course__body">
                    <div className="course__title">
                        {title}
                    </div>
                    <div className="course__description">
                        {description}
                    </div>
                </div>
                <div className='course_icons'>
                    <HeartIconBtn chk={isFavorite} />
                </div>
            </article>
        </>
    );
}

export default CourseItem;