package com.flexy.workoutbackend.dto.response.board;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.flexy.workoutbackend.common.ResponseCode;
import com.flexy.workoutbackend.common.ResponseMessage;
import com.flexy.workoutbackend.dto.response.ResponseDto;

import lombok.Getter;

@Getter
public class PutParticipationResponseDto extends ResponseDto {
    private PutParticipationResponseDto() {
        super(ResponseCode.SUCCESS, ResponseMessage.SUCCESS);
    }

    public static ResponseEntity<PutParticipationResponseDto> success() {
        PutParticipationResponseDto result = new PutParticipationResponseDto();
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }

    public static ResponseEntity<? super PutParticipationResponseDto> noExistBoard() {
        ResponseDto result = new ResponseDto(ResponseCode.NOT_EXISTED_BOARD, ResponseMessage.NOT_EXISTED_BOARD);
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(result);
    }

    public static ResponseEntity<? super PutParticipationResponseDto> noExistUser() {
        ResponseDto result = new ResponseDto(ResponseCode.NOT_EXISTED_USER, ResponseMessage.NOT_EXISTED_USER);
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(result);
    }
}
