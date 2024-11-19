import React from 'react';

// function CourseItem({image, title, description, alt}) {
//     return (
//         const image = "./img/coffee-blue.jpg";
//         const title = "입문자를 위한, HTML&CSS 웹 개발 입문";
//         const description = "웹 개발에 필요한 기본 지식을 배웁니다.";
//         const alt = "강의 이미지";

//         <>
//             <article className="course">
//                 <img className="course__img" src="./img/coffee-blue.jpg" alt=""/>
//                 <div className="course__body">
//                     <div className="course__title">입문자를 위한, HTML&CSS 웹 개발 입문</div>
//                     <div className="course__description">웹 개발에 필요한 기본 지식을 배웁니다.
//                     </div>
//                 </div>
//             </article>

//             <article className="course">
//                 <img className="course__img" src={image} alt={alt} />
//                 <div className="course__body">
//                     <div className="course__title">
//                         {title}
//                     </div>
//                     <div className="course__description">
//                         {description}
//                     </div>
//                 </div>
//             </article>
//         </>
//     );
// }


// function CourseItem(props) {
//     return (
//         <>
//             <article className="course">
//                 <img className="course__img" src={props.image} alt={props.alt} />
//                 <div className="course__body">
//                     <div className="course__title">
//                         {props.title}
//                     </div>
//                     <div className="course__description">
//                         {props.description}
//                     </div>
//                 </div>
//             </article>
//         </>
//     );
// }

function CourseItem({image, title, description, alt}) {
    return (
        <>
            <article className="course">
                <img className="course__img" src={image} alt={alt} />
                <div className="course__body">
                    <div className="course__title">
                        {title}
                    </div>
                    <div className="course__description">
                        {description}
                    </div>
                </div>
            </article>
        </>
    );
}

export default CourseItem;