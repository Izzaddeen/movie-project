// import React, { useEffect, useState } from "react";
// import { Col, Container, Row } from "react-bootstrap"; 
// import { Link } from "react-router-dom";
// import Card from "antd/es/card/Card";
// import './movies.css';
// import Navbar from "./navbar";
// import Viewbutton from "./viewbutton";
// import Cart from "./cart"

// export default function Movies({handleClick }){

//     const [ticket, setTicket] = useState([]);
    

//     useEffect(() => {
//         const url = 'https://backend-crud-one.vercel.app/product';

//         fetch(url)
//             .then(response => response.json())
//             .then(response => setTicket(response));
//     }, []);

//     return(
//         <>{ticket.map(item =>(
//             <div className="box">
//                 <div className="coverImage">
//                     <img src={item.image} alt="" className="movie-picture"></img>
//                 </div>
//                 <div className="content-flex">
//                     <div className="details-row">
//                         <h1>{item.title}</h1>
//                         <div className="rating-flex">
//                             <div className="rate">
//                                 <i className='fas fa-star'></i>
//                                 <i className='fa fa-star'></i>
//                                 <i className='fa fa-star'></i>
//                                 <i className='fa fa-star'></i>
//                                 <i className='fa fa-star-half'></i>
//                             </div>
//                             <label>{item.rating}</label>
//                             <span>GP</span>
//                             <label>{item.time}</label>
//                         </div>
//                         <p>{item.description}</p>
//                         <div className="cast">
//                             <h4><span>Starring {item.starring}</span></h4>
//                             <h4><span>Genres {item.genres}</span></h4>
//                             <h4><span>Tags {item.Tags}</span></h4>
//                         </div>
//                         <button className="primary-btn"><i className='fas fa-play'></i> PLAY NOW
// </button>
//                     </div>
//                 </div>
//             </div>
//         ))}
//         {/* <div className="movie-bg">
//             <Navbar/>
//                 <Row className="m-0">
//                     {ticket.map(item =>(
//                         <Col lg={3} md={6} sm={12} key={item._id} className="p-4">
//                             <div className="card-div">
//                                 <Card className="display-card">
//                                     <div >
//                                         <img  src={item.image} alt="img" className="movie-picture" />
//                                         <div className="card-title">{item.title}</div>
//                                         <div className="card-date">{item.releasedate}</div>
//                                         <Row>
//                                             <Col md={6}><Link to={`/viewbutton/${item._id}`}>
//                                             <div className="view">
//                                                 <button className=" btn btn-dark view-more">VIEW MORE</button>
//                                             </div>
//                                         </Link></Col>
//                                             <Col md={6}>
//                                                 <div className="view">
//                                             <button onClick={() => handleClick(item)} className="btn btn-dark addcart">ADD TO CART</button>
//                                         </div>
//                                         </Col>
//                                         </Row>
                            
//                                     </div>
//                                 </Card>
//                             </div>
//                         </Col>

//                     ))}
//                 </Row>
//         </div> */}
                    
//         </>
//     );
// }






// Movies.js
import React, { useEffect, useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import "./movies.css";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./footer";

const Movies = ({ handleClick }) => {
  const [movies, setMovies] = useState([]);
  const sliderRef = useRef(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch("https://backend-crud-one.vercel.app/product");
        const data = await response.json();
        setMovies(data);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };
    fetchMovies();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const goToNext = () => {
    sliderRef.current.slickNext();
  };

  const goToPrev = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <>
    <div className="movie-full">
    {/* <Navbar/> */}
    <Container className="movies-container">
      <Slider ref={sliderRef} {...settings}>
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <img src={movie.image} alt={movie.title} className="movie-poster" />
            <div className="movie-overlay">
              <h3 className="movie-title">{movie.title}</h3>
              <p className="movie-year">Released: {movie.releasedate}</p>
              <p className="movie-director">Director: {movie.director}</p>
              <div className="movies-buttons-row">
                <button 
                  type="button"
                  id="add-to-cart-btn"
                  className="btn" 
                  onClick={() => handleClick(movie)}>
                  ADD TO CART
                </button>
                <Link to={`/viewbutton/${movie._id}`}>
                <button  type="button"id="view-details-btn"className="btn">VIEW DETAILS</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      {/* <button className="prev-button" onClick={goToPrev}>Previous</button>
      <button className="next-button" onClick={goToNext}>Next</button> */}
    </Container>
    </div>
    <Footer/>
    </>
  );
};

export default Movies;









