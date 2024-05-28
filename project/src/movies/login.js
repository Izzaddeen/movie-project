import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';
import { Col, Row, Container, Form, InputGroup, FormControl } from 'react-bootstrap';

const Login = ({ setIsLoggedIn, setUserName }) => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false); 

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    if (isSignUp) {
      handleSignup();
    } else {
      handleLogin();
    }
  };

  const handleSignup = () => {
    if (localStorage.getItem(email)) {
      alert("User already exists!");
      return;
    }

    const userData = { name, email, password };
    localStorage.setItem(email, JSON.stringify(userData));

    setIsLoggedIn(true);
    setUserName(name);
    alert("Signup successful!");
    navigate("/home"); 
  };

  const handleLogin = () => {
    const storedUser = localStorage.getItem(email);
    if (storedUser) {
      const userData = JSON.parse(storedUser);
      if (userData.password === password) {
        setIsLoggedIn(true);
        setUserName(userData.name);
        alert("Login successful!");
        navigate("/home"); 
      } else {
        alert("Invalid password!");
      }
    } else {
      alert("User not found!");
    }
  };

  return (
    <div className='login-signup'>
      {/* <video autoPlay loop muted className="video-background">
        <source src="spiderman.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video> */}
      <Container className='login-full'>
          <Row style={{height:"100%"}}>
            <Col md={4}></Col>
            <Col md={4} className='login-col align-items-center flex-col'>
              <div className="login-form align-items-center">
                <Form>
                  <h2 className='login-head-h2'>{isSignUp ? "Sign Up" : "Sign In"}</h2>
                  {isSignUp && (
                    <div className='losi-group'>
                      <input className='login-input' type='text' placeholder='Username' onChange={(e) => setName(e.target.value)}></input>
                      </div>
                  )}  
                      <div className='losi-group'>
                      <input className='login-input' type='email' placeholder='Email' onChange={(e) => setEmail(e.target.value)}></input>
                      <input className='login-input' type='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)}></input>
                      </div>
                      <div className='losi-div'>
                      <button className='losi-btn' onClick={handleFormSubmit}>{isSignUp ? "Sign up" : "Sign in"}</button>
                      </div>
                      {!isSignUp &&(
                        <p className='FP'><b>Forgot Password</b></p>
                      )}
                      <p className='FP1'>
                        {isSignUp ? (
                          <span className='losi-span'>Already have an account? </span>
                        ) : (
                          <span className='losi-span'>Don't have an account? </span>
                        )}
                          <b style={{cursor:"pointer"}} onClick={() => setIsSignUp(!isSignUp)} className="pointer text-light"> {isSignUp ? "Sign in here" : "Sign up here"}</b> 
                      </p>
                </Form>
              </div>
            </Col>  
            <Col md={4}></Col>
          </Row>
      </Container>
    </div>
  );
};

export default Login;





















// <InputGroup className='login-input'>
                      //   <i className='bx bxs-user'></i>
                      //   <Form.Control className='text-dark' type='text' placeholder='Username' onChange={(e) => setName(e.target.value)}></Form.Control>
                      // </InputGroup>



                      {/* <InputGroup className='login-input'>
                        <i className='bx bx-mail-send'></i>
                        <Form.Control className='text-dark' type='text' placeholder='Username' onChange={(e) => setName(e.target.value)}></Form.Control>
                      </InputGroup> */}




                      {/* <InputGroup className='login-input'>
                        <i className='bx bxs-lock-alt'></i>
                        <Form.Control className='text-dark' type='Password' placeholder='Password' onChange={(e) => setPassword(e.target.value)}></Form.Control>
                      </InputGroup> */}