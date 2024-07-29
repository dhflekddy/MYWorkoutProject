package com.flexy.workoutbackend.service;

import org.springframework.http.ResponseEntity;

import com.flexy.workoutbackend.dto.request.board.PatchBoardRequestDto;
import com.flexy.workoutbackend.dto.request.board.PostBoardRequestDto;
import com.flexy.workoutbackend.dto.request.board.PostCommentRequestDto;
import com.flexy.workoutbackend.dto.response.board.GetBoardResponseDto;
import com.flexy.workoutbackend.dto.response.board.PostBoardResponseDto;
import com.flexy.workoutbackend.dto.response.board.PutParticipationResponseDto;
import com.flexy.workoutbackend.dto.response.board.GetParticipationListResponseDto;
import com.flexy.workoutbackend.dto.response.board.PostCommentResponseDto;
import com.flexy.workoutbackend.dto.response.board.GetCommentListResponseDto;
import com.flexy.workoutbackend.dto.response.board.IncreaseViewCountResponseDto;
import com.flexy.workoutbackend.dto.response.board.DeleteBoardResponseDto;
import com.flexy.workoutbackend.dto.response.board.PatchBoardResponseDto;

public interface BoardService {
        ResponseEntity<? super GetBoardResponseDto> getBoard(Integer boardNumber);

        ResponseEntity<? super PostBoardResponseDto> postBoard(PostBoardRequestDto dto, String email);

        // API명세서 좋아요 기능을 보면 request를 클라측에서 날리때 보내는 데이터가 따로 없다. 하지만 URL을 보면 boardNumber가
        // 동적경로로 들어가고
        // Header에 Authorization이 들어가므로 매개변수로 boardNumber와 email을 넣어주는 것이다.
        ResponseEntity<? super PutParticipationResponseDto> putParticipation(Integer boardNumber, String email);

        ResponseEntity<? super GetParticipationListResponseDto> getParticipationList(Integer boardNumber);

        ResponseEntity<? super PostCommentResponseDto> postComment(PostCommentRequestDto dto, String email,
                        Integer boardNumber);

        ResponseEntity<? super GetCommentListResponseDto> getComentList(Integer boardNumber);

        ResponseEntity<? super IncreaseViewCountResponseDto> increaseViewCount(Integer boardNumber);

        ResponseEntity<? super DeleteBoardResponseDto> deleteBoard(Integer boardNumber, String email);

        ResponseEntity<? super PatchBoardResponseDto> patchBoard(PatchBoardRequestDto requestDto, Integer boardNumber,
                        String email);
}
