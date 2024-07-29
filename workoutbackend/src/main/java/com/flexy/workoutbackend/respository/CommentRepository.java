package com.flexy.workoutbackend.respository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.flexy.workoutbackend.entity.CommentEntity;
import com.flexy.workoutbackend.respository.resultSet.GetCommentListResultSet;

//JpaRespository찾아보기(2개의 제너릭을 받음. 첫번째 제너릭으로는 어떤 Entity의 레포지토리인지, 두번째 제너릭으로는 첫번째 Entity의 PK타입)

@Repository
public interface CommentRepository extends JpaRepository<CommentEntity, Integer> {
    @Query(value = "SELECT " +
            "U.real_name AS real_name, " +
            "U.profile_image AS profile_image, " +
            "C.write_datetime AS write_datetime, " +
            "C.content AS content " +
            "FROM comment AS C INNER JOIN user AS U " +
            "ON C.user_id=U.user_id " +
            "WHERE C.board_number= ?1 " +
            "ORDER BY write_datetime DESC; ", nativeQuery = true)
    List<GetCommentListResultSet> getCommentList(Integer boardNumber);

    @Transactional
    void deleteByBoardNumber(Integer boardNumber);
}
