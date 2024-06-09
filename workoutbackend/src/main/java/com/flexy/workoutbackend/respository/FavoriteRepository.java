package com.flexy.workoutbackend.respository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.flexy.workoutbackend.entity.FavoriteEntity;
import com.flexy.workoutbackend.entity.primaryKey.FavoritePk;

@Repository
/*
 * JpaRespository찾아보기(2개의 제너릭을 받음. 첫번째 제너릭으로는 어떤 Entity의 레포지토리인지, 두번째 제너릭으로는 첫번째
 * Entity의 PK타입)
 * Favorite엔터티 같은 경우 2개의 외래키가 하나의 pk의 역할을 하는데 어떻게 해야하나? 이럴때는 pk의 타입을 만들어 주어야 함.
 * entity파일에 primaryKey파일을 만들어 준고 그 아래 FavoritePk.java파일을 만들어 준다.
 */
public interface FavoriteRepository extends JpaRepository<FavoriteEntity, FavoritePk> {

}
