export default interface SignUpRequestDto{
        //API명세서의 회원가입 Request를 보고 작성

    id:string;
    password:string;
    realName:string;
    telNumber:string;
    agreedPersonal:boolean;    
}