package com.flexy.workoutbackend.dto.request.auth;

import javax.persistence.Id;
import javax.validation.constraints.AssertTrue;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor

// SignUpRequestDto의 맴버변수는 모두 API명세서를 보고 만든것이다. 조건중 Required인 것은 @NotBlank로 적용해
// 주었다
public class SignUpRequestDto {
    @NotBlank
    private String id;

    @NotBlank
    private String password;
    @NotBlank
    private String realName;
    @NotBlank
    @Pattern(regexp = "^[0-9]{11,13}$")
    private String telNumber;

    @NotNull // @NotBlank, @NotEmpty의 경우 문자열을 대상으로 쓰이고 @NotNull같은 경우 모든 참조형 변수에 쓰인다
    @AssertTrue // agreedPersonal인 경우 반드시 True여야만 하므로. True값만을 가져야 하므로.
    private Boolean agreedPersonal;
}
