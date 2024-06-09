package com.flexy.workoutbackend.service.implement;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.flexy.workoutbackend.dto.request.auth.SignInRequestDto;
import com.flexy.workoutbackend.dto.response.auth.SignInResponseDto;
import com.flexy.workoutbackend.dto.response.ResponseDto;
import com.flexy.workoutbackend.dto.request.auth.SignUpRequestDto;
import com.flexy.workoutbackend.dto.response.auth.SignUpResponseDto;
import com.flexy.workoutbackend.entity.UserEntity;
import com.flexy.workoutbackend.respository.UserRepository;
import com.flexy.workoutbackend.service.AuthService;
import com.flexy.workoutbackend.provider.JwtProvider;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
/*
 * RequiredArgsconstructor라는 것이 정확하게 클래스안에 주워진 final 이붙은 멤버변수를 매개변수로 갖는 생성자를
 * 코딩하는 것과 같은 교과임.
 * 즉 코드안에
 * public AuthServiceImplement(UserRepository userRepository){
 *
 * } 를 넣은 것과 같은 효과임
 */
public class AuthServiceImplement implements AuthService {

    private final UserRepository userRepository; // @Autowired가 생략되어도 생성자는 한개만 존재할 수 있으므로 자동으로 Autowired가 된것임

    private PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    @Autowired
    JwtProvider jwtProvider;

    @Override
    public ResponseEntity<? super SignUpResponseDto> signUp(SignUpRequestDto dto) {
        /*
         * 아래의 코드는 구조적으로 Service가 Repository를 거쳐 구현되는 것을 보여주고 있는 것이다. repository폴더에 있는
         * 아래 클래스는 모두 JPA의
         * 장점인 쿼리 메서드(예를들면 existsByid)를 사용하고 있는 것이다
         */

        try {
            // System.out.println("나마에와" + dto.getRealName());

            String id = dto.getId();
            boolean existedId = userRepository.existsById(id);
            if (existedId)
                return SignUpResponseDto.duplicateId();

            // String realname = dto.getRealname();
            // boolean existedRealname = userRepository.existsByRealname(realname);
            // if (existedname)
            // return SignUpResponseDto.duplicateRealname();

            String telNumber = dto.getTelNumber();
            System.out.println(telNumber);
            boolean existedTelNumber = userRepository.existsByTelNumber(telNumber);
            if (existedTelNumber)
                return SignUpResponseDto.duplicateTelnumber();

            // 위의 과정을 모두 거치면 다음단계로 요청으로 들어온 데이터중 password를 암호화하여 db에 저장하여 Sign up 기능을 완성해
            // 나간다

            String password = dto.getPassword();
            String encodedPassword = passwordEncoder.encode(password); // passwordEncoder를 통해 일반 암호를 암호화해줌
            dto.setPassword(encodedPassword); // 그리고 그 암호화된 암호로 dto의 암호를 다시 setting해줌
            UserEntity userEntity = new UserEntity(dto); // JPA의 ENTITY는 테이블에서의 하나의 레코드임
            userRepository.save(userEntity); // ENTITY를 userRepository에 저장함(여기서 save도 쿼리 메서드이고 save하면 DB에 저장이 됨)
            // 이상으로 벡엔드에서 회원가입 기능을 모두 구현하게 된것!!! 다음은 controller작업!(이상을 과정1. 이라 하겠다. 과정2는
            // controller의 AuthController에 있음)
        } catch (Exception exception) {

            exception.printStackTrace();
            return ResponseDto.databaseError(); // 작업중 발생할 수 있는 에러는 DB에러가 대부분이기 때문에 이렇게 해줌
        }
        return SignUpResponseDto.success();

    }

    @Override
    public ResponseEntity<? super SignInResponseDto> signIn(SignInRequestDto dto) {

        String token = null;

        try {
            String id = dto.getId();
            UserEntity userEntity = userRepository.getById(id);// findById에서 오류나서 바꿈
            if (userEntity == null)
                return SignInResponseDto.signInFail();
            String encodedPassword = userEntity.getPassword();
            String password = dto.getPassword();
            boolean isMatched = passwordEncoder.matches(password, encodedPassword);
            if (!isMatched)
                return SignInResponseDto.signInFail();

            token = jwtProvider.create(id);
        } catch (Exception exception) {
            exception.printStackTrace();
            return ResponseDto.databaseError();
        }
        return SignInResponseDto.success(token);
        // 이상으로 로그인의 벡엔드처리는 마무리짖는다. 다음으로는 Controller의 로그인 기능을 처리해 주기로 한다
    }

}
