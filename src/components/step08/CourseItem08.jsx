import React from 'react';

function HeartIconBtn({ chk = false }) {
    function handleFavorite() {
        chk = !chk;
        console.log(chk? "추가 했습니다." : "제거 했습니다.");
        alert(chk? "추가 했습니다." : "제거 했습니다." );
    }

    return(
        <button className='btn' onClick={handleFavorite}>
            <img className='btn_img' src={chk ? './img/heart-fill-icon.svg' : './img/heart-icon.svg'} alt='이미지' />
        </button>
    );
}

function CourseItem08({image, title, description, isFavorite}) {
    return (
        <>
            <article className="course">
                <img className="course__img" src={image} alt='이미지' />
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

export default CourseItem08;