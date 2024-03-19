// import './App.css';
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import {
  GlobalStyles,
  Section,
  Nav,
  Footer,
  ImageSection,
  OverlayText,
  NavigationText,
} from "./style";
import Facility from "./facility";
import TimeTable from "./timeTable";
import Price from "./price";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Nav>
          <ul>
            <div className="for-navi">
              <li>
                <a>Home</a>
              </li>
              <li>
                <Link to="/menu/Home">Home</Link>
              </li>
              <li>
                <Link to="/menu/facilities">Facilities</Link>
              </li>
              <li>
                <Link to="/menu/timeTable">Classes</Link>
              </li>
              <li>
                <Link to="/menu/price">Prices</Link>
              </li>
              <li>
                <Link to="/menu/">Today's Workout</Link>
              </li>
              <li>
                <Link to="/menu/contact">Contact</Link>
              </li>
            </div>
          </ul>
        </Nav>
        <Section id="about" className="section">
          <OverlayText>
            <p>We shout and We are </p>
            <h2>CROSSFIT SHOUT</h2>
          </OverlayText>
          <ImageSection>
            <img src="Fraser.jpg" alt="Fraser's Photo" />
          </ImageSection>
        </Section>
        <p>
          CROSSFIT SHOUT is dedicated to helping individuals of all fitness
          levels reach their goals and beyond. Our experienced trainers and
          top-notch facilities provide the perfect environment for achieving
          peak performance.
        </p>

        <Footer>
          <div className="center">
            <p>
              Company name: CrossFit Shout Terminal Branch ｜ 대표자 : Hong Gill
              Dong ｜{" "}
            </p>
            <p>
              Address: Basement 1, 38, Meokgeori 8-gil, Dongnam-gu, Cheonan-si,
              Chungcheongnam-do ｜ Phone: 041-522-1809{" "}
            </p>
          </div>
        </Footer>

        <script src="script.js"></script>
        {/* index.html불러온 내용 시작. index.html과 연결되므로 원본을 수정한다.*/}

        {/* 리엑트에서 Emotion라이브러리 사용위해 css관련내용은 style.jsx파일에서 불러오기로 한다 */}
        {/* <link rel="stylesheet" href="styles.css"> */}
        {/* 아래는 구글 글씨체 */}
        {/* <style>
    @import url('https://fonts.googleapis.com/css2?family=Diphylleia&display=swap');
    </style> */}
      
        <div>
          <Routes>
            {/* <Route path="/menu/Home" element={}></Route> */}
            <Route path="/menu/facilities" element={<Facility />}></Route>
            <Route path="/menu/timeTable" element={<TimeTable />}></Route>
            <Route path="/menu/price" element={<Price />}></Route>
            {/* <Route path="/menu/contact" element={xxxx}></Route> */}
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
