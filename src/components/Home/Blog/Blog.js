import React from 'react';

const Blog = (props) => {
    const { title, description, author, authorImg, date } = props.blogData;

    console.log('title', title);
    return (
        <div className="col-sm-12 col-md-3 offset-md-1">
            <div className="card h-100 text-start">
                <div className="card-body ">
                    <div className="container row align-items-center mt-5">
                        <div className="col-4">
                            <img src={authorImg} alt="" srcset="" className="img-fluid" />
                        </div>
                        <div className="col-8">
                            <span className="card-text text-uppercase fw-bold">{author}</span>
                            <br />
                            <span className="card-text text-muted">{date}</span>
                        </div>
                    </div>

                    <div className="my-5 ps-2">
                        <h5 className="card-title fw-bold">{title}</h5>
                        <p className="text-muted">{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;