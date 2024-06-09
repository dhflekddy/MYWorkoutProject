package com.flexy.workoutbackend.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.lang.Nullable;

import com.flexy.workoutbackend.dto.request.auth.SignUpRequestDto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity(name = "user") // 해당 클래스(UserEntity)를 엔터디로 사용하고 그 엔터티의 이름은 user로 사용하겠다는 의미
@Table(name = "user") // 해당 클래스(UserEntity) 엔터티(user)를 DB의 어떤 테이블과 연결시킬지 정해주는 어노페이션. 여기서는 이름이 user인
                      // 테이블(릴레이션)과 연계된다
// UserEntity라는 클래스의 멤버변수를 정해줄때는 기존에 DB에 정의한 user테이블의 컬럼을 보면서 정의해 준다!
public class UserEntity {
    @Id // 을 PK로 사용하고 있으므로 붙여준다
    private String userId;
    private String password;
    private String realName;
    private String telNumber;
    private String profileImage;
    private boolean agreedPersonal;

    public UserEntity(SignUpRequestDto dto) {
        this.userId = dto.getId();
        this.password = dto.getPassword();
        this.realName = dto.getRealName();
        this.telNumber = dto.getTelNumber();
        this.agreedPersonal = dto.getAgreedPersonal();
    }
}
