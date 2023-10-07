import React from 'react'
import Layout from '../components/Layout/Layout';
import { Box, Typography } from '@mui/material';
import "../styles/GalleryStyles.css";
import { Link } from 'react-router-dom';
import Button from "@material-ui/core/Button";
import p1 from '../images/1_.jpeg';
import p2 from '../images/2_.jpeg';
import p3 from '../images/3_.jpeg';
import p4 from '../images/4_.jpeg';
import p5 from '../images/5_.jpeg';
import p6 from '../images/6_.jpeg';
import p7 from '../images/7_.jpeg';
import p8 from '../images/8_.jpeg';
import p9 from '../images/9_.jpeg';
import p10 from '../images/10_.jpeg';
import p11 from '../images/11_.jpeg';
import p12 from '../images/12.jpeg';
import p13 from '../images/13_.jpeg';
import p14 from '../images/14_.jpeg';
import p15 from '../images/15_.jpeg';
import p16 from '../images/16_.jpeg';
import p17 from '../images/17_.jpeg';
import p18 from '../images/18_.jpeg';
import p19 from '../images/19__.jpeg';
import p20 from '../images/20_.jpeg';
import p21 from '../images/21_.jpeg';

const Gallery = () => {
    return (
        <Layout>
            <div className='gallery'>
                <div className='heading'>
                    <h3>Our <span>Gallery</span> </h3>
                </div>
          
            <div class="box">
                <div class="dream" >
                    <img src={p1} />
                    <img src={p2} />
                    <img src={p3} />
                    <img src={p4} />
                    <img src={p5} />
                    <img src={p6} />
                    <img src={p7} />
                </div>
                <div class="dream">
                    <img src={p8} />
                    <img src={p12} />
                    <img src={p10} />
                    <img src={p11} />
                    <img src={p9} />
                    <img src={p13} />
                    <img src={p14} />
                </div>
                <div class="dream">
                    <img src={p15} />
                    <img src={p16} />
                    <img src={p17} />
                    <img src={p18} />
                    <img src={p19} />
                    <img src={p20} />
                    <img src={p21} />
                </div>
            </div>
            <div>
            <Link to='/contact'><Button className='btn'>GO TO CONTACT</Button></Link>
            </div>
            </div>


        </Layout>
    )

}


export default Gallery;
