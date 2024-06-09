import React, {ChangeEvent, KeyboardEvent, useEffect, useRef, useState} from 'react'
import './style.css';
import InputBox from '@components/InputBox';
import { SignInResponseDto, SignUpResponseDto } from '../../apis/response/auth';
import { signInRequest, signUpRequest } from '../../apis';
import { ResponseDto } from '../../apis/response';
import { SignInRequestDto, SignUpRequestDto } from '../../apis/request/auth';
import { useCookies } from 'react-cookie';
import { MAIN_PATH } from '../../constant';
import { useNavigate } from 'react-router-dom';
import { request } from 'http';

//        component: 인증 화면 컴포넌트
export default function Authentication() {

    //        state: 화면상태
    const [view, setView] = useState < 'sign-in' | 'sign-up' >('sign-in'); //리터럴 상태라고합니다. 오로지 두가지값중 하나만을 가지게 할때 이와같은 식으로 쓰입니다
    
    //        state: 쿠키 상태        //
    const [cookies, setCookie]=useCookies();

    // function: 네비게이트 함수        //
    const navigator=useNavigate();

    //        component: Sign in card 컴포넌트
    const SignInCard = () => {
        //          state:아이디 요소 참조 상태   //
        const idRef=useRef<HTMLInputElement | null>(null);
      
        //          state:패스워드 요소 참조 상태   //
        const passwordRef=useRef<HTMLInputElement | null>(null);


        //          state:아이디 상태
        const [id, setId] = useState<string>('');
        //         state:패스워드 상태
        const [password, setPassword] = useState<string>('');

        //         state:패스워드 타입 상태
        const [passwordType, setPasswordType] = useState < 'text' | 'password' > (
            'password'
        ); //리터럴 상태라고합니다. 오로지 두가지 값중 하나만을 가지게 할때 이와같은 식으로 쓰입니다
        //         state:패스워드 버튼 아이콘 상태
        const [passwordButtonIcon, setPasswordButtonIcon] = useState < 'eye-light-off-icon' | 'eye-light-on-icon' | 'expand-right-light-icon' > ('eye-light-off-icon');
        //         state:에러상태
        const [error, setError] = useState<boolean>(false);

        //         function: sign in response 처리함수         //
        const signInResponse=(responseBody: SignInResponseDto| ResponseDto | null)=>{
            if(!responseBody){
                alert('네트워크 이상입니다.');
                return;
            }
            const {code}=responseBody;
            if(code==='DBE')alert('데이터베이스 오류입니다');
            if(code==='SF'||code==='VF')setError(true);
            console.log("What's the code",code)
            
            if(code!=='SU')return;
            console.log("정상")
            /*
            여기까지 오면 성공적으로 response를 받았다는 것이고 이제 이 받은 token을 쿠키에 넣는 작업을 해주면 
            되는 것(기존에 "react-cookie"라이브러리를 받아놓음).
쿠키에 관한 상태인 const[cookies, setCookies]=useCookies();를 만든다. 
             */
            const{token, expirationTime }=responseBody as SignInResponseDto;
            const now=new Date().getTime();
            const expires=new Date(now+expirationTime*1000);
            setCookie('accessToken', token, {expires, path:MAIN_PATH()}); //여기서 path는 해당 경로에서만 쿠키가 작동하게 한다. '/'를 넣으면 모든 페이지에서 작동함
            //accessToken은 단지 쿠키(토큰)의 이름임. 
            navigator(MAIN_PATH());
        }

        //           event handler:아이디 변경 이벤트 처리         //
        const onIdChangeHandler=(event:ChangeEvent<HTMLInputElement>) =>{
            setError(false);
            const {value}=event.target;
            setId(value);
        }
        
        //           event handler:패스워드 변경 이벤트 처리         //
        const onPasswordChangeHandler=(event:ChangeEvent<HTMLInputElement>) =>{
            setError(false);
            const {value}=event.target;
            setPassword(value);
        }


        //           event handler:로그인 버튼 클릭 이벤트 처리         //
        const onSignInButtonClickHandler=()=>{
          const requestBody: SignInRequestDto={ id, password};//자스에는 없는 타입스크립트만의 인터페이스를 이렇게 사용할 수 있다. 
          signInRequest(requestBody).then(signInResponse);
        }   
        //           event handler:회원가입 링크 클릭 이벤트 처리        //
        const onSignUpLinkClickHandler=()=>{
            setView('sign-up');//이렇게 변수 view의 값을 변경해 주면 화면을 랜더링하는 return부분에 변수 view가 있어 바로 화면이 바뀌게 된다 
        }

        //           event handler:패스워드 버튼 클릭 이벤트 처리
        const onPaswordButtonClickHandler = () => {
            if (passwordType === 'text') {
                setPasswordType('password');
                setPasswordButtonIcon('eye-light-off-icon');
            } else {
                setPasswordType('text');
                setPasswordButtonIcon('eye-light-on-icon');
              }
        }

        //           event handler: 아이디 인풋 키 다운 이벤트 처리
        const onIdKeyDownHandler = (event: KeyboardEvent<HTMLInputElement>) => {
          if(event.key !=='Enter')return;

          //아이디 입력완료후 엔터치면 페스워트 창에 포커스 가게만들어 주기위해 아이디 요소 참조 상태와 패스워드 요소 참조 상태를 만들어 준다. 27강 23분
          if(!passwordRef.current)return;
          passwordRef.current.focus();
        }

        //           event handler: 패스워드 인풋 키 다운 이벤트 처리
        const onPasswordKeyDownHandler = (event: KeyboardEvent<HTMLInputElement>) => {
          if(event.key !=='Enter')return;

          onSignInButtonClickHandler();
        }

        //        render: Sign In card 컴포넌트 렌더링
        return (
        < div className='auth-card'>
            <div className='auth-card-box'>
                <div className='auth-card-top'>
                    <div className='auth-card-title-box'>
                        <div className='auth-card-title'> { '로그인' }</div>
                    </div>
                    < InputBox ref={idRef} label = {'아이디'} type = {'text'} placeholder = {'아이디를 입력해주세요'} value = {id} onChange = {onIdChangeHandler} error = {error} onKeyDown = {onIdKeyDownHandler} /> 
                    
                    <InputBox ref={passwordRef} label = {'패스워드'}type = {passwordType}placeholder = {'비밀번호를 입력해주세요'} value = {password} onChange = {onPasswordChangeHandler} error = { error}
                    icon = {passwordButtonIcon} onButtonClick = { onPaswordButtonClickHandler} onKeyDown = {onPasswordKeyDownHandler} />
                </div>
                < div className='auth-card-bottom'>
                    {error && 
                    <div className='auth-sign-in-error-box'>
                        <div className='auth-sign-in-error-message'>
                            { '아이디 또는 비밀번호를 잘못 입력했습니다. \n입력하신 내용을 다시 확인해 주세요.' }</div>
                    </div>
                    }
                    < div className='black-large-full-button' onClick={onSignInButtonClickHandler}>
                        {'로그인'}</div>
                    < div className='auth-description-box'>
                        <div className='auth-description'>
                            { '신규 사용자이신가요?' } < span className = 'auth-description-link' onClick={onSignUpLinkClickHandler}>{ '회원가입' }</span>
                    </div>
                </div>
            </div>
        </div>
        </div>
        );
    };

    //        component: Sign up card 컴포넌트
    const SignUpCard = () => {
        //회원가입 1번째 페이지와 관련된 참조상태
        //         state: 아이디 요소 참조 상태        //
        const idRef=useRef<HTMLInputElement | null>(null);

        //         state: 패스워드 요소 참조 상태        //
        const passwordRef=useRef<HTMLInputElement | null>(null);

        //         state: 패스워드 확인 요소 참조 상태        //
        const passwordCheckRef=useRef<HTMLInputElement | null>(null);

        //회원가입 2번째 페이지와 관련된 참조상태
        //         state: 실명 요소 참조 상태         //
        const realnameRef=useRef<HTMLInputElement | null>(null);
        
        //         state: 휴대폰번호 요소 참조 상태         //
        const telNumberRef=useRef<HTMLInputElement | null>(null);




        //         state: 페이지 번호 상태        //
        const [page, setPage]=useState<1 | 2>(1);
        //         state: 아이디 상태        //
        const [id, setId]=useState<string>('');
        //         state: 패스워드 상태        //
        const [password, setPassword]=useState<string>('');
        //         state: 패스워드 확인 상태        //
        const [passwordCheck, setPasswordCheck]=useState<string>('');

        //         state: 실명 상태        //
        const [realName, setRealname]=useState<string>("");

        //         state: 휴대폰번호 상태        //
        const [telNumber, setTelNumber]=useState<string>("");


        //         state: 개인정보 동의 상태        //
        const [agreedPersonal, setAgreedPersonal]=useState<boolean>(false);
        


        //         state: 패스워드 타입 상태        //
        const [passwordType, setPasswordType]=useState<'text'|'password'>('password');

        //         state: 패스워드 확인 타입 상태        //
        const [passwordCheckType, setPasswordCheckType]=useState<'text'|'password'>('password');


        //         state: 아이디 에러 상태        //
        const[isIdError, setIdError]=useState<boolean>(false);
        
        //         state: 패스워드 에러 상태        //
        const[isPasswordError, setPasswordError]=useState<boolean>(false);

        //         state: 패스워드 확인 에러 상태        //
        const[isPasswordCheckError, setPasswordCheckError]=useState<boolean>(false);

        //         state: 실명 에러 상태        //
        const[isRealnameError, setRealnameError]=useState<boolean>(false);
        //         state: 휴대폰 에러 상태        //
        const[isTelNumberError, setTelNumberError]=useState<boolean>(false);


        //         state: 개인정보 동의 에러 상태        //
        const[isAgreedPersonalError, setAgreedPersonalError]=useState<boolean>(false);
        



        //         state: 아이디 에러 메세지 상태        //
        const[idErrorMessage, setIdErrorMessage]=useState<string>('')

        //         state: 패스워드 에러 메세지 상태        //
        const[passwordErrorMessage, setPasswordErrorMessage]=useState<string>('')
        //         state: 패스워드 확인 에러 메세지 상태        //
        const[passwordCheckErrorMessage, setPasswordCheckErrorMessage]=useState<string>('')

        //         state: 실명 에러 메세지 상태        //
        const[realnameErrorMessage, setRealnameErrorMessage]=useState<string>('')

        //         state: 휴대폰번호 에러 메세지 상태        //
        const[telNumberErrorMessage, setTelNumberErrorMessage]=useState<string>('')




        //         state: 패스워드 버튼 아이콘 상태        //
        const [passwordButtonIcon, setPasswordButtonIcon] = useState < 'eye-light-off-icon' | 'eye-light-on-icon' | 'expand-right-light-icon' > ('eye-light-off-icon');

        //         state: 패스워드 확인 버튼 아이콘 상태        //
        const [passwordCheckButtonIcon, setPasswordCheckButtonIcon] = useState < 'eye-light-off-icon' | 'eye-light-on-icon' | 'expand-right-light-icon' > ('eye-light-off-icon');

        // //           function: 다음 주소 검색 팝업 오픈 함수       //
        // const open=useDaumPostcodePopup();
        
        //           function: sign up response 처리 함수       //
        const signUpResponse=(responseBody:SignUpResponseDto | null)=>{
            if(!responseBody){
                alert('네트워크 이상입니다.');
                return;
            }
            const{code}=responseBody;
            if(code === 'DE'){//Duplicate id
                setIdError(true);
                setIdErrorMessage('중복되는 아이디입니다.');
                alert('이미 등록된 아이디입니다.')
            }
            // if(code==='DN'){
            //     setRealnameError(true);
            //     setRealnameErrorMessage('중복되는 실명입니다???.')
            // }
            if(code==='DT'){
                setTelNumberError(true);
                setTelNumberErrorMessage('중복되는 휴대폰 번호입니다.');
            }
            if(code==='VF')alert('모든 값을 입력하세요.');
            if(code==='DBE')alert('데이터베이스 오류입니다.');
            if(code!=='SU')return;

            setView('sign-in'); //회원가입버튼을 눌러 정상적으로 회원가입이 되면 로그인 화면으로 가게 한다는 말
            
        }

        

        
        //         event handler: 아이디 변경 이벤트 처리        //
        const onIdChangeHandler=(event: ChangeEvent<HTMLInputElement>)=>{
            const {value}=event.target;
            setId(value);
            setIdError(false);
            setIdErrorMessage('');
        }

        //         event handler: 패스워드 변경 이벤트 처리        //
        const onPasswordChangeHandler=(event:ChangeEvent<HTMLInputElement>)=>{
            const {value}=event.target;
            setPassword(value);
            setPasswordError(false);
            setPasswordErrorMessage('');
        }
        //         event handler: 패스워드 확인 변경 이벤트 처리        //
        const onPasswordCheckChangeHandler=(event:ChangeEvent<HTMLInputElement>)=>{
            const {value}=event.target;
            setPasswordCheck(value);
            setPasswordCheckError(false);
            setPasswordCheckErrorMessage('');
        }
        
        //         event handler: 실명 변경 이벤트 처리        //
        const onRealnameChangeHandler=(event:ChangeEvent<HTMLInputElement>)=>{
            const {value}=event.target;
            setRealname(value);
            setRealnameError(false);
            setRealnameErrorMessage('');
        }
        //         event handler: 휴대폰번호 변경 이벤트 처리        //
        const onTelNumberChangeHandler=(event:ChangeEvent<HTMLInputElement>)=>{
            const{value}=event.target;
            setTelNumber(value);
            setTelNumberError(false);
            setTelNumberErrorMessage('');
        }
        // event handler: 개인정보통의 체크 박스 클릭 이벤트 처리          //
        const onAgreedPersonalClickHandler=()=>{
            setAgreedPersonal(!agreedPersonal);
            setAgreedPersonalError(false);
        }

        //         event handler: 패스워드 (아이콘)버튼 클릭 이벤트 처리        //
        const onPasswordButtonClickHandler=()=>{
            if(passwordButtonIcon==="eye-light-off-icon"){
                setPasswordButtonIcon("eye-light-on-icon");
                setPasswordType("text");
            }
            else{
                setPasswordButtonIcon("eye-light-off-icon");
                setPasswordType("password");
            }
        }
        //         event handler: 패스워드 확인(아이콘) 버튼 클릭 이벤트 처리        //
        const onPasswordCheckButtonClickHandler = () => {
            if (passwordCheckButtonIcon === "eye-light-off-icon") {
                setPasswordCheckButtonIcon("eye-light-on-icon");
                setPasswordCheckType("text");
            } else {
                setPasswordCheckButtonIcon("eye-light-off-icon");
                setPasswordCheckType("password");
            }
        }



        //         event handler: 다음 단계 버튼 클릭 이벤트 처리       //
        const onNextButtonClickHandler=()=>{
            // const emailPattern=/^[a-zA-Z0-9]*@([-.]?[a-zA-Z0-9])*\.[a-zA-Z]{2,4}$/;
            const idPattern=/^[a-z0-9_-]{6,16}$/;  //영문자 소문자, 숫자, "-", "_" 로만 구성된 길이 6 ~ 16자리 사이 문자열
                
            const isIdPattern=idPattern.test(id);
            if(!isIdPattern){
                setIdError(true);
                setIdErrorMessage('아이디: 6~16자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.');
            }
            const isCheckPassword=password.trim().length>=8;
            if(!isCheckPassword){
                setPasswordError(true);
                setPasswordErrorMessage('비밀번호는 8자 이상 입력해주세요.');
            }
            
            const isEqualPassword=password===passwordCheck;
            if(!isEqualPassword){
                setPasswordCheckError(true);
                setPasswordCheckErrorMessage("비밀번호와가 일치하지 않습니다.");
            }
            if(!isIdPattern|| !isCheckPassword||!isEqualPassword)return;
            setPage(2);
        }
        //          event handler: 회원가입 버튼 클릭 이벤트 처리         //(회원가입 링크 버튼 처리와는 다름)
        const onSignUpButtonClickHandler=()=>{
            // const emailPattern=/^[a-zA-Z0-9]*@([-.]?[a-zA-Z0-9])*\.[a-zA-Z]{2,4}$/;
            const idPattern=/^[a-z0-9_-]{6,16}$/;  //아이디: 6~16자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.

            const isIdPattern=idPattern.test(id);
            if(!isIdPattern){
                setIdError(true);
                setIdErrorMessage('아이디: 6~16자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.');
            }
            const isCheckPassword=password.trim().length>=8;
            if(!isCheckPassword){
                setPasswordError(true);
                setPasswordErrorMessage('비밀번호는 8자 이상 입력해주세요.');
            }
            
            const isEqualPassword=password===passwordCheck;
            if(!isEqualPassword){
                setPasswordCheckError(true);
                setPasswordCheckErrorMessage("비밀번호와가 일치하지 않습니다.");
            }
            if(!isIdPattern|| !isCheckPassword||!isEqualPassword){
                setPage(1);
                return;
            }
            const hasRealname=realName.trim().length>0;
            if(!hasRealname){
                setRealnameError(true);
                setRealnameErrorMessage('실명을 입력해주세요');
            }
            const telNumberPattern=/^[0-9]{11,13}$/;
            const isTelNumberPattern=telNumberPattern.test(telNumber);
            if(!isTelNumberPattern){
                setTelNumberError(true);
                setTelNumberErrorMessage('숫자만 입력해주세요');
            }

            if(!agreedPersonal){
                setAgreedPersonalError(true);
            }
            if(!hasRealname || !isTelNumberPattern) return;//한가지라도 false이면 회원가입 버튼 아무리 눌러도 아무일 안생김

            const requestBody: SignUpRequestDto={id, password, realName, telNumber, agreedPersonal}
            console.log(requestBody);
            signUpRequest(requestBody).then(signUpResponse);   
        }


        
        //         event handler: 로그인 링크 클릭 이벤트 처리        //
        const onSignInLinkClickHandler=()=>{
            setView('sign-in');
        }


        //         event handler: 아이디 키 다운 이벤트 처리       //
        const onIdKeyDownHandler=(event:KeyboardEvent<HTMLInputElement>)=>{
            if(event.key!==('Enter'||'Tab'))return;
            if(!passwordRef.current)return;
            passwordRef.current.focus();
        }
        //         event handler: 패스워드 키 다운 이벤트 처리       //
        const onPasswordKeyDownHandler=(event:KeyboardEvent<HTMLInputElement>)=>{
            if(event.key!==('Enter'||'Tab'))return;
            if(!passwordCheckRef.current)return;
            passwordCheckRef.current.focus();
        }
        //         event handler: 패스워드 확인 키 다운 이벤트 처리       //
        const onPasswordCheckKeyDownHandler=(event:KeyboardEvent<HTMLInputElement>)=>{
            if(event.key!==('Enter'||'Tab'))return;
            onNextButtonClickHandler();
        }        

        //         event handler: 실명 키 다운 이벤트 처리       //
        const onRealnameKeyDownHandler=(event:KeyboardEvent<HTMLInputElement>)=>{
            if(event.key!==('Enter'||'Tab'))return;
            if(!telNumberRef.current)return;
            telNumberRef.current.focus();
        }        
        //         event handler: 휴대폰번호 키 다운 이벤트 처리       //
        const onTelNumberKeyDownHandler=(event:KeyboardEvent<HTMLInputElement>)=>{
            if(event.key!==('Enter'||'Tab'))return;
            onSignUpButtonClickHandler();

        }        

        //         effect: 페이지가 변경될 때마다 시행될 함수       //
        useEffect(()=>{
            if(page===2){
            if(!realnameRef.current)return;
            realnameRef.current.focus();
            }
        },[page])  

        //        render: SignUp card 컴포넌트 렌더링
        return (< div className = 'auth-card' > 
        <div className='auth-card-box'>
            <div className='auth-card-top'>
               <div className='auth-card-title-box'>
                <div className='auth-card-title'>{'회원가입'}</div>
                <div className='auth-card-page'>{`${page}/2`}</div>
                </div>
                {page ===1 &&(
                    <>
                    <InputBox ref={idRef} label='아이디*' type='text' placeholder='아이디를 입력해주세요' value={id} onChange={onIdChangeHandler} error={isIdError} message={idErrorMessage} onKeyDown={onIdKeyDownHandler}/>
                    <InputBox ref={passwordRef} label='비밀번호*' type={passwordType} placeholder='비밀번호를 입력해주세요' value={password} onChange={onPasswordChangeHandler} error={isPasswordError} message={passwordErrorMessage} icon={passwordButtonIcon} onButtonClick={onPasswordButtonClickHandler} onKeyDown={onPasswordKeyDownHandler}/>
                    <InputBox ref={passwordCheckRef} label='비밀번호 확인*'type={passwordCheckType} placeholder='비밀번호를 다시 입력해주세요'value={passwordCheck} onChange={onPasswordCheckChangeHandler} error={isPasswordCheckError} message={passwordCheckErrorMessage} icon={passwordCheckButtonIcon} onButtonClick={onPasswordCheckButtonClickHandler} onKeyDown={onPasswordCheckKeyDownHandler}/>
                    </>
                )}
                {page===2 &&(
                    <>
                    <InputBox ref={realnameRef} label={'이름*'} type='text' placeholder='이름을 입력해주세요'value={realName} onChange={onRealnameChangeHandler} error={isRealnameError} message={realnameErrorMessage} onKeyDown={onRealnameKeyDownHandler}/>
                    <InputBox ref={telNumberRef} label={'휴대폰 번호*'} type='text' placeholder='휴대폰 번호를 입력해주세요' value={telNumber} onChange={onTelNumberChangeHandler} error={isTelNumberError} message={telNumberErrorMessage}onKeyDown={onTelNumberKeyDownHandler} />
                    </>
                )} 
            </div>
            <div className='auth-card-bottom'>
                {page===1 &&(
                <div className='black-large-full-button' onClick={onNextButtonClickHandler}>{'다음 단계'}</div>
                )}
                {page===2&&(
                    <>
                    <div className='auth-consent-box'>
                        <div className='auth-check-box' onClick={onAgreedPersonalClickHandler}>
                            <div className={`icon ${agreedPersonal ? ('check-round-fill-icon'): ('check-ring-light-icon')}`}></div>
                            </div>
                        <div className={isAgreedPersonalError?'auth-consent-title-error':'auth-consent-title'}>{'개인정보동의'}</div>

                        <div className='auth-consent-link'>{'더보기 '}</div>
                    </div>
                    <div className='black-large-full-button' onClick={onSignUpButtonClickHandler}>{'회원가입'}</div>
                    </>
                )}
                <div className='auth-description-box'>
                    <div className='auth-description'>{'이미 계정이 있으신가요?'}<span className='auth-description-link' onClick={onSignInLinkClickHandler}>{'로그인'}</span></div>
                </div>
            </div>
        </div>
        </div>)
    };



    //        render: 인증 화면 컴포넌트 렌더링
    return (
        < div id = 'auth-wrapper' > <div className = 'auth-container' > <div className = 'auth-jumbotron-box' > <div className = 'auth-jumbotron-contents' > <div className = 'auth-logo-icon' > </div> < div className = 'auth-jumbotron-text-box' > <div className = 'auth-jumbotron-text' > {
            'Welcome.'
        }</div> < div className = 'auth-jumbotron-text' > {
            'Login for ur Health'
        }</div></div></div></div> {
            view === 'sign-in' &&< SignInCard />
        } {
            view === 'sign-up' &&< SignUpCard />
        }</div></div>
    )
}
