import loadable from "@loadable/component";
import { Route, Routes} from "react-router-dom";
import './style.css';
// import {
//   GlobalStyles,
//   Section,
//   Nav,
//   Footer,
//   ImageSection,
//   OverlayText,
//   NavigationText,
// } from "../style"; 
// import { Button } from "@pages/SignUp/styles";
import { useState,useCallback, useEffect } from "react";
import fetcher from "@utils/fetcher";//  
import InputBox from '../components/InputBox'; //  "@components/InputBox"
import axios from 'axios';
import useSWR from 'swr';
import Container from '../layouts/Container';
import { MAIN_PATH, CONTACT_PATH, FACILITIES_PATH, PRICE_PATH, TIMETABLE_PATH, AUTH_PATH, USER_PATH} from "@constant";
import React from "react";
import { getSignInUserRequest } from "../apis";
import { User } from "../types/interface";
import { GetSignInUserResponseDto } from "../apis/response/user";
import { useCookies } from "react-cookie";
import { useLoginUserStore } from "../stores";
import { ResponseDto } from "../apis/response";
import OurLive from "@views/OurLive";
const Home = loadable(() => import("../views/Home"));
const Price = loadable(() => import("../views/Price"));
const TimeTable = loadable(() => import("../views/Timetable"));
const Facility = loadable(() => import("../views/Facilities"));
const Authentication=loadable(()=>import("../views/Authentication"));
const Contact=loadable(()=>import("../views/Contact"));

function App ()  {
  
  //로그인되 있는 페이지에서 로그아웃 클릭하면 로그아웃된 메인 홈으로 돌아오는거 아직 정확히 구현못함. 왜? 서버의 로그아웃시 처리되는 로직 때문에.
  /**
   * 좀더 구체적으로는, sleact에서 로그아웃 클릭시 Workspace폴더의 
   * index파일에서 onLogOut함수에서 빈데이터를 날리는데 이렇게 하면 logInError가 참이 되나? 
   * 왜냐하면 logInError가 참일때여야만 login컴포넌트로 redirect되거든 
   * 따라서 sleact프로젝트로 우선은 복습하고 내 프로젝트에는 가상으로 적용만 해보고 스프링 기본완료된 후에 구글링해서 구현한다!
   * (구글링 키워드: 리엑트 스프링 로그인 구현)

   */

  
  //         state: 로그인 유저 전역상태(stores파일안의 login-user-store)          //
  const { loginUser, setLoginUser, resetLoginUser}=useLoginUserStore();
  //         state: cookie 상태          //
  const [cookies, setCookie]=useCookies(); //setCookie는 사용하지 않더라도 받아와야 함

  //          function: get sign in user response 처리함수       //
  const getSignInUserResponse=(responseBody:GetSignInUserResponseDto| ResponseDto | null)=>{
    if(!responseBody)return;
    const{code}=responseBody;
    if(code==='AF'|| code==='NU'|| code==='DBE'){
      resetLoginUser();
      return;
    }
    //무언가 유의미한 정보가 들어있는 서버로부터 받은 responseBody객체에서 User의 멤버변수에 관한 데이터만 뽑아 User형 변수를 하나 만들어줌
    //아래는 전개연산자를 사용한 것으로 responseBody에 있는 멤버변수중 User인터페이스에 있는 멤버변수를 골라서 loginUser에 담음.
    const loginUser:User={...responseBody as GetSignInUserResponseDto};
    
    //아래 useEffect훅의 최종적인 목적이나 이 함수의 최종적인 목적이 결국은 이것이다. 
    //전역적으로 관리되는 전역변수 loginUSer(User)를 다시 set해주는 것이다.
    console.log("App.tsx에 있는 LoginUSer정보(App.tsx)!:",loginUser);
    setLoginUser(loginUser);   
    console.log("App.tsx에 있는 전역상태수정됨!");
  }

  //          effect: accessToken cookie 값이 변경될 때 마다 실행할 함수         //
  /*
  아래 함수를 정리하면 accessToken이 갱신될때마다 getSignInUserRequest를 통해서axios를 이용해 서버로 요청을 보내고 응답을 받아오고 있다.
  참고로 이렇게 받은 응답은 getSignInUserResponse의 매개변수로 들어간다(then문법의 내부구성을 이렇게 해놓은 것같음). 
  getSignInUserResponse함수를 보면 알겠지만 순전히 응답으로 받은 responseBody를 통해 응답의 결과에 따라 전적으로 그 흐름이 결정된다.    
  */
  useEffect(()=>{
    if(!cookies.accessToken){
      resetLoginUser();
      return;
    }
    console.log("App.tsx에 있는 쿠키정보:",cookies.accessToken);
    
    getSignInUserRequest(cookies.accessToken).then(getSignInUserResponse);
    console.log("App.tsx에 있는 loginuser(Id)전역상태: ",loginUser?.id);

  },[cookies.accessToken]);
  
  return (
    <>
  <Routes>
    <Route element={<Container/>}>
    <Route path={MAIN_PATH()}  element={<Home />}></Route>
    <Route path={AUTH_PATH()} element={<Authentication/>}/>
    <Route path={USER_PATH(':id')} element={<OurLive/>}/>

    <Route path={FACILITIES_PATH()} element={<Facility />}></Route>
    <Route path={TIMETABLE_PATH()} element={<TimeTable />}></Route>
    <Route path={PRICE_PATH()} element={<Price />}></Route>
    <Route path={CONTACT_PATH()} element={<Contact/>}></Route> 
    </Route>
  </Routes>
  </>
  );
};

export default App;
