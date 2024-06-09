package com.flexy.workoutbackend.dto.request.auth;

import javax.validation.constraints.NotBlank;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
// API명세서의 Auth의 로그인 Request를 보고 멤버변수 정해줌
public class SignInRequestDto {
    @NotBlank
    private String id;
    @NotBlank
    private String password;
}
