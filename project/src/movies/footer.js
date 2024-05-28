import React from "react";
import "./footer.css"

const Footer = () => {
    return (
        <>
        <footer className="footer-container">
            <div className="footer-contents">
                <div className="footer-div">
                    <div className="footer-col1">
                        <h4 className="col1-h4">Subscribe to our Newsletter</h4>
                        <form className="col1-form">
                            <input className="col1-input" type="email" placeholder="Enter your email"/>
                            <button className="col1-btn" type="submit">Subscribe</button>
                        </form>
                    </div>
                    <div className="footer-col2">
                        <h4 className="col2-h4">Quick Links</h4>
                        <ul className="col2-ul">
                            <li><a className="col2-a" href="/movies">Movies</a></li>
                            <li><a className="col2-a" href="/showtimes">Showtimes</a></li>
                            <li><a className="col2-a" href="/theaters">Theaters</a></li>
                        </ul>
                    </div>
                    <div className="footer-col3">
                        <h4 className="col3-h4">Get in Touch</h4>
                        <p className="col3-p">123 Movie St, Film City, CA 12345</p>
                        <p className="col3-p">Email: support@movieticketbooking.com</p>
                        <p className="col3-p">Phone: (123) 456-7890</p>
                    </div>
                </div>
            </div>
            <hr></hr>
            <div className="footer-last">
                <p>&copy; 2024 MovieTicketBooking. All rights reserved.</p>
            </div>
        </footer>
        </>
    );
};

export default Footer;
