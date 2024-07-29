export default interface User{
    id: string;
    realName:string;
    profileImage:string | null;
}

//chat을 위해 만듬
export interface RefreshResponse {
    name: string;
    accessToken: string;
  }
  
//chat을 위해 사용되는 임시 USer
import { RoomProps } from "./chat.interface";
export interface IUser {
    name: string;
    rooms: RoomProps[];
    urls: string[];
  }