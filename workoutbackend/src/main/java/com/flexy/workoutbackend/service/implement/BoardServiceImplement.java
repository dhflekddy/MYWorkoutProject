package com.flexy.workoutbackend.service.implement;

import java.util.ArrayList;
import java.util.List;

import org.apache.catalina.connector.Response;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.flexy.workoutbackend.dto.request.board.PatchBoardRequestDto;
import com.flexy.workoutbackend.dto.request.board.PostBoardRequestDto;
import com.flexy.workoutbackend.dto.request.board.PostCommentRequestDto;
import com.flexy.workoutbackend.dto.response.ResponseDto;
import com.flexy.workoutbackend.dto.response.board.DeleteBoardResponseDto;
import com.flexy.workoutbackend.dto.response.board.GetBoardResponseDto;
import com.flexy.workoutbackend.dto.response.board.GetCommentListResponseDto;
import com.flexy.workoutbackend.dto.response.board.GetParticipationListResponseDto;
import com.flexy.workoutbackend.dto.response.board.IncreaseViewCountResponseDto;
import com.flexy.workoutbackend.dto.response.board.PatchBoardResponseDto;
import com.flexy.workoutbackend.dto.response.board.PostBoardResponseDto;
import com.flexy.workoutbackend.dto.response.board.PostCommentResponseDto;
import com.flexy.workoutbackend.dto.response.board.PutParticipationResponseDto;
import com.flexy.workoutbackend.entity.BoardEntity;
import com.flexy.workoutbackend.entity.CommentEntity;
import com.flexy.workoutbackend.entity.ParticipationEntity;
import com.flexy.workoutbackend.entity.ImageEntity;
import com.flexy.workoutbackend.respository.BoardRepository;
import com.flexy.workoutbackend.respository.CommentRepository;
import com.flexy.workoutbackend.respository.ParticipationRepository;
import com.flexy.workoutbackend.respository.ImageRepository;
import com.flexy.workoutbackend.respository.UserRepository;
import com.flexy.workoutbackend.respository.resultSet.GetBoardResultSet;
import com.flexy.workoutbackend.respository.resultSet.GetCommentListResultSet;
import com.flexy.workoutbackend.respository.resultSet.GetParticipationListResultSet;
import com.flexy.workoutbackend.service.BoardService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class BoardServiceImplement implements BoardService {

    private final BoardRepository boardRepository;
    private final UserRepository userRepository;
    private final ImageRepository imageRepository;
    private final CommentRepository commentRepository;
    private final ParticipationRepository ParticipationRepository;

    @Override
    public ResponseEntity<? super PostBoardResponseDto> postBoard(PostBoardRequestDto dto, String userId) {
        try {
            boolean existeduserId = userRepository.existsByUserId(userId);
            if (!existeduserId)
                return PostBoardResponseDto.notExistUser();
            BoardEntity boardEntity = new BoardEntity(dto, userId);
            boardRepository.save(boardEntity);

            int board_number = boardEntity.getBoardNumber();
            List<String> boardImageList = dto.getBoardImageList();
            List<ImageEntity> imageEntities = new ArrayList<>();
            for (String image : boardImageList) {
                ImageEntity imageEntity = new ImageEntity(board_number, image);
                imageEntities.add(imageEntity);
            }
            imageRepository.saveAll(imageEntities);

        } catch (Exception exception) {
            exception.printStackTrace();
            return ResponseDto.databaseError();
        }
        return PostBoardResponseDto.success();
    }

    @Override
    public ResponseEntity<? super GetBoardResponseDto> getBoard(Integer boardNumber) {
        GetBoardResultSet resultSet = null;
        List<ImageEntity> imageEntities = new ArrayList<>();
        try {
            resultSet = boardRepository.getBoard(boardNumber);
            if (resultSet == null)
                return GetBoardResponseDto.notExistBoard();
            // System.out.println("boardNumber의값:" + boardNumber);
            // System.out.println("resultSet의 boardNumber의 값" + resultSet.getBoardNumber());

            imageEntities = imageRepository.findByBoardNumber(boardNumber);

            /*
             * 프론트에서의 화면랜더링시 반복적인 getBoardRequest API요청으로 한번을 조회해도 여러번 호출됨. 이러한 문제점을 해결하기위해
             * 아래의 코드들을 이 페이지 아래에 있는 increaseViewCount함수안으로 옮김
             */
            // BoardEntity boardEntity = boardRepository.findByBoardNumber(boardNumber);
            // boardEntity.increaseViewCount();
            // boardRepository.save(boardEntity);
        } catch (Exception exception) {
            exception.printStackTrace();
            return ResponseDto.databaseError();
        }
        return GetBoardResponseDto.success(resultSet, imageEntities);
    }

    @Override
    public ResponseEntity<? super PutParticipationResponseDto> putParticipation(Integer boardNumber, String userId) {
        Integer ParticipationCount;
        try {
            boolean existedUser = userRepository.existsByUserId(userId);
            if (!existedUser)
                return PutParticipationResponseDto.noExistUser();

            BoardEntity boardEntity = boardRepository.findByBoardNumber(boardNumber);
            if (boardEntity == null)
                return PutParticipationResponseDto.noExistBoard();

            ParticipationEntity ParticipationEntity = ParticipationRepository.findByBoardNumberAndUserId(boardNumber,
                    userId);
            if (ParticipationEntity == null) {
                ParticipationEntity = new ParticipationEntity(userId, boardNumber);
                ParticipationRepository.save(ParticipationEntity);
                boardEntity.increaseParticipationCount();
            } else {
                ParticipationRepository.delete(ParticipationEntity);
                boardEntity.decreaseParticipationCount();
            }
            boardRepository.save(boardEntity);

        } catch (Exception exception) {
            exception.printStackTrace();
            return ResponseDto.databaseError();
        }

        return PutParticipationResponseDto.success();
    }

    @Override
    public ResponseEntity<? super GetParticipationListResponseDto> getParticipationList(Integer boardNumber) {
        List<GetParticipationListResultSet> resultSets = new ArrayList<>();
        try {
            boolean existedBoard = boardRepository.existsByBoardNumber(boardNumber);
            if (!existedBoard)
                return GetParticipationListResponseDto.notExistBoard();

            resultSets = ParticipationRepository.getParticipationList(boardNumber);

        } catch (Exception exception) {
            exception.printStackTrace();
            return ResponseDto.databaseError();
        }

        return GetParticipationListResponseDto.success(resultSets);
    }

    @Override
    public ResponseEntity<? super PostCommentResponseDto> postComment(PostCommentRequestDto dto, String userId,
            Integer boardNumber) {

        try {
            BoardEntity boardEntity = boardRepository.findByBoardNumber(boardNumber);
            if (boardEntity == null)
                return PostCommentResponseDto.notExistBoard();

            boolean existedUser = userRepository.existsByUserId(userId);
            if (!existedUser)
                return PostCommentResponseDto.notExistUser();

            CommentEntity commentEntity = new CommentEntity(dto, boardNumber, userId);
            commentRepository.save(commentEntity);
            boardEntity.increaseCommentCount();
            boardRepository.save(boardEntity);
        } catch (Exception exception) {
            exception.printStackTrace();
            PostCommentResponseDto.databaseError();
        }

        return PostCommentResponseDto.success();
    }

    @Override
    public ResponseEntity<? super GetCommentListResponseDto> getComentList(Integer boardNumber) {
        List<GetCommentListResultSet> resultSets = new ArrayList<>();
        try {
            BoardEntity boardEntity = boardRepository.findByBoardNumber(boardNumber);
            if (boardEntity == null)
                return GetCommentListResponseDto.notExistBoard();

            resultSets = commentRepository.getCommentList(boardNumber);
        } catch (Exception exception) {
            exception.printStackTrace();
            return ResponseDto.databaseError();
        }
        return GetCommentListResponseDto.success(resultSets);
    }

    @Override
    public ResponseEntity<? super IncreaseViewCountResponseDto> increaseViewCount(Integer boardNumber) {
        try {
            BoardEntity boardEntity = boardRepository.findByBoardNumber(boardNumber);
            if (boardEntity == null)
                return IncreaseViewCountResponseDto.notExistBoard();

            boardEntity.increaseViewCount();
            boardRepository.save(boardEntity);

        } catch (Exception exception) {
            exception.printStackTrace();
            return ResponseDto.databaseError();
        }
        return IncreaseViewCountResponseDto.success();
    }

    @Override
    public ResponseEntity<? super DeleteBoardResponseDto> deleteBoard(Integer boardNumber, String userId) {
        try {
            boolean existeduserId = userRepository.existsByUserId(userId);
            if (!existeduserId)
                return DeleteBoardResponseDto.notExistUser();

            BoardEntity boardEntity = boardRepository.findByBoardNumber(boardNumber);
            if (boardEntity == null)
                return DeleteBoardResponseDto.notExistBoard();

            String writeruserId = boardEntity.getWriterId();
            boolean isWriter = writeruserId.equals(userId);
            if (!isWriter)
                return DeleteBoardResponseDto.noPermission();
            imageRepository.deleteByBoardNumber(boardNumber);
            commentRepository.deleteByBoardNumber(boardNumber);
            ParticipationRepository.deleteByBoardNumber(boardNumber);
            boardRepository.delete(boardEntity);
        } catch (Exception exception) {
            exception.printStackTrace();
            ResponseDto.databaseError();
        }
        return DeleteBoardResponseDto.success();
    }

    @Override
    public ResponseEntity<? super PatchBoardResponseDto> patchBoard(PatchBoardRequestDto requestDto,
            Integer boardNumber, String userId) {
        try {
            BoardEntity boardEntity = boardRepository.findByBoardNumber(boardNumber);
            if (boardEntity == null)
                return PatchBoardResponseDto.notExistBoard();

            boolean existeduserId = userRepository.existsByUserId(userId);
            if (!existeduserId)
                return PatchBoardResponseDto.notExistUser();

            String writeruserId = boardEntity.getWriterId();
            boolean isWriter = writeruserId.equals(userId);
            if (!isWriter)
                return DeleteBoardResponseDto.noPermission();

            boardEntity.patchBoard(requestDto);
            boardRepository.save(boardEntity);

            imageRepository.deleteByBoardNumber(boardNumber);

            List<String> boardImageList = requestDto.getBoardImageList();
            List<ImageEntity> imageEntities = new ArrayList<>();
            for (String image : boardImageList) {
                ImageEntity imageEntity = new ImageEntity(boardNumber, image);
                imageEntities.add(imageEntity);
            }
            imageRepository.saveAll(imageEntities);

        } catch (Exception exception) {
            exception.printStackTrace();
            ResponseDto.databaseError();
        }
        return PatchBoardResponseDto.success();
    }

}
