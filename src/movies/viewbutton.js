import React, { useEffect, useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import "./viewbutton.css";

export default function Viewbutton() {
  const [view, setView] = useState({});
  const { _id } = useParams();

  useEffect(() => {
    const url = `https://movie-api-1-grk8.onrender.com/movie/${_id}`;
    
    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        setView(response); 
      })
      .catch((error) => {
        console.error('Error fetching movie data:', error); 
      });
  }, [_id]);


  return (
    <>
    <div className="view-bg">
        <Container className="view-contain">
            <Row style={{height:"100%"}}>
                <Col lg={4}>
                    <div>
                        <img src={view.poster} alt="image" className="viewbut-poster"></img>
                    </div>
                </Col>
                <Col lg={8}>
                    <h1 className="view-title">{view.title}</h1>
                    <p className="view-des">{view.description}</p>
                    <h4 className="view-release"><span className="view-span">Released in</span> {view.releasedate}</h4>
                    <h4 className="view-dtr"><span className="view-span">Directed by</span> {view.director}</h4>
                    <h4 className="view-budget"><span className="view-span">Budget of the Movie:</span> {view.budget}</h4>
                    <div className="view-bt">
                        <button type="button" className="view-button">Booking Now-Rs.{view.ticketprice}</button>
                    </div>
                    
                </Col>
            </Row>
        </Container>
    </div>
    </>
  );
}


