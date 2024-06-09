package com.flexy.workoutbackend.respository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.flexy.workoutbackend.entity.UserEntity;
//JpaRepository를 사용한다는 말은 그 파일에 쿼리 메서드를 사용할 수 있다는 것이고 이것이 곧 SQL쿼리문이다.
//JpaRespository찾아보기(2개의 제너릭을 받음. 첫번째 제너릭으로는 어떤 Entity의 레포지토리인지, 두번째 제너릭으로는 첫번째 Entity의 PK타입)

@Repository
public interface UserRepository extends JpaRepository<UserEntity, String> {

    /*
     * 아래와 같이하면 sql문을 저절로 만들어 실행합니다(JPA의 장점인 쿼리 메서드. 단 이름이 정확히 existsByEmail이어야 함.
     * 예를들어 existsBy~~, findBy~~여야함).
     * user테이블에 매개변수로 받아온 이메일의 값이 이미 있다면 true를 반환함
     */
    boolean existsByUserId(String userId);

    // boolean existsByRealname(String nickname);// existsBy가 존재하는지 찾는다의 의미이고 그다음이
    // where에 오는 값임. 즉 where=Nickname(첫번째 문자는
    // // 반드시 대문자로)

    boolean existsByTelNumber(String telNumber);

    UserEntity findByUserId(String id);//
}
