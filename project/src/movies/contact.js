
import React, { useState } from 'react';
import Navbar from "./navbar";
import {Form, Textarea, InputGroup, Col, Container, Row, } from "react-bootstrap";
import Slideshow from "./contactslide";
import Footer from "./footer";



export default function Contact(){
    // const [formData, setFormData] = useState({
    //     name: '',
    //     email: '',
    //     subject: '',
    //     message: '',
    //   });
    
    //   const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData({
    //       ...formData,
    //       [name]: value,
    //     });
    //   };
    
    //   const handleSubmit = (e) => {
    //     e.preventDefault();
    //     // Handle form submission logic here
    //     console.log('Form data submitted:', formData);
    //   };
  return (
    <div className="contact-body">

            <Col md={12}  id="bunny-div">
                <div className="bunny m-0">
                    <div className="scroll-div">
                        <h2 className="scroll-h2">FOR ANY QUERIES </h2>
                        <h2 className="scroll-h2">SCROLL DOWN</h2>
                    </div>
                </div>
            </Col>
        <Container style={{height:"100%", marginTop:"5%"}}>
            <Row className="m-0">
                <Col md={6} className="mt-5 mb-0" id="cont-id">
                    {/* <form onSubmit={handleSubmit}> */}
                    {/* <form className="form-contain">
                        <h2 className="con-h2">Contact Us</h2>
                        <input type="text" id="name" placeholder="*Name" name="name" value={formData.name} onChange={handleChange} required/>
                        <input type="email" id="email" placeholder="*Email" name="email" value={formData.email} onChange={handleChange} required />
                        <input type="text" id="subject" placeholder="*Subject" name="subject" value={formData.subject} onChange={handleChange} required />
                        <textarea id="message" placeholder="*Message" name="message" rows="5" value={formData.message} onChange={handleChange} required></textarea>
                        <button className="con-btn" type="submit">Submit</button>

                        <input type="text" id="name" placeholder="*Name" ></input>
                        <input type="text" id="email" placeholder="*Email" ></input>
                        <input type="text" id="subject" placeholder="*Subject" ></input>
                        <textarea id="message" placeholder="*Message" name="message" rows="5"></textarea>
                        <button className="con-btn" type="submit">Submit</button>
                    </form> */}
                    <h2 className="con-h2">ENQUIRY FORM</h2>
                    <InputGroup className="contact-input text-light">
                        <Form.Control type="name" placeholder="*Name"/>
                    </InputGroup>
                    <InputGroup className="contact-input text-light">
                        <Form.Control type="email" placeholder="*Email"/>
                    </InputGroup>
                    <InputGroup className="contact-input text-light">
                        <Form.Control  type="subject" placeholder="*Subject"/>
                    </InputGroup>
                    <InputGroup>
                        <Form.Control className="contact-message"  type="message" placeholder="*Message"/>
                    </InputGroup>
                    <button className="contact-btn">SEND MESSAGE</button>
                </Col>
                <Col md={6} className="mt-5 mb-0">
                    <Slideshow/>
                </Col>
            </Row>
        </Container> 
        <Footer/>        
    </div>
    
  );
};


