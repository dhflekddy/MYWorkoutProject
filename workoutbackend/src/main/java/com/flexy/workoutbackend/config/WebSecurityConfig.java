package com.flexy.workoutbackend.config;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Configurable;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.flexy.workoutbackend.filter.JwtAuthenticationFilter;

import lombok.RequiredArgsConstructor;

@Configurable
@EnableWebSecurity
@RequiredArgsConstructor // 필수 생성자를 만들어주는 Rombok의 어노테이션. 필수생성자인지는 final이 붙은 변수이면 필수 생성자를 만들어줌
public class WebSecurityConfig {
    private final JwtAuthenticationFilter jwtAuthenticationFilter;

    @Bean
    protected SecurityFilterChain configure(HttpSecurity httpSecurity) throws Exception {
        System.out.println("인증진입");
        httpSecurity.cors().and()
                .csrf().disable() // 보통 API서버나 SPA를 사용하는 서비스 같은 경우 CSRF에 대한 대비를 하지 않는 편입니다;
                .httpBasic().disable()
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS).and()// 우리는 세션기반 인증을 하지 //
                                                                                                 // 않습니다.
                .authorizeRequests() // 인증과 관련된 요청처리

                .antMatchers("/", "/api/v1/auth/**", "api/v1/search/**", "file/**").permitAll()// API명세서 보면서 인증절차가 필요없는
                // 리소스 url 요청을 모두 permitAll()의 antMatchers에 넣어준다. 9강 18분
                .antMatchers(HttpMethod.GET, "api/v1/board/**", "api/v1/user/*").permitAll()
                .anyRequest().authenticated().and() // 어떠한 요청이 들어오든 인증을 실행한다
                .exceptionHandling().authenticationEntryPoint(new FailedAuthenticationEntryPoint());

        // UsernamePasswordAuthenticationFilter뒤에 jwtAuthenticationFilter를 붙인다
        httpSecurity.addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class);

        return httpSecurity.build();
    }
}

// 인증실패하는 등의 예외상황에 대한 클래스FailedAuthenticationEntryPoint
class FailedAuthenticationEntryPoint implements AuthenticationEntryPoint {

    @Override
    public void commence(HttpServletRequest request, HttpServletResponse response,
            AuthenticationException authException) throws IOException, ServletException {
        response.setContentType("application/json");
        response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
        response.getWriter().write("{\"code:\":\"AF\", \"message\": \"Authorization Failed.\"}");
    }

}
