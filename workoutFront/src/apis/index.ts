import axios from "axios";
import { SignInRequestDto, SignUpRequestDto } from "./request/auth";
import { SignInResponseDto, SignUpResponseDto } from "./response/auth";
import { ResponseDto } from "./response";
import { GetSignInUserResponseDto } from "./response/user";

const DOMAIN='http://localhost:8085'// 4000번 포트는 서버임. 프론트에서 백단을 언급하는 것임

const API_DOMAIN=`${DOMAIN}/api/v1`;
const authorization =(accessToken:string)=>{
    return {headers: {Authorization: `Bearer ${accessToken}`}};
};

const SIGN_IN_URL=()=>`${API_DOMAIN}/auth/sign-in`;
const SIGN_UP_URL=()=>`${API_DOMAIN}/auth/sign-up`;

export const signInRequest=async(requestBody:SignInRequestDto)=>{
    const result=await axios.post(SIGN_IN_URL(), requestBody)
    .then(response=>{
        const responseBody:SignInResponseDto=response.data;
        return responseBody;
    })
    .catch(error=>{
        console.log("에러발생!!!")
        if(!error.response.data)return null;
        const responseBody:ResponseDto=error.response.data;
        return responseBody;
    })
    const {token, expirationTime, code, message}=result as SignInResponseDto
    console.log("apis에 있는 signinRequest 했을 때 쿠키정보:",token, expirationTime, code, message);
    return result;
}

export const signUpRequest=async(requestBody:SignUpRequestDto)=>{
    // console.log("내이름:",requestBody.realname);
    const result=await axios.post(SIGN_UP_URL(), requestBody)
    .then(response =>{
        const responseBody:SignUpResponseDto=response.data;
        console.log("정상");
        return responseBody;
    })
    .catch(error=>{
        if(!error.response.data)return null;
        const responseBody:ResponseDto=error.response.data;
        console.log(responseBody);
        console.log("문제:", responseBody.message);
        return responseBody;
    });
    return result;
}


const GET_SIGN_IN_USER_URL=()=>`${API_DOMAIN}/user`;

export const getSignInUserRequest=async(accessToken:string)=>{
    const result=await axios.get(GET_SIGN_IN_USER_URL(),
    authorization(accessToken))//상단에 authorization을 어떻게 정의했는지 주의
    .then(response=>{
        const responseBody:GetSignInUserResponseDto=response.data;
        return responseBody;
    })
    .catch(error=>{
        if(!error.response.data)return null;
        const responseBody:ResponseDto=error.response.data;
        return responseBody;
    })
    return result;
}
