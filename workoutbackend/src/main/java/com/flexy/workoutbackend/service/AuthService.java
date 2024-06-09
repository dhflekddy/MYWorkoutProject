package com.flexy.workoutbackend.service;

import org.springframework.http.ResponseEntity;

import com.flexy.workoutbackend.dto.request.auth.SignInRequestDto;
import com.flexy.workoutbackend.dto.request.auth.SignUpRequestDto;
import com.flexy.workoutbackend.dto.response.auth.SignUpResponseDto;
import com.flexy.workoutbackend.dto.response.auth.SignInResponseDto;

public interface AuthService {
    ResponseEntity<? super SignUpResponseDto> signUp(SignUpRequestDto dto); // ResponseDto의 부모타입도 반환할 수 있도록 와일드카드문법 사용함

    ResponseEntity<? super SignInResponseDto> signIn(SignInRequestDto dto);

}
