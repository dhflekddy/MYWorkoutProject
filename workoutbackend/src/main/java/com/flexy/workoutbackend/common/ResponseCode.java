package com.flexy.workoutbackend.common;

import javax.print.DocFlavor.STRING;

//API의 Response코드를 다루는 ResponseCode클래스
public interface ResponseCode {
    // 인터페이스에서 변수는 언제나 public static final이어야 하기 때문에 모든 변수를 인터페이스에서는 public static
    // final로 인식함.
    // 따라서 public static final을 지워도 public static final로 인식하게 됩니다. 자바 11부터 이렇게
    // 동작합니다.

    // HTTP STATUS 200
    public static final String SUCCESS = "SU";

    // HTTP STATUS 400
    String VALIDATION_FAILED = "VF";
    String DUPLICATE_ID = "DI";
    String DUPLICATE_NICKNAME = "DN";
    String DUPLICATE_TEL_NUMBER = "DT";
    String NOT_EXISTED_USER = "NU";
    String NOT_EXISTED_BOARD = "NB";

    // HTTP STATUS 401
    String SIGN_IN_FAIL = "SF";
    String AUTHORIZATION_FAIL = "AF";

    // HTTP STATUS 403
    String NO_PERMISSION = "NP";

    // HTTP STATUS 500
    String DATABASE_ERROR = "DBE";
}
