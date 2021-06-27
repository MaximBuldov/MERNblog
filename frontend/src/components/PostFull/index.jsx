import React from 'react';

import './PostFull.scss';

const PostFull = ({ text, createdAt, _id, }) => (
    <div key={_id} className="full-post">
        <div className="container">
            <div className="full-post__details">
                <i>Posted on {createdAt}</i>
            </div>
            <p className="full-post__text">{text}</p>
        </div>
    </div>
);

export default PostFull;