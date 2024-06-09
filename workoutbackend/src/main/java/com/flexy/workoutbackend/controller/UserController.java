package com.flexy.workoutbackend.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.flexy.workoutbackend.service.UserService;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import com.flexy.workoutbackend.dto.response.user.GetSignInUserResponseDto;

@RestController
@RequestMapping("/api/v1/user")
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;

    @GetMapping("")
    /*
     * @AuthenticationPrincipal 이란? 인증처리후 인증한 사용자가 누구인지 받기위한 어노테이션.
     * JwtAuthenticationFilter.java에 가보면
     * new WebAuthenticationDetailsSort().buildDetails(request); 라고 하여 유저정보를 받아 new
     * UsernamePasswordAuthenticationToken객체에 담는 코드가 있다.
     * 이 객체를 securityContext에 담아두는 코드가 있다. 블로그 따로 정리함(인증처리후 로그인 유저 정보 불러오기의
     * Controller부분 구현). 35강.
     */
    public ResponseEntity<? super GetSignInUserResponseDto> getSignInUser(@AuthenticationPrincipal String id) {
        ResponseEntity<? super GetSignInUserResponseDto> response = userService.getSignInUser(id);
        return response;
    }

}
