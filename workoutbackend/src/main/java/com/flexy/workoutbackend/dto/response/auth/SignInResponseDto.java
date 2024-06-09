package com.flexy.workoutbackend.dto.response.auth;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.flexy.workoutbackend.common.ResponseCode;
import com.flexy.workoutbackend.common.ResponseMessage;
import com.flexy.workoutbackend.dto.response.ResponseDto;

import lombok.Getter;

@Getter
public class SignInResponseDto extends ResponseDto {
    // API명세서의 Auth의 로그인 Response를 보고 멤버변수 정해줌. code, message는 이미 ResponseDto객체를
    // 생성할때 매개변수로 들어감
    private String token;
    private int expirationTime;

    public SignInResponseDto(String token) {
        super(ResponseCode.SUCCESS, ResponseMessage.SUCCESS);
        this.token = token;
        this.expirationTime = 3600;// 토큰의 만료기간을 3600으로 고정(JwtProvider파일에서 1시간짜릴 jwt을 만들어 준다는 것과 대응됨)
    }

    public static ResponseEntity<SignInResponseDto> success(String token) {
        SignInResponseDto result = new SignInResponseDto(token);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }

    // validationFaild는 따로 이렇게 정의하지 않습니다. 저절로 됩니다(31강에서 배우는 듯).
    // public static ResponseEntity<ResponseDto> validationFailed() {
    // ResponseDto result = new ResponseDto(ResponseCode.VALIDATION_FAILED,
    // ResponseMessage.VALIDATION_FAILED);
    // return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(result);
    // }

    public static ResponseEntity<ResponseDto> signInFail() {// Login Information mismatch
        ResponseDto result = new ResponseDto(ResponseCode.SIGN_IN_FAIL, ResponseMessage.SIGN_IN_FAIL);
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(result);
    }

}
