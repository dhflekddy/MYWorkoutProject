import { AUTH_PATH } from '@constant';
import Footer from '../Footer'
import Header from '../Header'
import { Outlet, useLocation } from 'react-router-dom'
import React, { useEffect } from 'react';
import { getSignInUserRequest } from '../../apis';
import { User } from '../../types/interface';
import { GetSignInUserResponseDto } from '../../apis/response/user';
import { useLoginUserStore } from '../../stores';
import { useCookies } from 'react-cookie';
import { ResponseDto } from '../../apis/response';
//        component: 컨터이너 컴포넌트        //
export default function Container() {

  //          state: 현재 페이지 path name상태      //
  const {pathname}=useLocation();
    //        render: 컨테이너 렌더링        //
    console.log("Container pos")



//         state: 로그인 유저 전역상태(stores파일안의 login-user-store)          //
const { setLoginUser, resetLoginUser}=useLoginUserStore();
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
  console.log("Contain에있는 LoginUSer정보:",loginUser);
  setLoginUser(loginUser);   
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
  console.log("Container에 있는 쿠키정보:",cookies.accessToken);

  getSignInUserRequest(cookies.accessToken).then(getSignInUserResponse);
},[cookies.accessToken]);









  return (
    <>
    {/* {pathname!==AUTH_PATH() &&<Header/>} */}
    <Header />
    {/* {pathname} */}
    <Outlet />

    {pathname!=="/auth"&& <Footer/>}    
    </>
  )
}


