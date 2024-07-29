package com.flexy.workoutbackend.dto.response.board;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.flexy.workoutbackend.common.ResponseCode;
import com.flexy.workoutbackend.common.ResponseMessage;
import com.flexy.workoutbackend.dto.object.ParticipationListItem;
import com.flexy.workoutbackend.dto.response.ResponseDto;
import com.flexy.workoutbackend.respository.resultSet.GetParticipationListResultSet;

import lombok.Getter;

@Getter
public class GetParticipationListResponseDto extends ResponseDto {

    private List<ParticipationListItem> favoriteList;

    public GetParticipationListResponseDto(List<GetParticipationListResultSet> resultSets) {
        super(ResponseCode.SUCCESS, ResponseMessage.SUCCESS);
        this.favoriteList = ParticipationListItem.copyList(resultSets);
    }

    public static ResponseEntity<? super GetParticipationListResponseDto> success(
            List<GetParticipationListResultSet> resultSets) {
        GetParticipationListResponseDto result = new GetParticipationListResponseDto(resultSets);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }

    public static ResponseEntity<ResponseDto> notExistBoard() {
        ResponseDto result = new ResponseDto(ResponseCode.NOT_EXISTED_BOARD, ResponseMessage.NOT_EXISTED_BOARD);
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(result);
    }
}
