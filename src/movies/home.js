import React from "react";
import { Col, Row, Container} from "react-bootstrap"
import Login from "./login";
import Navbar from "./navbar";
import Footer from "./footer";
import { Link } from "react-router-dom";

export default function Home(){
    return(
        <>
        <div className="home">
            <Container>
                <Row style={{height:"100%"}} className="m-0" id="home-row">
                    <div className="home-topics">
                        <Col md={6} className="pt-0">
                            <div className="home-h1h4">
                            <h1 className="home-h1">Welcomes to CiniCraze</h1>
                            <h4 className="home-h4 px-4">Your ultimate destination for seamless and convenient movie ticket booking. Discover the latest blockbusters, explore showtimes, and effortlessly reserve your seats in just a few clicks. Enjoy the best cinematic experiences with ease!</h4>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="home-col2" style={{padding:"15% 0 0 25%"}}>
                                <h5 className="home-click">Click <svg xmlns="http://www.w3.org/2000/svg" fill="white" style={{width:"20px"}} viewBox="0 0 384 512"><path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg> Here</h5>
                                <Link to={"/movies"}>
                                <button className="home-btn mt-3" >EXPLORE NOW</button>
                                </Link>
                            </div>
                        </Col>
                    </div>
                </Row>
            </Container>
        </div>
        </>
    );
}

