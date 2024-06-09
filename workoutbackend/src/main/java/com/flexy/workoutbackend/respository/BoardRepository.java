package com.flexy.workoutbackend.respository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.flexy.workoutbackend.entity.BoardEntity;

//JpaRespository찾아보기(2개의 제너릭을 받음. 첫번째 제너릭으로는 어떤 Entity의 레포지토리인지, 두번째 제너릭으로는 첫번째 Entity의 PK타입)

@Repository
public interface BoardRepository extends JpaRepository<BoardEntity, Integer> {

}
