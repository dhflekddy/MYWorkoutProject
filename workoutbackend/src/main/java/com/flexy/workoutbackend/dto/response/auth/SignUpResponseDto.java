package com.flexy.workoutbackend.dto.response.auth;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.flexy.workoutbackend.common.ResponseCode;
import com.flexy.workoutbackend.common.ResponseMessage;
import com.flexy.workoutbackend.dto.response.ResponseDto;

import lombok.Getter;

//복습. ResponseEntity는 HTTP아키텍쳐 형태에 맞게 Response를 보내주는 Httpentity를 상속받는 클래스이다.ResponseEntity의 제너릭 타입은 
//Http프로토콜의 body부분에 오는 내용이다. 아래 코드에서 .body(result)를 보면 알수 있음.
@Getter
public class SignUpResponseDto extends ResponseDto {
    private SignUpResponseDto() {
        super(ResponseCode.SUCCESS, ResponseMessage.SUCCESS);
    }

    // 성공에 대한 메서드(Response로 200번대의 성공 응답에 해당)
    public static ResponseEntity<SignUpResponseDto> success() {

        SignUpResponseDto result = new SignUpResponseDto();
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }
    // 참고로 400번대 에러인 Validation Filed, Database error같은 경우는 알아서 오류 응답이 클라이언트에게 감

    public static ResponseEntity<ResponseDto> duplicateId() {
        ResponseDto result = new ResponseDto(ResponseCode.DUPLICATE_ID, ResponseMessage.DUPLICATE_ID);
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(result);
    }

    // public static ResponseEntity<ResponseDto> duplicateNickname() {
    // ResponseDto result = new ResponseDto(ResponseCode.DUPLICATE_NICKNAME,
    // ResponseMessage.DUPLICATE_NICKNAME);
    // return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(result);
    // }

    public static ResponseEntity<ResponseDto> duplicateTelnumber() {
        ResponseDto result = new ResponseDto(ResponseCode.DUPLICATE_TEL_NUMBER, ResponseMessage.DUPLICATE_TEL_NUMBER);
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(result);
    }

}
