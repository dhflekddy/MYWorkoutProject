package com.flexy.workoutbackend.service;
//UserServiceImplement.java와 UserService.java는 로그인 유저정보 불러오기 API구현할 때 만들어준 클래스임(35강)

import org.springframework.http.ResponseEntity;

import com.flexy.workoutbackend.dto.response.user.GetSignInUserResponseDto;

public interface UserService {

    ResponseEntity<? super GetSignInUserResponseDto> getSignInUser(String email);
}
