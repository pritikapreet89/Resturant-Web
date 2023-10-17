import React, { useRef, useState } from 'react'
import Layout from '../components/Layout/Layout'
import { Box, Typography } from '@mui/material'
import "bootstrap/dist/css/bootstrap.min.css";
//import AddLocationIcon from '@material-ui/icons/AddLocation';
import "../styles/ContactStyles.css";
import Card1 from "../images/z.jpeg";
import Card2 from "../images/y.jpeg";
import { CheckBoxOutlineBlankSharp, Message } from '@material-ui/icons';
import Location from '../images/location.jpeg';
import Call from '../images/call.jpeg';
import Email from '../images/email.jpeg';
import emailjs from '@emailjs/browser';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import YouTubeIcon from '@material-ui/icons/YouTube';


const Contact = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // YOur EmailJS service ID, template ID, and Public Key
    const serviceId = 'service_ozgx2fs';
    const templateId = 'template_bufo35n';
    const publicKey = 'viXKGj_r3ntnrElxH';

    //Create a new object that contains dynamic template params
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Pritika Bnahidye",
      message: message,
    };
    //Send the email using EmailJs
    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email send successfully", response);
        setName("");
        setEmail("");
        setMessage("")
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      })

  }

  return (
    <Layout>
      <div className='container-1'>

        <div className='heading'>
          <h3>Welcome <span>Contact</span> </h3>
        </div>

        <div class="row">
          <div class="col-sm-6 mb-3 mb-sm-0">
            <div class="card" style={{ backgroundImage: `url(${Card1})` }}>
              <div class="card-body">
                <h5 class="card-title">Contact Info</h5>
                <p class="card-text">
                  <div className='main'>
                    <div className='img'><img src={Location} className='location' alt='logo' /></div>
                    <div className='word'><li>Addresss</li> <li>1010 Avenue, sw 54321, Burhanpur</li></div>
                  </div>
                  <div className='main'>
                    <div className='img'><img src={Email} className='location' alt='logo' /></div>
                    <div className='word'><li>Email</li> <li>pritikapreet89@gmail.com</li></div>
                  </div>
                  <div className='main'>
                    <div className='img'><img src={Call} className='location' alt='logo' /></div>
                    <div className='word'><li>Call Us</li> <li>7723030617</li></div>
                  </div>
                </p>
              </div>

            </div>
          </div>
          <div class="col-sm-6">

            <div class="card" style={{ backgroundImage: `url(${Card2})` }}>
              <div class="card-body">
                <h5 class="card-title">Store Hours</h5>
                <p class="card-text">
                  <p>Monday : 11am - 9pm</p>
                  <p>Tuesday : 11am - 9pm</p>
                  <p>Wednesday : 1pm - 8pm</p>
                  <p>Thursday : 11am - 9pm</p>
                  <p>Friday : 11am - 9pm</p>
                  <p>Saturday : 12am - 5pm</p>
                  <p>Sunday : Closed</p>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>






      <div className='container-contact' >
        <div><h2 class='heading-h3'>Send a Message</h2></div>
        <div class="container">

          <span class="big-circle"></span>
          <img src="img/shape.png" class="square" alt="" />
          <div class="form">
            <div class="contact-info">
              <h3 class="title">Contact Details:</h3>
              <p class="text">
                Are you a food lover? If your answer is yes, then in GuruKrapa resturant for you. We
                server foods for reasonable prices. It's awesome, we know
              </p>

              <div class="info">
                <div class="information">
                  <img src="img/phone.png" class="icon" alt="" />
                  <p>1010 Avenue, sw 54321, Burhanpur</p>
                </div>
                <div class="information">
                  <img src="img/email.png" class="icon" alt="" />
                  <p>pritikapreet89@gmail.com</p>
                </div>
                <div class="information">
                  <img src="img/phone.png" class="icon" alt="" />
                  <p>7723030617</p>
                </div>
              </div>

              <div class="social-media">
                <p>Connect with us :</p>
                <div class="social-icons">
                  <a href="#">
                    <InstagramIcon /><i class="fab fa-twitter"></i>
                  </a>
                  <a href="#">
                    <YouTubeIcon /><i class="fab fa-twitter"></i>
                  </a>
                  <a href="#">
                    <TwitterIcon /><i class="fab fa-instagram"></i>
                  </a>
                  <a href="#">
                    <GitHubIcon /> <i class="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>



            <div class="contact-form">
              <span class="circle one"></span>
              <span class="circle two"></span>

              <form onSubmit={handleSubmit}>
                <h3 class="title">Contact Us:</h3>
                <div class="input-container">
                  <input type="text" name="from_name" class="input" placeholder="Name"
                    onChange={(e) => setName(e.target.value)} required />
                  <span>Username</span>
                </div>
                <div class="input-container">
                  <input type="email" name="from_email" class="input" placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)} required />
                  <span>Email</span>
                </div>

                <div class="input-container textarea">
                  <textarea name="message" class="input"
                    onChange={(e) => setMessage(e.target.value)} placeholder="Order now message"></textarea>
                  <span>Message</span>
                </div>
                <div class='button'><input type='submit' onClick={() => alert("Message successfully send")} value='Send' class='btn' /></div>



              </form>

            </div>
          </div>
        </div>

        <script src="app.js"></script>
      </div>




    </Layout>


  )
}




export default Contact;


/***********
 * <div class="input-container">
                  <input type="number" name="from_name" class="input" placeholder="Phone.no" />
                  <span>Phone</span>
                </div> 
 * ******* */