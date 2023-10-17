import { Box, Typography } from '@mui/material';
import React from 'react'
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import YouTubeIcon from '@material-ui/icons/YouTube';
import "../../styles/FooterStyles.css";
import FastfoodIcon from '@material-ui/icons/Fastfood';


const Footer = () => {
    return (
        <>
            <footer class="footer-section">
                <div class='footer-left' >
                    <div class="footer-cta pt-5 pb-5">
                        <div class="row">
                            <div class="col-xl-4 col-md-4 mb-30">
                                <div class="single-cta">
                                    <i class="fas fa-map-marker-alt"></i>
                                    <div class="cta-text">
                                        <h4>Find us</h4>
                                        <span>1010 Avenue, sw 54321, Burhanpur</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4 col-md-4 mb-30">
                                <div class="single-cta">
                                    <i class="fas fa-phone"></i>
                                    <div class="cta-text">
                                        <h4>Call us</h4>
                                        <span>7723030617</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4 col-md-4 mb-30">
                                <div class="single-cta">
                                    <i class="far fa-envelope-open"></i>
                                    <div class="cta-text">
                                        <h4>Mail us</h4>
                                        <span>pritikapreet89@gmail.com</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="footer-content pt-5 pb-5">
                        <div class="row">
                            <div class="col-xl-4 col-lg-4 mb-50">
                                <div class="footer-widget">
                                    <div class="footer-logo">
                                        <Typography color={'#ff5e14'} variant='h4' component="div" sx={{ flexGrow: 1 }}>

                                            <FastfoodIcon /> GuruKrapa

                                        </Typography>
                                    </div>
                                    <div class="footer-text">
                                        <p>Welcome GuruKrapa Resturant Food is Burhanpur premiere Indian resturant.
                                            They specialize in distinct flavors and fresh ingredients at affordable prices.
                                            For some of the best food that Burhanpur, OR has to offer, give Welcome GuruKrapa
                                            FOod atry today!
                                        </p>
                                    </div>
                                    <div class="footer-social-icon">
                                        <span>Follow us</span>
                                        <a href="#"><InstagramIcon /></a>
                                        <a href="#"><YouTubeIcon /></a>
                                        <a href="#"><TwitterIcon /></a>
                                        <a href='#'><GitHubIcon /></a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
                                <div class="footer-widget">
                                    <div class="footer-widget-heading">
                                        <h3>Useful Links</h3>
                                    </div>
                                    <ul>
                                        <li><a href="/">Home</a></li>
                                        <li><a href="/about">about</a></li>
                                        <li><a href="/menu">Menu</a></li>
                                        <li><a href="/gallery">Gallery</a></li>
                                        <li><a href="/contact">Contact</a></li>

                                    </ul>
                                </div>
                            </div>
                            <div class="col-xl-4 col-lg-4 col-md-6 mb-50">
                                <div class="footer-widget">
                                    <div class="footer-widget-heading">
                                        <h3>Opening Hours</h3>
                                    </div>
                                    <div class="footer-text mb-25">
                                        <p>Monday : 11am - 9pm</p>
                                        <p>Tuesday : 11am - 9pm</p>
                                        <p>Wednesday : 1pm - 8pm</p>
                                        <p>Thursday : 11am - 9pm</p>
                                        <p>Friday : 11am - 9pm</p>
                                        <p>Saturday : 12am - 5pm</p>
                                        <p>Sunday : Closed</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="copyright-area">
                    <div class="container">
                        <div class="row">
                            <div class="col-xl-6 col-lg-6 text-center text-lg-left">
                                <div class="copyright-text">
                                    <p>Copyright &copy; 2018, All Right Reserved by Welcome Guru Krapa Resturnar</p>
                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                                <div class="footer-menu">
                                    <ul>
                                        <li><a href="#">Home</a></li>
                                        <li><a href="#">Terms</a></li>
                                        <li><a href="#">Privacy</a></li>
                                        <li><a href="#">Policy</a></li>
                                        <li><a href="#">Contact</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer