import styled from '@emotion/styled';

// Global styles
export const GlobalStyles = styled.div`
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
  }
`;

// Section component
export const Section = styled.section`
  padding: 50px 0;
  text-align: center;
`;

// Navigation component
export const Nav = styled.nav`
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;.center
    text-align: center;
  }

  ul li {
    display: inline;
    margin-right: 150px;
  }

  ul li a {
    color: #d000ff;
    font-size: 30px;
    text-decoration: none;
  }
`;

// Footer component
export const FooterS = styled.footer`
  background-color: #e71fcc;
  color: #fff;
  padding: 20px 0;
  text-align: center;
`;

// Image section component
export const ImageSection = styled.div`
  position: relative;

  img {
    width: 100%;
    height: auto;
    display: block;
    position: relative;
    z-index: -1; /* Ensure the image is behind other content */
  }
`;

// Overlay text component
export const OverlayText = styled.div`
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: rgb(255, 255, 255);
  font-size: 70px;
  padding: 30px;
  font-family: "Diphylleia", serif;
  font-weight: 800;
  font-style: normal;
`;

// Navigation text component
export const NavigationText = styled.div`
  position: fixed;
  top: 0%;
  left: 40%;
  color: rgb(149, 49, 49);
  font-size: 0px; /* Adjust as needed */
  padding: 10px;
  font-family: "Diphylleia", serif;
  font-weight: 5; /* Adjust as needed */
  font-style: normal;
`;