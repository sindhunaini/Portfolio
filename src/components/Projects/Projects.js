import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import eventimg from "../../Assets/bg_img.jpg";
import dining from "../../Assets/dining.jpeg";
import virtual from "../../Assets/virtual.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Projects I've worked on
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dining}
              title="Dining Recommendation Website"
              description="Implemented a user-friendly interface and dynamic web application with a grid layout for restaurant listings, complete with user profiles, order history, and secure payment gateway integration leveraging AWS services including S3, API Gateway, Lambda, and DynamoDB. Focused on delivering an engaging, responsive UX with high performance and scalability and Integrated AWS Lex to create a responsive chatbot, offering personalized restaurant suggestions based on Yelp data."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eventimg}
              title="Event Factory"
              description={<>
             The application, developed using React.js for the front end and Flask for the back end, serves as a comprehensive platform for venue booking and event organizing. It leverages the Restful architecture, ensuring smooth communication between client and server for efficient data handling and user interactions. Users can easily browse, select, and book venues suitable for various events, from corporate meetings to social gatherings.<br/>Collaborated with Hemeshwar Konduru
             </>}
              ghLink="https://github.com/hemeshwarkonduru/eventfactory-backend"
              demoLink="https://eventfactory.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={virtual}
              title="Virtual Assistant"
              description="In my role as a UX Designer on the Virtual Assistant project, I was instrumental in developing a system that intuitively understands user intent through voice and text inputs. My focus was on crafting an interface that efficiently presents relevant information and eases navigation across diverse products and services. I played a key role in integrating a sophisticated Natural Language Processing (NLP) pipeline, enhancing the system's deployment and scalability through Docker integration. My involvement extended to front-end design and development, ensuring a user-centric, seamless experience."         
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
