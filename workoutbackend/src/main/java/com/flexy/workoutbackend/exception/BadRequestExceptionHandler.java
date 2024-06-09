package com.flexy.workoutbackend.exception;

import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.flexy.workoutbackend.dto.response.ResponseDto;

@RestControllerAdvice
public class BadRequestExceptionHandler {
    // 실제 예시로 프론트의 DTO객체의 맴버 변수 이름이 대문자이고 이것을 받는 벡단의 DTO객체의 맴버 변수가 소문자이면 문제가 발생한다.
    // 그 때 발생하는 에러가 이 에러임
    @ExceptionHandler({ MethodArgumentNotValidException.class, HttpMessageNotReadableException.class })
    public ResponseEntity<ResponseDto> validationExceptionHandler(Exception exception) {
        System.out.println("혹시?");
        return ResponseDto.validationFailed();
    }

}
