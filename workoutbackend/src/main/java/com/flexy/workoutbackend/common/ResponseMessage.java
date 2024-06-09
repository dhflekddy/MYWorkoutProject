package com.flexy.workoutbackend.common;

public interface ResponseMessage {
        // HTTP STATUS 200
        public static final String SUCCESS = "Success";

        // HTTP STATUS 400
        String VALIDATION_FAILED = "Validation failed.";
        String DUPLICATE_ID = "Duplicate ID.";
        String DUPLICATE_NICKNAME = "Duplicate nickname.";
        String DUPLICATE_TEL_NUMBER = "Duplicate tel number.";
        String NOT_EXISTED_USER = "Not existed user.";
        String NOT_EXISTED_BOARD = "Not existed board.";

        // HTTP STATUS 401
        String SIGN_IN_FAIL = "Sign in fail.";
        String AUTHORIZATION_FAIL = "Authorization fail.";

        // HTTP STATUS 403
        String NO_PERMISSION = "No permission.";

        // HTTP STATUS 500
        String DATABASE_ERROR = "Database error.";

}
