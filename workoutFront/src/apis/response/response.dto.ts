//tsconfig에서baseurl을 설정해 주었기 때문에 아래와 같은 상대경로가 아닌
//절대경로("types")로 경로를 설정할 수 있음 

// import ResponseCode from "../../types/response.code.enum";  
import {ResponseCode} from "../../types/enum";

export default interface ResponseDto{
    code: ResponseCode;
    message: string;  
}


