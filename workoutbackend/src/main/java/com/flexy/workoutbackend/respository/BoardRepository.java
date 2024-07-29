package com.flexy.workoutbackend.respository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.flexy.workoutbackend.entity.BoardEntity;
import com.flexy.workoutbackend.respository.resultSet.GetBoardResultSet;

//JpaRespository찾아보기(2개의 제너릭을 받음. 첫번째 제너릭으로는 어떤 Entity의 레포지토리인지, 두번째 제너릭으로는 첫번째 Entity의 PK타입)
@Repository
public interface BoardRepository extends JpaRepository<BoardEntity, Integer> {

    boolean existsByBoardNumber(Integer boardNumber);

    BoardEntity findByBoardNumber(Integer boardNumber);

    @Query(value =
    // 아래는 DML에서 복사한 내용
    "SELECT " +
            "B.board_number AS boardNumber, " +
            "B.title AS title, " +
            "B.content AS content, " +
            "B.write_datetime AS write_datetime, " +
            "B.writer_id AS writer_id, " +
            "U.real_name AS real_name, " +
            "U.profile_image AS profile_image " +
            "FROM board AS B " +
            "INNER JOIN user AS U " +
            "ON U.user_id=B.writer_id " +
            "WHERE B.board_number = ?; ", // ?1의 의미는? getBoard함수의 첫번째 매개변수를 여기에 넣겠다는 의미
            nativeQuery = true)
    /*
     * BoardEntity에는 User테이블에만 있는 nickname과 profile_image가 존재하지 않음. 이 문제를 해결하기 위하여
     * Entity가 아닌ResultSet이라는 형태의 값을 만들어 준다! ResultSet은 인터페이스로 repository폴더안의
     * resultSet폴더안에 있음
     */
    GetBoardResultSet getBoard(Integer boardNumber);// 프론트로부터 받아온 boardNumber의 값을 넣어주면 그에 맞는
    // GetBoardResultSet을 가질수 있고
    // 그에 따라 위의 쿼리문에서 얻을 수 있는 boardNumber, title등등의 값을 GetBoardResultSet안에 있는 함수들을
    // 통해서 얻을 수 있는 것입니다.
}