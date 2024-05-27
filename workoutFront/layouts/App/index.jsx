// import './App.css';
import loadable from "@loadable/component";
import { Routes, Route, Link, BrowserRouter, Redirect } from "react-router-dom";
import {
  GlobalStyles,
  Section,
  Nav,
  Footer,
  ImageSection,
  OverlayText,
  NavigationText,
} from "../../style";
import { Button } from "@pages/SignUp/styles";
import { useState,useCallback } from "react";
import fetcher from '@utils/fetcher';
import axios from 'axios';
import useSWR from 'swr';
const Home = loadable(() => import("../../home"));
const Price = loadable(() => import("../../price"));
const TimeTable = loadable(() => import("../../timeTable"));
const Facility = loadable(() => import("../../facility"));
const LogIn = loadable(() => import("@pages/Login"));
const SignUp=loadable(()=>import("@pages/SignUp"))

const App = () => {
  const { data: userData, error: loginError, revalidate:revalidateUser } = useSWR('/api/users', fetcher);
  console.log(userData);


  const onLogOut = useCallback(() => {
    axios
      .post('/api/users/logout')//아무것도 전달하지 않음. 이것을 받는 서버의 api쪽에서 로그아웃 처리를 하고 그에 따라 아래 revalidateUser()에서
      // error를 참으로 함.그에 따라 아랫 부분 코드에서 홈화면으로 바뀌는 것임. 즉, 내가 모르는 벡엔드의 코드와 연관되어 있음.
      .then(() => {
        console.log("success");
        revalidateUser();
      })
      .catch((error) => {
        console.log("error")
        // console.dir(error);
        // toast.error(error.response?.data, { position: 'bottom-center' });
      });
  }, []);
  
  //로그인되 있는 페이지에서 로그아웃 클릭하면 로그아웃된 메인 홈으로 돌아오는거 아직 정확히 구현못함. 왜? 서버의 로그아웃시 처리되는 로직 때문에.
  /**
   * 좀더 구체적으로는, sleact에서 로그아웃 클릭시 Workspace폴더의 
   * index파일에서 onLogOut함수에서 빈데이터를 날리는데 이렇게 하면 logInError가 참이 되나? 
   * 왜냐하면 logInError가 참일때여야만 login컴포넌트로 redirect되거든 
   * 따라서 sleact프로젝트로 우선은 복습하고 내 프로젝트에는 가상으로 적용만 해보고 스프링 기본완료된 후에 구글링해서 구현한다!
   * (구글링 키워드: 리엑트 스프링 로그인 구현)

   */
  if (loginError) {
    console.log("Real error");
    return <Link to="/" />;
  }

  return (
    <BrowserRouter>
      <Nav>
        <ul>
          <div className="for-navi">
            <li>
              <Link to="/">Home</Link>
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
            {!userData? <><Link to="/Login/">로그인</Link> <Link to="/SignUp/">회원가입</Link></>
            :<button onClick={onLogOut}>로그아웃</button>}



          </div>
        </ul>
      </Nav>

      {/* <Section id="about" className="section">
        <OverlayText>
          <p>We shout and We are </p>
          <h2>CROSSFIT SHOUT</h2>
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
      </p> */}

      {/* <Footer>
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
      </Footer> */}

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
          <Route exact path="/" element={<Home />}></Route>
          {/* <Route path="/Home" element={<Home/>}></Route> */}
          <Route path="/menu/facilities" element={<Facility />}></Route>
          <Route path="/menu/timeTable" element={<TimeTable />}></Route>
          <Route path="/menu/price" element={<Price />}></Route>
          {/* <Route path="/menu/contact" element={xxxx}></Route> */}

          <Route path="/Login/" element={<LogIn />}></Route>
          <Route path="/SignUp/" element={<SignUp />}></Route>
        </Routes>
      </div>
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
    </BrowserRouter>
  );
};

export default App;
