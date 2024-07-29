package com.flexy.workoutbackend.dto.object;

import java.util.ArrayList;
import java.util.List;

import com.flexy.workoutbackend.respository.resultSet.GetCommentListResultSet;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class CommentListItem {
    private String realName;
    private String profileImage;
    private String writeDatetime;
    private String content;

    public CommentListItem(GetCommentListResultSet resultSets) {
        this.realName = resultSets.getRealName();
        this.profileImage = resultSets.getProfileImage();
        this.writeDatetime = resultSets.getWriteDatetime();
        this.content = resultSets.getContent();
    }

    public static List<CommentListItem> copyList(List<GetCommentListResultSet> resultSets) {
        List<CommentListItem> list = new ArrayList<>();
        for (GetCommentListResultSet resultSet : resultSets)
            list.add(new CommentListItem(resultSet));
        return list;

    }
}
