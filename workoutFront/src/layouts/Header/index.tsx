import React, { useState, useEffect} from 'react'
import './style.css'
// import { Nav } from "./style";
import {Link, useLocation, useNavigate, useParams} from 'react-router-dom'
import {AUTH_PATH, MAIN_PATH, USER_PATH, CONTACT_PATH, FACILITIES_PATH, PRICE_PATH, TIMETABLE_PATH } from '../../constant';
import {useCookies} from 'react-cookie';
// import {GlobalStyles} from "../../../style"  //내가 실험하느라 주석해준거임. 삭제해도됨

import {useLoginUserStore} from '../../stores';


export default function Header() {

      //         state: 로그인 유저 상태
    
      const {loginUser, setLoginUser, resetLoginUser} = useLoginUserStore();

      


  /*
  왜 뜬금없이 URL의 경로 상태가 필요한가? 페이지에 따라서 특정 컴포넌트(예를들면 SearchButton컴포넌트)가
  있어야 할때가 있고 없어야 할때가 있다. 그것을 구분해주기 위해 URL의 경로상태를 관리하는 것이다.
  예를들어 SearchButton 컴포넌트는 유저페이지, 게시물 작성페이지, 게시물 수정페이지만 아니라면 어디에나 나와야한다 
  현재의 페이지가 어떤 페이지 인가를 isXXXPage라는 변수를 두어 파악하고 이것을     //         render: 헤더 레이아웃 렌더링
  에서 랜더링 할 때 SearchButton, MypageButton, UploadButton을 랜더링 할것인지 여부를 결정하는데 쓰이고 있다*/
  //          state: path 상태(URL의 경로 파라미터의 상태)        //
  const {pathname}=useLocation();

  

  //로그인 여부를 쿠키값으로 알아낸다!        
  //       state: cookie상태     //
  const [cookies, setCookies] = useCookies();
  //         state:로그인 상태      //
  const [isLogin, setLogin] = useState<boolean>(false);

  const isAuthPage=pathname.startsWith(AUTH_PATH());
  const isMainPage=pathname===MAIN_PATH();
  const isUserPage=pathname.startsWith(USER_PATH('')); 

  console.log(pathname);
  //          functions: 네비케이트 함수
  const navigate = useNavigate();


  //        event handler: 로고 클릭 이벤트 처리 함수
  const onLogoClickHandler = () => {
      navigate(MAIN_PATH());
  }
 
  const onOurliveLinkClickHandler=()=>{
    if(!loginUser){
        navigate(AUTH_PATH());
        return;
    }
    const {id}=loginUser;
    navigate(USER_PATH(id));
}

      //           component: (로그인,)마이페이지 버튼 컴포넌트
      const MyPageButton = () => { //MyPageButton은 2가지 상태를 갖는다. 로그인, 로그아웃

        //         state: userMail path variable상태
        const {userId} = useParams();
        //           event handler: 마이페이지 버튼 클릭 이벤트 처리 함수
        const onMyPageButtonClickHandler = () => {
            if (!loginUser) 
                return;
            const {id} = loginUser;
            navigate(USER_PATH(id));

        };

        //           event handler: 로그아웃 버튼 클릭 이벤트 처리 함수
        const onSignOutButtonClickHandler = () => {
            resetLoginUser();
            setCookies('accessToken','',{path:MAIN_PATH(), expires: new Date()});//로그 아웃시 기존 토큰을 날려버리는 코드
            navigate(MAIN_PATH());

        };

        //           event handler: 로그인 버튼 클릭 이벤트 처리 함수
        const onSignInButtonClickHandler = () => {
            navigate(AUTH_PATH());
        }
        console.log("Header에 있는 쿠키정보:",cookies.accessToken);
        console.log("isLogin:",isLogin," userId(동적경로):",userId," loginuser(Id)전역상태: ",loginUser?.id);
        //         render: 로그아웃 버튼 컴포넌트 랜더링
        if (isLogin) //로그인한 상태이고(isLogin) useParam에서 받아온 userId(url에서 받아온 동적 쿼리)과 로그인한 유저의 이메일(loginUser?.email)이 같다면~
            return (
                //즉 지금 이상태는 로그인한 상태이다
                < div className = 'white-button' onClick = {onSignOutButtonClickHandler} > {'로그아웃'}</div>
            );
        
        // //         render: 마이페이지 버튼 컴포넌트 랜더링
        // if (isLogin) 
        //     return ( //로그인 상태이지만 마이페이지를 보고있지는 않은 상태
        //             < div className = 'white-button' onClick = {onMyPageButtonClickHandler} > {'마이페이지'}</div>);
        
        //         render: 로그인 버튼 컴포넌트 랜더링
        return ( //로그인 하지 않은 상태(즉, isLogin이 false인 상태)
                < div className = 'black-button' onClick = {onSignInButtonClickHandler} > {'로그인'}</div>);
    }
  
    //           effect: path가 변경될 때 마다 실행될 함수        //
    useEffect(()=>{

    },[pathname]);
    
    //           effect: login user가 변경될 때 마다 실행될 함수        //
    useEffect(()=>{
        setLogin(loginUser !== null);
    },[loginUser]);
   
    return(
    <>
    < div id='header'>
        <div className='header-container'>
            <div className='left-box' onClick={onLogoClickHandler}>
                <div className='icon-box'>
                    <div className='icon logo-icon'></div>
                </div>
            </div>

            <div className="link-container">
                <div>
                    <Link to={FACILITIES_PATH()} style={{textDecoration:"none"} }>Facilities</Link>
                </div>
                <div>
                    <Link to={TIMETABLE_PATH()} style={{textDecoration:"none"} }>Classes</Link>
                </div>
                <div>
                    <Link to={PRICE_PATH()} style={{textDecoration:"none"} }>Prices</Link>
                </div>
                <div>
                    {/* Board프로젝트와는 다르게 Link태그를 사용하므로 onclick속성을 쓰지않고 Link태그의 to속성에 아래와 같이 분기를 작성함 */}
                    <Link to={(isLogin &&USER_PATH(':id'))||AUTH_PATH()} style={{textDecoration:"none"} } >Our live</Link>
                </div>
                <div>
                    <Link to={CONTACT_PATH()} style={{textDecoration:"none"} }>Contact</Link>
                </div>
            </div>
                        
            <div className='header-light-box'><MyPageButton/></div>
        </div>
    </div>
    </>
     
    );
}

