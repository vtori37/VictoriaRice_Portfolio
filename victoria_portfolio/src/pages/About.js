import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import profilePic from "../profile/profilePic.png";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import "../styles/about.css";
import Card from 'react-bootstrap/Card';

function About() {
  return (
    <section className="content-body">
     <Row className="about-row">
      <Col>
        <div className="img-box">
          <h2 class="about">Hello! My name is Victoria Rice.</h2>
          <img className="profile-img"  alt="Victoria is smiling." src={profilePic} />
        </div>
      </Col>

      <Col className="about-me">
      <Card border="light" style={{ width: "auto" }}>
        <Card.Body>
          <Card.Title>About Me</Card.Title>
           <Card.Text className="card-text">
          <p>
          I have a desire to learn more about technical design as well as web development. This includes my enrollment in UT-Austin’s Coding Boot Camp, where I am in training to become a full-stack web developer. Currently, I am deepening my understanding of newly acquired skills in HTML, JavaScript, CSS, Node.js, and MySQL. I plan to further broaden my knowledge of web development by learning TypeScript, Java, Python, and C#. In addition, I practice photography and my photo editing skills in Adobe Lightroom and Photoshop in my spare time. 
          </p>
          <p>
          I am a quick learner and creative problem-solver, who is highly organized and takes initiative.  I value the importance of interpersonal skills and am a strong communicator. Using these skills, I serve as a product manager at an e-commerce startup. My experience in this position has inspired me to pursue opportunities where I may leverage my degree in Business Administration in International Business to bridge communication between web development and product management. 
          </p>
          <p>
          I am actively learning and look forward to new career opportunities, so please feel free to contact me if you would like to connect!
          </p>
          </Card.Text>
        </Card.Body>
      </Card>
      </Col>
     </Row>
    </section>
  )
}

export default About;