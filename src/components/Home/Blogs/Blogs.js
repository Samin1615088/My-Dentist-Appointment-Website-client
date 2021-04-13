import React from 'react';
import Blog from '../Blog/Blog';
import profile1 from './../../../images/profile1.png';
import profile2 from './../../../images/profile2.png';
import profile3 from './../../../images/profile3.png';

const blogsData = [
    {
        key: '1',
        title: 'Check at least a doctor in a year for your teeth',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        author: 'Dr. Cudi',
        authorImg: profile1,
        date: '23 April 2019'
    },
    {
        key: '2',
        title: 'Two time brush in a day can keep you healthy',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        author: 'Dr. Sinthia',
        authorImg: profile2,
        date: '23 April 2019'
    }
]

const Blogs = () => {


    return (
        <section className="container text-center d-flex flex-column justify-content-center vh-100" style={{ marginTop: "100px" }}>
            <div className="" style={{ marginBottom: "150px" }}>
                <h5 className="fw-bold mt-5 mb-4 fs-3" style={{ color: '#1CC7C1' }}>OUR BLOG</h5>
                <h1 className="fw-bold mb-3 mb-lg-5 display-3" style={{ color: '#3a4256' }}>From Our Blog News</h1>
            </div>

            {/* test code */}
            <div className="row mt-5">
                {/* single card */}
                <div className="col-sm-12 col-md-3 offset-md-1">
                    <div className="card h-100 text-start">
                        <div className="card-body ">
                            <div className="container row align-items-center mt-5">
                                <div className="col-4">
                                    <img src={profile2} alt="" srcset="" className="img-fluid" />
                                </div>
                                <div className="col-8">
                                    <span className="card-text text-uppercase fw-bold">Dr. Cudi</span>
                                    <br />
                                    <span className="card-text text-muted">23 April 2019</span>
                                </div>
                            </div>

                            <div className="my-5 ps-2">
                                <h5 className="card-title fw-bold">2 times of brush in a day can Keep you healthy</h5>
                                <p className="text-muted">It is a long established fact that by the readable content of a lot layout. The point </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* single card */}
                {/* single card */}
                {
                    blogsData.map(blogData => <Blog blogData={blogData} key={blogData.key} />)
                }
                {/* single card */}
            </div>

        </section>
    );
};

export default Blogs;