package com.flexy.workoutbackend.respository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.flexy.workoutbackend.entity.ParticipationEntity;
import com.flexy.workoutbackend.entity.primaryKey.ParticipationPk;
import com.flexy.workoutbackend.respository.resultSet.GetParticipationListResultSet;

@Repository
/*
 * JpaRespository찾아보기(2개의 제너릭을 받음. 첫번째 제너릭으로는 어떤 Entity의 레포지토리인지, 두번째 제너릭으로는 첫번째
 * Entity의 PK타입)
 * Participation엔터티 같은 경우 2개의 외래키가 하나의 pk의 역할을 하는데 어떻게 해야하나? 이럴때는 pk의 타입을 만들어
 * 주어야 함.
 * entity파일에 primaryKey파일을 만들어 준고 그 아래 ParticipationPk.java파일을 만들어 준다.
 */
public interface ParticipationRepository extends JpaRepository<ParticipationEntity, ParticipationPk> {
    @Query(value = "SELECT " +
            "U.user_id AS user_id, " +
            "U.real_name AS real_name, " +
            "U.profile_image AS profileImage " +
            "FROM participation AS P INNER JOIN user AS U " +
            "ON P.user_id=U.user_id " +
            "WHERE P.board_number=?; ", nativeQuery = true)
    List<GetParticipationListResultSet> getParticipationList(Integer boardNumber);

    ParticipationEntity findByBoardNumberAndUserId(Integer boardNumber, String userId);

    @Transactional
    void deleteByBoardNumber(Integer boardNumber);
}
