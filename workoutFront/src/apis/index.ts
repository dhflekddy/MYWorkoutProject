import axios from "axios";
import { SignInRequestDto, SignUpRequestDto } from "./request/auth";
import { SignInResponseDto, SignUpResponseDto } from "./response/auth";
import { ResponseDto } from "./response";
import { RefreshResponse } from "types/interface/user.interface";
import { GetSignInUserResponseDto } from "./response/user";
import {  GetCommentListResponseDto, GetParticipationListResponseDto, IncreaseViewCountResponseDto, PostBoardResponseDto } from "./response/board";
import PutParticipationResponseDto from "./response/board/put-participation.response.dto";
import { PatchBoardRequestDto, PostBoardRequestDto, PostCommentRequestDto } from "./request/board";
import { CreateRoomProps, RoomProps, SignInProps, SignInResponse, SignUpProps } from "types/interface/chat.interface";
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


// const GET_BOARD_URL=(boardNumber:number|string)=>`${API_DOMAIN}/board/${boardNumber}`;

// export const getBoardRequest=async(boardNumber:number|string)=>{
//     const result = await axios.get(GET_BOARD_URL(boardNumber))
//     .then(response => {
//         const responseBody:GetBoardResponseDto=response.data;
//         return responseBody;
//     })
//     .catch(error=>{
//         if(!error.response)return null;
//         const responseBody:ResponseDto=error.response.data;
//         return responseBody;
//     })
//     return result;
// }
const INCREASE_VIEW_COUNT_URL=(boardNumber:number|string)=>`${API_DOMAIN}/board/${boardNumber}/increase-view-count`;
// /{boardNumber}/increase-view-count"
export const increaseViewCountRequest=async(boardNumber:number|string)=>{
    const result=await axios.get(INCREASE_VIEW_COUNT_URL(boardNumber))
    .then(response=>{
        const responseBody:IncreaseViewCountResponseDto=response.data;
        return responseBody;
    })
    .catch(error=>{
        if(!error.response)return null;
        const responseBody:ResponseDto=error.response.data;
        return responseBody;
    })
    return result;
}

//self!!!!! 1개
const PUT_FAVORITE_URL=(boardNumber:number|string)=>`${API_DOMAIN}/board/${boardNumber}/favorite`;
export const putFavoriteRequest=async(boardNumber:number|string, accessToken:string)=>{
    const result=await axios.put(PUT_FAVORITE_URL(boardNumber), {}, authorization(accessToken))
    .then(response=>{
        const responseBody:PutParticipationResponseDto=response.data;
        return responseBody;
    })
    .catch(error=>{
        if(!error.response)return null;
        const responseBody:ResponseDto=error.response.data;
        return responseBody;
    })
    return result;
}


const POST_BOARD_URL=()=>`${API_DOMAIN}/board`;

export const postBoardRequest=async(requestBody:PostBoardRequestDto, accessToken:string)=>{
    const result= await axios.post(POST_BOARD_URL(), requestBody, authorization(accessToken))
    .then(response=>{
        const responseBody:PostBoardResponseDto=response.data;
        return responseBody;
    })
    .catch(error=>{
        if(!error.response)return null;
        const responseBody:ResponseDto=error.response.data;
        console.log("에러발새엥~~~");
        return responseBody;
    })
    return result;
}


const POST_COMMENT_URL=(boardNumber:number | string)=>`${API_DOMAIN}/board/${boardNumber}/comment`;
export const postCommentRequest=async(boardNumber: number | string, requestBody: PostCommentRequestDto, accessToken:string)=>{
    const result=await axios.post(POST_COMMENT_URL(boardNumber), requestBody, authorization(accessToken))
    .then(response=>{
        const responseBody: PostBoardResponseDto=response.data;
        return responseBody;
    })
    .catch(error=>{
        if(!error.response)return null;
        const responseBody: ResponseDto=error.response.data;
        console.log("댓글 API오류 프론트측에서 발생");
        return responseBody;
    })
    return result;
}
const DELETE_BOARD_URL=(boardNumber: number | string)=>`${API_DOMAIN}/board/${boardNumber}`;
export const deleteBoardRequest=async(boardNumber:number | string, accessToken:string)=>{
    const result=await axios.delete(DELETE_BOARD_URL(boardNumber), authorization(accessToken))
    .then(response=>{
        const responseBody: PostBoardResponseDto=response.data;
        return responseBody;
    })
    .catch(error=>{
        if(!error.response)return null;
        const responseBody: ResponseDto=error.response.data;
        return responseBody;
    })
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


const GET_FAVORITE_LIST_URL=(boardNumber:number|string)=>`${API_DOMAIN}/board/${boardNumber}/favorite-list`;
export const getFavoriteListRequest = async(boardNumber:number|string)=>{
    const result=await axios.get(GET_FAVORITE_LIST_URL(boardNumber))
    .then(response=>{
        const responseBody:GetParticipationListResponseDto=response.data;
        return responseBody;
    })
    .catch(error=>{
        if(!error.response)return null;
        const responseBody:ResponseDto=error.response.data;
        return responseBody;
    })
    return result;
}


const GET_COMMENT_LIST_URL=(boardNumber:number|string)=>`${API_DOMAIN}/board/${boardNumber}/comment-list`
export const getCommentListRequest = async(boardNumber:number|string)=>{
    const result=await axios.get(GET_COMMENT_LIST_URL(boardNumber))
    .then(response=>{
        const responseBody:GetCommentListResponseDto=response.data;
        return responseBody;
    })
    .catch(error=>{
        if(!error.response)return null;
        const responseBody:ResponseDto=error.response.data;
        return responseBody;
    })
    return result;
}


//파일 업로드 부분에 관한 API
const FILE_DOMAIN=`${DOMAIN}/file`;

const FILE_UPLOAD_URL=()=>`${FILE_DOMAIN}/upload`;


const multipartFormData={headers:{'Content-Type': 'multipart/form-data'}};
export const fileUploadRequest=async(data:FormData)=>{
    const result=await axios.post(FILE_UPLOAD_URL(), data, multipartFormData)
    .then(response=>{
        console.log("성공");
        const responseBody:string=response.data;
        return responseBody;
    })
    .catch(error=>{
        console.log("실패");
        return null;
    })
    return result;
}

const PATCH_BOARD_URL=(boardNumber: Number | String)=>`${API_DOMAIN}/board/${boardNumber}`;

export const patchBoardRequest=async(boardNumber: number | string, requestBody: PatchBoardRequestDto, accessToken:string)=>{
    const result=await axios.patch(PATCH_BOARD_URL(boardNumber), requestBody, authorization(accessToken))
    .then(response=>{
        const responseBody : PostBoardResponseDto = response.data;
        return responseBody;
    })
    .catch(error =>{
        if(!error.response)return null;
        const responseBody:ResponseDto = error.response.data;
        return responseBody;
    })
    return result;
}

//여기서부터 아래는 chat을 위한 api함수들
const CREATE_CHANNEL_URL=`${DOMAIN}/chat/channel`;
export const createRoom = async({ name, imageUrl }: CreateRoomProps) => {
    return await axios.post<RoomProps>(CREATE_CHANNEL_URL, { name, imageUrl }).then((res) => {
      return res.data;
    });
  };
  

const GET_CHANNEL_LIST=`${DOMAIN}/chat/channels`
  export const getRoomList = () => {
    return axios.get<RoomProps[]>(GET_CHANNEL_LIST).then((res) => {
      return res.data;
    });
  };
  

  export const refresh = () => {
    const url = "/token/refresh";
    return axios.post<RefreshResponse>(url).then((res) => {
      return res.data;
    });
  };

  import { CategoryUrlResponse } from "types/interface/chat.interface";
  export const getCategoryUrl = (category: string) => {
    const url = `/url`;
    const params = { category: category };
    return axios.get<CategoryUrlResponse[]>(url, { params }).then((res) => {
      return res.data;
    });
  };

  export const signUp = ({ email, password, name }: SignUpProps) => {
    const url = `/member/signUp`;
    return axios.post(url, { email, password, name }).then((res) => {
      return res.data;
    });
  };
  
  export const signIn = ({ email, password }: SignInProps) => {
    const url = `/member/signIn`;
    return axios.post<SignInResponse>(url, { email, password }).then((res) => {
      return res.data;
    });
  };

  export const signOut = () => {
    const url = `/member/signOut`;
    return axios.post(url).then((res) => {
      return res.data;
    });
  };
  