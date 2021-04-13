import React from 'react';
import Blog from '../Blog/Blog';
import profile1 from './../../../images/profile1.png';
import profile2 from './../../../images/profile2.png';
import './Blogs.css';

//fontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'

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
                    <div className="card h-100 text-start blog-container">

                        {/* test code */}
                        <div className="card-body ">
                            <div className="container row align-items-center mt-5">
                                <div className="col-12">
                                    <span className="card-text text-uppercase fw-bold">Rashed Kabir</span>
                                    <br />
                                    <span className="card-text">22 Aug 2018</span>
                                </div>
                            </div>
                            <div className="mt-5 ps-1">
                                <h5 className="card-title">Check at least a doctor in a  year for your teeth</h5>
                            </div>
                            <FontAwesomeIcon size="4x" icon={faLongArrowAltRight} style={{ margin: "20px" }} />
                        </div>
                        {/* test code */}

                    </div>
                </div>
                {/* single card */}
                {/* second and third card */}
                {
                    blogsData.map(blogData => <Blog blogData={blogData} key={blogData.key} />)
                }
                {/* second and third card */}
            </div>

        </section >
    );
};

export default Blogs;