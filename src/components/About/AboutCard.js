import React from "react";
import Card from "react-bootstrap/Card";


function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "left" }}>
            Hi, I am <span className="orange">Siva Sindhu Naini</span>, currently in my final Semester of Master's program in
            Data Science (MSDS) at <span className="orange">Indiana Univeristy Bloomington.</span>
            <br />
            <br />
            Before this, I spent four years as a Software Developer, primarily focusing on Front-End Development. 
            During this time, I honed my skills in HTML, CSS, Angular, React.js, Node.js, Flask, and SQL. 
            My portfolio includes the development of engaging websites such as Dining Recommendations, Astroworld, and a Virtual Assistant.
            <br />
            <br />
            Outside of my professional and academic pursuits, I'm an avid fan of watching movies and series, and I thoroughly enjoy traveling.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
