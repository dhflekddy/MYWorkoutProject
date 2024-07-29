package com.flexy.workoutbackend.controller;

import javax.validation.Valid;

import org.apache.catalina.connector.Response;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.flexy.workoutbackend.dto.request.board.PostCommentRequestDto;
import com.flexy.workoutbackend.dto.response.board.PatchBoardResponseDto;
import com.flexy.workoutbackend.dto.response.board.DeleteBoardResponseDto;
import com.flexy.workoutbackend.dto.response.board.GetCommentListResponseDto;
import com.flexy.workoutbackend.dto.response.board.PostCommentResponseDto;
import com.flexy.workoutbackend.dto.request.board.PatchBoardRequestDto;
import com.flexy.workoutbackend.dto.request.board.PostBoardRequestDto;
import com.flexy.workoutbackend.dto.response.board.GetBoardResponseDto;
import com.flexy.workoutbackend.dto.response.board.GetParticipationListResponseDto;
import com.flexy.workoutbackend.dto.response.board.IncreaseViewCountResponseDto;
import com.flexy.workoutbackend.dto.response.board.PostBoardResponseDto;
import com.flexy.workoutbackend.service.BoardService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PutMapping;
import com.flexy.workoutbackend.dto.response.board.PutParticipationResponseDto;
import org.springframework.web.bind.annotation.RequestParam;

@RestController
@RequestMapping("/api/v1/board")
@RequiredArgsConstructor
public class BoardController {
    private final BoardService boardService;

    @GetMapping("/{boardNumber}")
    public ResponseEntity<? super GetBoardResponseDto> getBoard(@PathVariable("boardNumber") Integer boardNumber) {
        ResponseEntity<? super GetBoardResponseDto> response = boardService.getBoard(boardNumber);
        return response;
    }

    @PostMapping("")
    public ResponseEntity<? super PostBoardResponseDto> postBoard(@RequestBody @Valid PostBoardRequestDto requestBody,
            @AuthenticationPrincipal String email) {
        ResponseEntity<? super PostBoardResponseDto> response = boardService.postBoard(requestBody, email);
        return response;
    }

    @PutMapping("/{boardNumber}/Participation")
    public ResponseEntity<? super PutParticipationResponseDto> putParticipation(
            @PathVariable("boardNumber") Integer boardNumber,
            @AuthenticationPrincipal String email) {
        ResponseEntity<? super PutParticipationResponseDto> response = boardService.putParticipation(boardNumber,
                email);
        return response;
    }

    @GetMapping("/{boardNumber}/Participation-list")
    public ResponseEntity<? super GetParticipationListResponseDto> getParticipationList(
            @PathVariable("boardNumber") Integer boardNumber) {
        ResponseEntity<? super GetParticipationListResponseDto> response = boardService
                .getParticipationList(boardNumber);
        return response;
    }

    @PostMapping("/{boardNumber}/comment")
    public ResponseEntity<? super PostCommentResponseDto> postComment(
            @RequestBody @Valid PostCommentRequestDto requestBody,
            @AuthenticationPrincipal String email, @PathVariable("boardNumber") Integer boardNumber) {
        System.out.println("in????????");

        ResponseEntity<? super PostCommentResponseDto> response = boardService.postComment(requestBody, email,
                boardNumber);
        return response;
    }

    @GetMapping("/{boardNumber}/comment-list")
    public ResponseEntity<? super GetCommentListResponseDto> getCommentList(
            @PathVariable("boardNumber") Integer boardNumber) {
        ResponseEntity<? super GetCommentListResponseDto> response = boardService.getComentList(boardNumber);
        return response;
    }

    /*
     * 프론트 측에서 board/detail을 한번 요청(상세화면 1번 보기)했는데 DB에 저장되는 viewCount가 4번 증가되는
     * 문제점(DB테이블 보면 확인가능했음)
     * 을 해결하기 위해 백단에 만들어준 함수이다 지금보는 controller부터 시작해서 Service단의 BoardService에
     * increaseViewCount함수 추가해줌.
     * 물론 dto의 response폴더에 IncreaseViewCountResponseDto.java 추가해줌
     */
    @GetMapping("/{boardNumber}/increase-view-count")
    public ResponseEntity<? super IncreaseViewCountResponseDto> increaseViewCount(
            @PathVariable("boardNumber") Integer boardNumber) {
        ResponseEntity<? super IncreaseViewCountResponseDto> response = boardService.increaseViewCount(boardNumber);
        return response;
    }

    @DeleteMapping("/{boardNumber}")
    public ResponseEntity<? super DeleteBoardResponseDto> deleteBoard(@PathVariable("boardNumber") Integer boardNumber,
            @AuthenticationPrincipal String email) {
        ResponseEntity<? super DeleteBoardResponseDto> response = boardService.deleteBoard(boardNumber, email);
        return response;
    }

    @PatchMapping("/{boardNumber}")
    public ResponseEntity<? super PatchBoardResponseDto> patchBoard(
            @RequestBody @Valid PatchBoardRequestDto requestBody,
            @PathVariable("boardNumber") Integer boardNumber, @AuthenticationPrincipal String email) {
        ResponseEntity<? super PatchBoardResponseDto> response = boardService.patchBoard(requestBody, boardNumber,
                email);
        return response;
    }

}
