import React from "react";
import { MenuList } from "../Data/data";
import { Link } from 'react-router-dom';
import Layout from "./../components/Layout/Layout";
import Button from "@material-ui/core/Button";
import { Box, Card, CardActionArea, CardContent, CardMedia, CardActions, Typography } from "@mui/material";
import "../styles/MenuStyles.css";
import StarRateIcon from '@material-ui/icons/StarRate';
import Bhatura from '../images/bhatura.jpeg';
import MatherPaneer from '../images/materPanner.jpeg';
import ChannaMasala from '../images/channa.jpeg';
import AluGobi from '../images/alu.jpeg';
import GulabJamun from '../images/gulabjamun.jpeg';
import Kheer from '../images/Kheer.jpeg';
import MalaiKofta from '../images/malaikofta.jpeg';
import Puri from '../images/puri.jpeg';
import Paratha from '../images/paratha.jpeg'
import Kulfi from '../images/kulfi.jpeg'
import Lassi from '../images/lassi.jpeg';
import SoftDrinks from '../images/softdrink.jpeg';

const Menu = () => {
  return (

    <Layout>
      <div className='menu'>

        <div className='heading'>
          <h3>From the <span>Menu</span> </h3>
        </div>
        <div className="menu_P">
          <p>Welcome to the home of best tasting Indian food in Burhanpur. Please check our dishes
            below. We also deliver locally.
          </p>
          <p>Please Inform Our Staff About Your Food Allergies (if ANy), Or Question About Food Ingredients</p>
        </div>
   <br />



 <div class='menu-container'>  
        <div class="container mx-auto mt-4 ">
          <div class="row">
            <div class="col-md-4">
              <div class="card" style={{ width: "18rem" , height:"27rem" }}>
                <img src={Bhatura} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Bhatura</h5>
                  <h6 class="card-subtitle mb-2 text-muted">30$</h6>
                  <p class="card-text">Leavened fine flour bread, deep fried. Baked in a clay oven with mesquite charcoal</p>
                  <Link to='/Contact'><Button className="Button-menu">ORDER NOW</Button></Link>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card" style={{ width: "18rem", height:"27rem" }}>
                <img src={MatherPaneer} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Matter Paneer</h5>
                  <h6 class="card-subtitle mb-2 text-muted">30$</h6>
                  <p class="card-text">Green peas with homemade cheese in mild gravy.</p>
                  <Link to='/Contact'><Button className="Button-menu">ORDER NOW</Button></Link>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card" style={{ width: "18rem", height:"27rem" }}>
                <img src={ChannaMasala} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Channa Masala</h5>
                  <h6 class="card-subtitle mb-2 text-muted">30$</h6>
                  <p class="card-text">Channa masala is a chickpea curry originatings in the India subcontainent.</p>
                  <Link to='/Contact'><Button className="Button-menu">ORDER NOW</Button></Link>
                </div>
              </div>
            </div>

            <div class="col-md-4">
              <div class="card" style={{ width: "18rem", height:"27rem" }}>
                <img src={AluGobi} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">AluGobi</h5>
                  <h6 class="card-subtitle mb-2 text-muted">30$</h6>
                  <p class="card-text">Aloo Gobi is a popular India dish in which potatoes and cauliflower are cooked with onions, tomatoes and spices.</p>
                  <Link to='/Contact'><Button className="Button-menu">ORDER NOW</Button></Link>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card" style={{ width: "18rem", height:"27rem" }}>
                <img src={GulabJamun} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title"> Gulab Jamun</h5>
                  <h6 class="card-subtitle mb-2 text-muted">30$</h6>
                  <p class="card-text">Cream of milk balls in light syrup. </p>
                  <Link to='/Contact'><Button className="Button-menu">ORDER NOW</Button></Link>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card" style={{ width: "18rem", height:"27rem" }}>
                <img src={Kheer} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Kheer</h5>
                  <h6 class="card-subtitle mb-2 text-muted">30$</h6>
                  <p class="card-text">Basmati rice pudding, sprinkled with almonds and pistachio</p>
                  <Link to='/Contact'><Button className="Button-menu">ORDER NOW</Button></Link>
                </div>
              </div>
            </div>

            <div class="col-md-4">
              <div class="card" style={{ width: "18rem", height:"27rem" }}>
                <img src={MalaiKofta} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">MalaiKofta</h5>
                  <h6 class="card-subtitle mb-2 text-muted">30$</h6>
                  <p class="card-text">Homemade mixed vegetables with cheese</p>
                  <Link to='/Contact'><Button className="Button-menu">ORDER NOW</Button></Link>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card" style={{ width: "18rem", height:"27rem" }}>
                <img src={Puri} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Puri</h5>
                  <h6 class="card-subtitle mb-2 text-muted">30$</h6>
                  <p class="card-text">Whole-wheat flour, puffed bread, deep fried. Baked in a clay oven with 
                  mesquite charcoal.</p>
                  <Link to='/Contact'><Button className="Button-menu">ORDER NOW</Button></Link>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card" style={{ width: "18rem", height:"27rem" }}>
                <img src={Paratha} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Paratha</h5>
                  <h6 class="card-subtitle mb-2 text-muted">30$</h6>
                  <p class="card-text">Paratha is an India flatbread that is a staple in many India homes served for breakfast.</p>
                  <Link to='/Contact'><Button className="Button-menu">ORDER NOW</Button></Link>
                </div>
              </div>
            </div>

            <div class="col-md-4">
              <div class="card" style={{ width: "18rem", height:"27rem" }}>
                <img src={Kulfi} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Kulfi</h5>
                  <h6 class="card-subtitle mb-2 text-muted">30$</h6>
                  <p class="card-text">Homemade special India-style ice cream with pistachio and saffron.</p>
                  <Link to='/Contact'><Button className="Button-menu">ORDER NOW</Button></Link>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card" style={{ width: "18rem", height:"27rem" }}>
                <img src={Lassi} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Lassi</h5>
                  <h6 class="card-subtitle mb-2 text-muted">30$</h6>
                  <p class="card-text">Lassi is an India yogurt-based beverage with a smoothie-like consistency.</p>
                  <Link to='/Contact'><Button className="Button-menu">ORDER NOW</Button></Link>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card" style={{ width: "18rem", height:"27rem" }}>
                <img src={SoftDrinks} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">SoftDrinks</h5>
                  <h6 class="card-subtitle mb-2 text-muted">30$</h6>
                  <p class="card-text">A soft drink is any water-based flavored drink, usually but not neccessary carbonated.</p>
                  <Link to='/Contact'><Button className="Button-menu">ORDER NOW</Button></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>






      </div>








    </Layout>
  );
};

export default Menu;