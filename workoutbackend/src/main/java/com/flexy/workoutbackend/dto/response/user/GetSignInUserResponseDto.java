package com.flexy.workoutbackend.dto.response.user;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.flexy.workoutbackend.common.ResponseCode;
import com.flexy.workoutbackend.common.ResponseMessage;
import com.flexy.workoutbackend.dto.response.ResponseDto;
import com.flexy.workoutbackend.entity.UserEntity;

import lombok.Getter;

// 로그인 유저 정보 불러오기(GetSignInUser) API구현(35강)
@Getter
public class GetSignInUserResponseDto extends ResponseDto {

    private String id;
    private String realName;
    private String profileImage;

    private GetSignInUserResponseDto(UserEntity userEntity) {
        super(ResponseCode.SUCCESS, ResponseMessage.SUCCESS);
        this.id = userEntity.getUserId();
        this.realName = userEntity.getRealName();
        this.profileImage = userEntity.getProfileImage();
    }

    // 로그인 유저정보에 대한 요청은 크게 성공과 실패다. 코드는 아래와 같고 실패인 경우는 클라이언트로 보내는 ResponseEntity의
    // status를 UNAUTHORIZED로 하는것에 유의
    public static ResponseEntity<ResponseDto> success(UserEntity userEntity) {
        GetSignInUserResponseDto result = new GetSignInUserResponseDto(userEntity);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }

    public static ResponseEntity<ResponseDto> notExistedUser() {
        ResponseDto result = new ResponseDto(ResponseCode.NOT_EXISTED_USER, ResponseMessage.NOT_EXISTED_USER);
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(result);
    }
}
