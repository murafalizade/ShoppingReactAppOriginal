import React from 'react';

const Footer = () => {
    return (
        <footer className="page-footer">
            <div className="footer">
                <div className="foot row">
                    <div className="col-3  capsi">
                        <ul className="m-3">
                            <li className="mb-3">thisf00d.herokuapp.com</li>
                            <li className="mb-3">Famous brends
                            and  food's world</li>
                            <li className="mb-3">+994 xx xxx xx xx</li>
                            <li className="mb-3"><a href="mailto:murafalizade@gmail.com?">murafalizade@gmail.com</a></li>
                        </ul>
                    </div>
                    <div className="col-md-5 col-12 capsi" id="big-footer">
                        <p className="m-4">Categories</p>
                        <ul style={{ position: "relative", left: "-190px", top: "55px" }}>
                            <a className="mb-3" href="/products/burger" >Hamburgers</a>
                            <a className="mb-3" href="/products/pizza" >Pizzas</a>
                            <a className="mb-3" href="/products/sushi" >Sushis</a>
                            <a className="mb-3" href="/products/frie" >Fries</a>
                        </ul>
                        <ul style={{ position: "relative", top: "55px", left: "-220px" }}>
                            <a className="mb-3" href="/products/salad" >Salads</a>
                            <a className="mb-3" href="/products/desert" >Deserts</a>
                            <a className="mb-3" href="/products/souce">Souces</a>
                            <a className="mb-3" href="/products/drink">Drinks</a>
                            <a className="mb-3" href="/products/coffie&tea" >Coffeis and Teas</a>
                        </ul>
                    </div>
                    <div className="col-md-2 col-6  capsi">
                        <p className="m-4">Brends</p>
                        <ul className="m-3">
                            <li className="mb-3"><a href="/products/McDonald's" >McDonald's</a></li>
                            <li className="mb-3"><a href="/products/KFC" >KFC</a></li>
                            <li className="mb-3"><a href="/products/Starbucks" >StarBucks</a></li>
                            <li className="mb-3"><a href="/products/papajohns">PapaJohns</a></li>
                        </ul>
                    </div>
                    <div className="col-md-2 col-6 capsi">
                        <p className="m-4">f00d this</p>
                        <ul className="m-3">
                            <li className="mb-3"><a href="/about" >About</a></li>
                            <li className="mb-3"><a  href="/help">Help</a></li>
                        </ul>
                    </div>
                </div>
                <div className="inline-footer mt-5">
                    <div className="inline-list">
                        <a className="foot-link" href="/faq">Users conditions</a>
                        <a className="foot-link" href="/politics">Security Politicies</a>
                        <a className="foot-link" href="mailto:murafalizade@gmail.com">Send Message</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;