import React from 'react';
import CourseItem from "./CourseItem";


function CourseListCard(props) {
    return (
        <div className="card">
            <div className="card__header">강의 목록</div>
            <div className="card__body">
                <div className="courses">
                    <CourseItem 
                    image="./img/green_cat.png" 
                    title="입문자를 위한, HTML&CSS 웹 개발 입문" 
                    description="웹 개발에 필요한 HTML&CSS 기본 지식을 배웁니다." alt="HTML&CSS 강의 이미지" />

                    <CourseItem 
                    image="./img/green_dog.jpg" 
                    title="입문자를 위한, Javascript 웹 개발 입문" 
                    description="웹 개발에 필요한 Javascript 기본 지식을 배웁니다." alt="Javascript 강의 이미지" />

                    <CourseItem 
                    image="./img/orange_heart.png" 
                    title="입문자를 위한, React 웹 개발 입문" 
                    description="웹 개발에 필요한 React 기본 지식을 배웁니다." alt="React 강의 이미지" />
                </div>
            </div>
        </div>
    );
}

export default CourseListCard;