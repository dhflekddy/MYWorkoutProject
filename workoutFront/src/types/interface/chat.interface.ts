export interface CreateRoomProps {
    name: string;
    imageUrl: string;
    // pictureFile: File;
  }
  export interface FormProps {
    name: string;
    img: string;
  }
  export interface RoomProps {
    name: string;
    roomId: string;
    imageUrl: string;
  }
  
  export interface ChatDetail {
    type: string;
    roomId: string;
    sender: string;
    message: string;
  }
  
  export interface CategoryUrlResponse {
    url: string;
    content: string;
    category: string;
  }
  export interface SignInResponse {
    name: string;
    accessToken: string;
    rooms: [];
    urls: [];
  }
  
  export interface SignUpProps {
    email: string;
    password: string;
    name: string;
  }
  
  export interface SignInProps {
    email: string;
    password: string;
  }


  export interface ISignUpProps {
    email: string;
    password: string;
    name: string;
  }
  
  export interface ISignInProps {
    email: string;
    password: string;
  }