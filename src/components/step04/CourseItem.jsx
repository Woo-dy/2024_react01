import React from 'react';

function CourseItem({image, title, description}) {
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
            </article>
        </>
    );
}

export default CourseItem;