package com.flexy.workoutbackend.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity(name = "board_list_view")
@Table(name = "board_list_view")
// view같은 경우 따로 pk를 지정하지 않음. 다만 board가 기본이기 때문에 board_number로 판단이 가능함
public class BoardListViewEntity {
    @Id // 임시로 pk를 지정한 것뿐이므로 GenerationType관련 어노테이션은 필요없음
    private int boardNumber;
    private String title;
    private String content;
    private String titleImage;
    private int favoriteCount;
    private int commentCount;
    private int viewCount;
    private String writeDatetime; // DB에서는 datetime타입이지만 서버에서는 String 타입으로 해줌
    private String writerEmail;
    private String writerNickname;
    private String writerProfileImage;
    private String userEmail;
}
