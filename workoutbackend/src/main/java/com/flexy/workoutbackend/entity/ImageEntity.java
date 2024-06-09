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
@Entity(name = "image")
@Table(name = "image")
public class ImageEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // boardNumber는 AutoIncrement이다. GenerationType을 IDENTITY로 해주면
                                                        // AutoIncrement의 역할을 함
    private int sequence;
    private int boardNumber;
    private String image;

}
