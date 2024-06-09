package com.flexy.workoutbackend.provider;

import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.Date;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
// Jwt를 발급해주는 provider

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@Component
public class JwtProvider {
    @Value("${secret-key}") // application.properties파일에 저장되어 있는 secret-key변수
    private String secretKey;// = "S3cr3tK3y"

    // JWT는 JSON이기 때문에 일반적으로 STRING임. id을 받아와서 그것을 create함수에서 JWT(String)으로 만들어
    // 주겠습니다.
    public String create(String id) {
        Date expireDate = Date.from(Instant.now().plus(1, ChronoUnit.HOURS)); // 한시간 짜리의 JWT를 만듬
        String jwt = Jwts.builder()// JWT를 생성
                .signWith(SignatureAlgorithm.HS256, secretKey)// 이게 바로 ES256알고리즘과 서버만 알고있는 비밀키를 이용하여 서명을 만드는 과정
                .setSubject(id).setIssuedAt(new Date()).setExpiration(expireDate)// id을 대상으로 jwt를 만들기 위함. jwt발행시각과
                                                                                    // 만료시각까지 설정함
                .compact();// 위의 정보를 가진 jwt를 압축
        return jwt;
    }

    // 클라이언트로부터 받은 JWT을 검증해주는 함수. JWT를 검증한후 payload에 있는 내용물인 id(Subject)을 꺼냄
    public String validate(String jwt) {
        Claims claims = null;
        try {
            claims = Jwts.parser().setSigningKey(secretKey).parseClaimsJws(jwt).getBody();
        } catch (Exception exception) {
            exception.printStackTrace();
            return null;
        }
        return claims.getSubject();
    }

}
