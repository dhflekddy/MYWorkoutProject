package com.flexy.workoutbackend.respository.resultSet;

public interface GetBoardResultSet {
    Integer getBoardNumber();

    String getTitle();

    String getContent();

    String getWriteDatetime();

    String getWriterId();

    String getWriterRealName();

    String getWriterProfileImage();
}
