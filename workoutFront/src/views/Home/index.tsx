// import img from "./img/timeTable.jpg";
import React from "react";
import {
    GlobalStyles,
    Section,
    Nav,
    Footer,
    ImageSection,
    OverlayText,
    NavigationText,
  } from "./style";
  
const Home = () => {
  console.log("home pos")

  return (
    <div>
      <Section id="about" className="section">
        <OverlayText>
          <p>We shout and We are </p>
          <h2>CROSSFIT </h2>
        </OverlayText>
        <ImageSection>
          <img src="Fraser.jpg" alt="Fraser's Photo" />
        </ImageSection>
      </Section>
      <p>
        CROSSFIT SHOUT is dedicated to helping individuals of all fitness levels
        reach their goals and beyond. Our experienced trainers and top-notch
        facilities provide the perfect environment for achieving peak
        performance.
      </p>
 

    </div>
    
  );
};
export default Home;
