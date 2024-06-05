import React from "react";
import Navbar from "./navbar";
import { Row, Col, Container } from "react-bootstrap";
import Footer from "./footer";


export default function About(){
    return(
        <>
            <div className="about-bg">
                <div className="about-contents-div">
                    <Container  style={{paddingBottom:"8%"}}>
                        <Row style={{height:"100%", paddingTop:"2%"}}>
                            <Col  >
                                <h2 className="about-h2 text-light">Our Mission</h2>
                                <p className="about-p text-light mx-5">Our mission at CiniCraze is to revolutionize the movie ticket booking experience by providing a seamless, convenient, and user-friendly platform that connects movie enthusiasts with their favorite films. We strive to enhance the movie-going experience for our customers through innovation and superior customer service.</p>
                            </Col>
                            <Col >
                                <div className="about-bg1"></div>
                            </Col>
                        </Row>
                        <Row style={{height:"100%", paddingTop:"5%"}}>
                            <Col md={6}>
                                <div className="about-bg2"></div>
                            </Col>
                            <Col md={6}>
                                <h2 className="about-h2 text-light">Meet the Team</h2>
                                <p className="about-p text-light mx-5"> - Mr.XXX (Founder & CEO): With a passion for cinema and technology, XXX leads our team in bringing the best movie ticket booking service to our users.<br></br>
                                                                        - Mr.YYY (Head of Customer Relations): YYY ensures our customers receive top-notch support and assistance with their ticket booking inquiries.</p>
                            </Col>
                        </Row>
                        <Row style={{height:"100%", paddingTop:"5%"}}>
                            <Col md={6}>
                                <h2 className="about-h2 text-light">Company History</h2>
                                <p className="about-p text-light mx-5"> CiniCraze was founded in 20XX with the aim of simplifying the process of booking movie tickets online. Over the years, we have grown to become a trusted platform for movie enthusiasts, reaching thousands of users nationwide.</p>
                            </Col>
                            <Col md={6}>
                                <div className="about-bg3"></div>
                            </Col>
                        </Row>
                        <Row style={{height:"100%", paddingTop:"5%"}}>
                            <Col md={6}>
                                <div className="about-bg4"></div>
                            </Col>
                            <Col md={6}>
                                <h2 className="about-h2 text-light">Partnerships and Collaborations</h2>
                                <p className="about-p text-light mx-5"> CiniCraze partners with leading cinema chains and movie studios to offer exclusive deals and early access to movie tickets. Our collaborations enhance the movie-watching experience for our customers, providing them with a wide range of movie options.</p>
                            </Col>
                        </Row>
                        <Row style={{height:"100%",paddingTop:"5%"}}>
                            <Col md={6}>
                                <h2 className="about-h2 text-light">Customer Testimonials</h2>
                                <p className="about-p text-light mx-5"> - CiniCraze made booking movie tickets so easy! The platform is intuitive and quick to use." - Sarah C.<br></br>
                                                                        - I love the variety of movies available on CiniCraze. The customer support team was also very helpful when I had an issue with my booking." - Mike P.</p>
                            </Col>
                            <Col md={6}>
                                <div className="about-bg5"></div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
            <Footer/>
        </>
    )
}