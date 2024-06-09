package com.flexy.workoutbackend.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.Table;

import com.flexy.workoutbackend.entity.primaryKey.FavoritePk;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity(name = "favorite")
@Table(name = "favorite")
// favorite테이블 같은 경우 2개의 외래키가 하나의 pk의 역할을 한다. 이럴때는 2개의 속성 모두에 @Id 어노테이션을 붙여준다.
@IdClass(FavoritePk.class) // ID가 어떤 클래스를 따르는지 알려주는 어노테이션 여기서는 FavoritePK를 따름
public class FavoriteEntity {
    @Id
    private String userId;// 외래키
    @Id
    private int boardNumber;// 외래키
}
