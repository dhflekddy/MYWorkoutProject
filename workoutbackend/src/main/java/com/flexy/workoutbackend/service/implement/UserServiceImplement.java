package com.flexy.workoutbackend.service.implement;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.flexy.workoutbackend.dto.response.ResponseDto;
import com.flexy.workoutbackend.dto.response.user.GetSignInUserResponseDto;
import com.flexy.workoutbackend.entity.UserEntity;
import com.flexy.workoutbackend.respository.UserRepository;
import com.flexy.workoutbackend.service.UserService;

import lombok.RequiredArgsConstructor;

//UserServiceImplement.java와 UserService.java는 로그인 유저정보 불러오기 API구현할 때 만들어준 클래스임(35강)
@Service
@RequiredArgsConstructor
public class UserServiceImplement implements UserService {
    private final UserRepository userRepository;

    @Override
    public ResponseEntity<? super GetSignInUserResponseDto> getSignInUser(String userId) {

        UserEntity userEntity = null;
        try {
            userEntity = userRepository.findByUserId(userId);
            if (userEntity == null)
                return GetSignInUserResponseDto.notExistedUser();

        } catch (Exception exception) {
            exception.printStackTrace();
            return ResponseDto.databaseError();
        }
        System.out.println("반응한다");

        return GetSignInUserResponseDto.success(userEntity);
    }

}
