import React from 'react';
import '../styles/contact.css';
import Form from 'react-bootstrap/Form'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Button from 'react-bootstrap/Button';
import LI from '../pictures/LI-In-Bug.png'
import GH from '../pictures/GitHub-Mark-120px-plus.png'
import EM from '../pictures/email.png'


function Contact() {

  return (
    <div className="projects">
      <h1 className='contact-header'>Contact</h1>
      
    <section id="contact-me" class="contact">
      <div class="contact-background">
        <div class="contact-info">
          <div className="icon-div">
            <span  className="icon-gap">
            <OverlayTrigger overlay={<Tooltip>Click here to visit Victoria's LinkedIn page.</Tooltip>}>
              <a href="https://www.linkedin.com/in/victoria-rice-360/" target="_blank">
                <img className="icons" alt="LinkedIn link" src={LI} />
              </a>
             </OverlayTrigger>
            </span>

            <span  className="icon-gap">
            <OverlayTrigger overlay={<Tooltip>Click here to visit Victoria's GitHub page.</Tooltip>}>
              <a href="https://github.com/vtori37" target="_blank">
                <img className="icons" alt="GitHub link" src={GH} />
              </a>
             </OverlayTrigger>
            </span>

            <span  className="icon-gap">
              <OverlayTrigger overlay={<Tooltip>vrice360@gmail.com</Tooltip>}>
                <img className="icons-email" alt="Email Address" src={EM} />
              </OverlayTrigger>            
            </span>


          </div>
        </div>
      </div>
    </section>

   

    <Form className="contactForm">
    <h4 className='line'> Feel free to contact me!</h4>
    <hr></hr>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Full Name:</Form.Label>
       <Form.Control type="Name" placeholder="Enter your full name..." />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email Address:</Form.Label>
        <Form.Control type="email" placeholder="Enter email..." />
      </Form.Group>
      
      <Form.Group>
          <Form.Label htmlFor="message">Message:</Form.Label>
          <Form.Control type="message" placeholder="Please write a short message here..." />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      
      </Form.Group>
      <OverlayTrigger overlay={<Tooltip>This form is currently disabled.</Tooltip>}>
        <span className="d-inline-block">
          <Button disabled style={{ pointerEvents: 'none' }}>
            Disabled button
          </Button>
        </span>
    </OverlayTrigger>
    </Form>

    </div>
  )

}
export default Contact;