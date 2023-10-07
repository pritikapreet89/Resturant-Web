import React from 'react';
import Layout from '../components/Layout/Layout'
import { Link} from 'react-router-dom';
import Banner from "../images/banner.jpeg";
import "../styles/HomeStyles.css";
import videoBg from '../assets/videoBg.mp4';
import Button from "@material-ui/core/Button";
import Gallery from "../images/gallery.jpeg";
import Card1 from "../images/z.jpeg";
import Card2 from "../images/y.jpeg";




const Home = () => {

 
  return (
    <Layout>
      <div className='main-home'>
        <div className='overlay'></div>
        <video src={videoBg} autoPlay loop muted />
        <div className='content-home'>
          <h1>Food webside</h1>
          <p>Best Food In India</p> <br />
          <Link to='/menu'><Button className='btn'>ORDER NOW</Button></Link>
        </div>
      </div>

    
    
      
    
 
     




    </Layout>
  )
}

export default Home