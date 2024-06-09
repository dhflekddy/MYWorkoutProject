package com.flexy.workoutbackend.dto.response;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.flexy.workoutbackend.common.ResponseCode;
import com.flexy.workoutbackend.common.ResponseMessage;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
// 나중에 DTO를 하나하나씩 만들때 ResponseDto를 상속받아 확장해서 만들것입니다.
public class ResponseDto {
    private String code;
    private String message;

    // 모든 response들이 반환하는 타입인 ResponseEntity
    public static ResponseEntity<ResponseDto> databaseError() {
        System.out.println("DB에러");
        ResponseDto responseBody = new ResponseDto(ResponseCode.DATABASE_ERROR, ResponseMessage.DATABASE_ERROR);
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(responseBody);
    }

    public static ResponseEntity<ResponseDto> validationFailed() {
        ResponseDto responseBody = new ResponseDto(ResponseCode.VALIDATION_FAILED, ResponseMessage.VALIDATION_FAILED);
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(responseBody);
    }

}
