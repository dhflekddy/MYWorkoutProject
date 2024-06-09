package com.flexy.workoutbackend.controller;

import javax.validation.Valid;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.flexy.workoutbackend.dto.request.auth.SignInRequestDto;
import com.flexy.workoutbackend.dto.request.auth.SignUpRequestDto;
import com.flexy.workoutbackend.dto.response.auth.SignUpResponseDto;
import com.flexy.workoutbackend.dto.response.auth.SignInResponseDto;

import com.flexy.workoutbackend.service.AuthService;

import lombok.RequiredArgsConstructor;

//컨트롤러에는 비즈니스 로직이 들어가서는 안됩니다. 계층 설계에서 컨트롤러는 입력을 받고 그에 대한 응답을 주는 계층입니다(API역할의 계층)
@RestController
@RequestMapping("/api/v1/auth") // 인증(Auth)과 관련된 것이므로 API명세서의 Auth의 해당 URL을 가져왔다(POST /api/v1/auth)
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;

    @PostMapping("/sign-up")
    public ResponseEntity<? super SignUpResponseDto> signUp(@RequestBody @Valid SignUpRequestDto requestBody) {
        System.out.println(requestBody);// 암것도 출력안됨
        ResponseEntity<? super SignUpResponseDto> response = authService.signUp(requestBody);
        return response;
    }

    // 이상으로 회원가입요청(request)에 대한 서버의 응답(response)인 과정2. 가 끝났다. 이제 여기까지 구현한것을 가지고
    // postman을 가지고 테스트해보겠다.(25강 14:34 )

    @PostMapping("/sign-in")
    public ResponseEntity<? super SignInResponseDto> signIn(@RequestBody @Valid SignInRequestDto requestBody) {
        ResponseEntity<? super SignInResponseDto> response = authService.signIn(requestBody);
        return response;
    }
    // 이상으로 로그인요청에 대한 서버의 응답(response)이 끝남. 여기까지 구현한것을 가지고 postman을 가지고 테스트해보겠다

}
