package com.flexy.workoutbackend.dto.object;

import java.util.ArrayList;
import java.util.List;

import com.flexy.workoutbackend.respository.resultSet.GetParticipationListResultSet;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class ParticipationListItem {
    private String userId;
    private String realName;
    private String profileImage;

    public ParticipationListItem(GetParticipationListResultSet resultSet) {
        this.userId = resultSet.getUserId();
        this.realName = resultSet.getRealName();
        this.profileImage = resultSet.getProfileImage();
    }

    public static List<ParticipationListItem> copyList(List<GetParticipationListResultSet> resultSets) {
        List<ParticipationListItem> list = new ArrayList<>();
        for (GetParticipationListResultSet resultSet : resultSets) {
            ParticipationListItem favoriteListItem = new ParticipationListItem(resultSet);
            list.add(favoriteListItem);
        }
        return list;
    }
}
