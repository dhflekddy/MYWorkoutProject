package com.flexy.workoutbackend.entity.primaryKey;

import java.io.Serializable;

import javax.persistence.Column;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
/*
 * 이 파일을 만든 목적은 Favorite엔터티의 pk의 타입을 정의해 주기 위해서이다. 2개의 속성이 합쳐져 하나의 pk의 역할을 하고
 * 있는데 이를 구현해
 * 주기 위해 Serializable인터페이스를 구현해 준다.
 * 아래와 같이 해주면 2개의 속성을 하나의 pk로 사용해 준다는 의미가됨.
 */
public class FavoritePk implements Serializable {
    @Column(name = "user_id")
    private String userId;
    @Column(name = "board_number")
    private int boardNumber;

}
