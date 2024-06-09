// import { ResponseCode } from '@types/enum';
import { ResponseCode } from '../../../types/enum';
import ResponseDto from '../response.dto';
// import { User } from '@types/interface';
import User from '../../../types/interface/user.interface';


export default interface GetSignInUserResponseDto extends ResponseDto, User{
    //ResponseDto, User을 extends 하였으므로 아래 모든 코드가 필요없다. ResponseDto가 code, message를 User가 message, email, profileImage를 가지고 있음
    // "code": ResponseCode;
    // "message": string;
    // "email": string;
    // "nickname": string;
    // "profileImage": string;
}