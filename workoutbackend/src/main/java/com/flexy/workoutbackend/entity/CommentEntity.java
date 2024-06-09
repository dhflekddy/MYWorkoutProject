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
@Entity(name = "comment")
@Table(name = "comment")
public class CommentEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // boardNumber는 AutoIncrement이다. GenerationType을 IDENTITY로 해주면
                                                        // AutoIncrement의 역할을 함
    private int commentNumber;
    private String content;
    private String userId;
    private int boardNumber;// 외래키
    private String writeDatetime; // DB에서는 datetime타입이지만 서버에서는 String 타입으로 해줌
}
