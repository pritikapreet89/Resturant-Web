import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box, Card, Typography } from '@mui/material'
import { Link } from 'react-router-dom';
import "../styles/aboutStyles.css";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Button from "@material-ui/core/Button";
import { Carousel } from 'react-responsive-carousel';
import First from '../images/first.jpeg';
import Second from '../images/second.jpeg';
import Thired from '../images/thired.jpeg';
import About1 from '../images/about.jpeg';
import Gallery from "../images/gallery.jpeg";



const About = () => {

  return (
    <Layout>
      <div className='about'>

        <div className='heading'>
          <h3>Welcome <span>About Us</span> </h3>
        </div>


        <div className='text'>
          <div className='text-1'><h3>Welcome to Fresh&Food&Cafe</h3> <br />
            <p>Experince our unique culinary journey featuring Ilalian-inspired cuisine. our very own cheese and
              bakery. and an eco-friendly approach with fresh vegetable and greens. Our returant boasts spacious
              halls adorned with expansive panoramic windows and open terraces. </p>
            <p> Immerse yourself in the world of our auther's cuisine, expertly infused with the flavors of
              Italy. Our focus lies on crafting original dishes that cater to the discerning palate.
              reflecting the sunny essence of Italy through the culinary talent, experience, and skill of our chef
            </p>
            <p>In addition to aromatic freshly baked goods. we prepare homemade pasta directly in our resturant. Our
              commitment to eco-friendliness extends to our vegetable and herb garden, where we grow the freshest
              produce for our delectable salads. snacks, soups, and side dishes. </p>

          </div>
          <div className='text-1'>
            <div id='aboutUs' className='carousel-wrapper'>
              <Carousel infiniteLoop useKeyboardArrows autoPlay>
                <div>
                  <div className='img'>
                    <img variant='top' src={First} />
                    <div className='center'>
                      <div><h3>ABOUT US</h3></div>
                      <div><p>Welcome Indian Resturant is the top Indian Resturant at the Burhanpur. We
                        offer the authentic Indian Food at low prices and delicious teste. Visit us today!</p></div>
                    </div>
                  </div>
                </div>
                <div>

                  <div className='img'>
                    <img variant='top' src={Second} />
                    <div className='center'>
                      <div><h3>TAKE AWAY MENU</h3></div>
                      <div><p>Have a look at the exciting take away menu at the Welcome Indian Resturant, we Havethe list of hot
                        meals that you have always loved. Place your order now!</p></div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className='img'>
                    <img variant='top' src={Thired} />
                    <div className='center'>
                      <div><h3>SPECIAL OFFERS</h3></div>
                      <div>Take the amazing 12% OFF on All Takeaway Orders. Check out our webside and
                        explore here special deals & offer.</div>
                    </div>
                  </div>
                </div>
              </Carousel>
            </div>
          </div>
        </div>



        <div className='hero-image' style={{
          backgroundImage: `url(${Gallery})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }}>
          <div class="hero-text">
            <h2>#WelcomeIndian<br /> ResturantMoment</h2>
            <p>Enjoy your stay at Welcome Indian Resturant? Share your moments with us.
            </p>
            <Link to='/gallery'><button className='button'>GO TO GALLERY</button></Link>
          </div>
        </div>







      </div>
    </Layout>
  )
}
export default About;



