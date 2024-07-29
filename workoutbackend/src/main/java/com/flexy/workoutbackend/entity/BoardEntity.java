package com.flexy.workoutbackend.entity;

import java.text.SimpleDateFormat;
import java.time.Instant;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.flexy.workoutbackend.dto.request.board.PatchBoardRequestDto;
import com.flexy.workoutbackend.dto.request.board.PostBoardRequestDto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity(name = "board")
@Table(name = "board")
public class BoardEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // boardNumber는 AutoIncrement이다. GenerationType을 IDENTITY로 해주면
                                                        // AutoIncrement의 역할을 함
    private int boardNumber;
    private String title;
    private String content;
    private String writeDatetime;
    private int participationCount;
    private int commentCount;
    private int viewCount;
    private String writerId;

    public BoardEntity(PostBoardRequestDto dto, String writerId) {
        Date now = Date.from(Instant.now());
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String writeDatetime = simpleDateFormat.format(now);

        this.title = dto.getTitle();
        this.content = dto.getContent();
        this.writeDatetime = writeDatetime;
        this.participationCount = 0;
        this.commentCount = 0;
        this.viewCount = 0;
        this.writerId = writerId;
    }

    public void increaseViewCount() {
        this.viewCount++;
    }

    public void increaseParticipationCount() {
        this.participationCount++;
    }

    public void decreaseParticipationCount() {
        this.participationCount--;
    }

    public void increaseCommentCount() {
        this.commentCount++;
    }

    public void decreaseCommentCount() {
        this.commentCount--;
    }

    public void patchBoard(PatchBoardRequestDto dto) {
        this.title = dto.getTitle();
        this.content = dto.getContent();
    }

}
