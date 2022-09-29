import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"https://user-images.githubusercontent.com/72031522/192809888-5daf0490-3904-4c11-ad20-a9edf4dd4592.JPG"}
              isBlog={false}
              title="Full stack BlogApp"
              description="My personal blog app build with MERN stack technology.Have features which allows user to post blogs create account,edit blogs.Has the all the functionalities which full stack app shoud have."
              ghLink="https://github.com/harshjoundal/full_stack_blogapp"
              demoLink="#"              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"https://user-images.githubusercontent.com/72031522/192809246-830bddb2-9ef5-4e14-be3b-6df7a3f1afb1.JPG"}
              isBlog={false}
              title="Tracking Time website clone"
              description="
This is an time tracking website clone . You can put your daily tasks to do and also you can track your tasks by the website. This page as the name suggests has the homepage functionality. This is the landing page, You will find website overview from this page."
              ghLink="https://github.com/harshjoundal/TimeTracker"
              demoLink="https://time-tracking-clone.netlify.app/"
            />
          </Col>

                    <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"https://user-images.githubusercontent.com/72031522/192807635-d833cb79-41d8-419f-9898-6ac98eec5b94.JPG"}
              isBlog={false}
              title="LYST Colne"
              description="This is LYST website clone.LYST is a fashion technology company, and premium shopping app.This website is build with reactjs,Chakra-UI and mongodb.have features which allow user to create account,login,search products,buy products,payment getway etc..."
              ghLink="https://github.com/harshjoundal/LYST"
              demoLink="https://lystlyst.netlify.app/"
            />
          </Col>



          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
      <h2 style={{color:"white"}}>New projects will be uploaded after constuct week & Full stack blog app not completed yet,<br/>will be uploaded next week</h2>
    </Container>
  );
}

export default Projects;
