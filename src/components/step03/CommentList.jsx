import React from 'react';
import Comment from './Comment';

// 나중에 DB
const comments = [
    {
        name: "손흥민",
        comment: "Back Number : 7",
        image: "https://i.namu.wiki/i/rT-Udt1AE0jqCEOrfcSqNPmSSBnr5rcrisXl5etexYplXNHRrF8R5e8pUeOwege2umqfJ1CDc8Ar4uwDbCvwfxDLRAgSNAouY702Rf9giDiiSOLjSgicEt1DnbX_DHKk8dXWrQI3r61xjtDtHTeAjg.webp"
    },
    {
        name: "이재성",
        comment: "Back Number : 10",
        image: "https://i.namu.wiki/i/LmLk50QvBGMMd2c5l-IjE7NSMJn9ToNY-yFgXqDb9co-Rk1p8M2WfS7kbNXgLp1mIsLNYiHEwde2-IjyBPmw9hgHbpmj2yNeTMR0cd3kM63_VgPmWDOmqih4gm01FTZVDru_0OJdoF71M5krYjufNA.webp"
    },
    {
        name: "황희찬",
        comment: "Back Number : 11",
        image: "https://i.namu.wiki/i/hf0ZbOiAKO_KYIJLcz0axfUTIth5xuKsnU-JpMFevRw9aZYUga8PU3p_wux3Z4E3jlW08Jdcgof33OeCTfMVUzQzSIQZ_f82HPjkbyjxFqlFIyOJClqrGc4UDpU1_HNL6-05WnbiFbBPueVecmdDFA.webp"
    },
    {
        name: "이강인",
        comment: "Back Number : 18",
        image: "https://i.namu.wiki/i/uc4eSTdF0lDDKhEVjFMQrbdVlZHXCEfsv9aWF3s9sBevw6eYMaXOJACNvKpJR3mzhca5Y9ER8JEzMFcfIpfHZuOhpLbyZopfgqQA-JYjgCSXGhpLiJ7cuCJLy2bHtt78fmIlUxDcNHVWYYWSZHDlcw.webp"
    }
];

function CommentList(props) {
    return (
        <div>
            {
                comments.map((k) => {
                    return(
                        <Comment name={k.name} comment={k.comment} image={k.image} />
                    );
                })
            }
        </div>
    );
}

export default CommentList;