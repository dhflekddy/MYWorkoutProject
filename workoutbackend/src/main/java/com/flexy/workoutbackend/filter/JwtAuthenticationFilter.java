package com.flexy.workoutbackend.filter;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.authentication.AbstractAuthenticationToken;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.WebAuthenticationDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.OncePerRequestFilter;

import com.flexy.workoutbackend.provider.JwtProvider;

import lombok.RequiredArgsConstructor;

//만든 JWT를 HTTP의 헤더인 Authorization: Bearer~~형식으로 클라이언트로 부터 날라오면 그것을 validate하여 필요한 부분을 
//처리해 줄 수 있는 지를 filter에서 하게 됩니다. 
@Component
@RequiredArgsConstructor // 필수 생성자를 만들어주는 Rombok의 어노테이션. 필수생성자인지는 final이 붙은 변수이면 필수 생성자를 만들어줌
public class JwtAuthenticationFilter extends OncePerRequestFilter {
    private final JwtProvider jwtProvider;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {
        try {
            String token = parseBearerToken(request);
            // Authorization이없거나 Bearer가 아닌경우, 바로 return해버린다
            if (token == null) {
                filterChain.doFilter(request, response);
                return;
            }
            // 여기까지 오면 Bearer토큰이라는 말이므로 provider에서 구현했던 validate함수를 이용하여 사용자의 id을 가져온다.
            String id = jwtProvider.validate(token);
            if (id == null) {
                filterChain.doFilter(request, response);
                return;
            }
            // 여기까지 오게 되면 context에 등록해주어야 합니다. UsernamePasswordAuthenticationToken이라는 객체를
            // 생성. 이객체는 사용자의 이름,
            // 비밀번호, 권한을 포함함(아래에서와 같이 비밀번호는 우선null로 설정함. )
            AbstractAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(id, null,
                    AuthorityUtils.NO_AUTHORITIES);
            authenticationToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));// 클라이언트측에서 인증요청한
                                                                                                       // 것에 대해 세부설정하는
                                                                                                       // 코드

            // 필터에서 얻은 정보를 컨트롤러에서 바로 사용할 수 없고 외부의 컨텍스트에 담고 사용하는데 그 컨텍스트를 만드는 코드
            SecurityContext securityContext = SecurityContextHolder.createEmptyContext();
            securityContext.setAuthentication(authenticationToken);

            SecurityContextHolder.setContext(securityContext);

        } catch (Exception exception) {
            exception.printStackTrace();
        }
        filterChain.doFilter(request, response);// 다음 필터로 넘기는 코드
    }

    /*
     * request의 헤더를 가져와 그 헤더의 Authorization의 키를 찾고 bearer인증을 확인.(좀더 구체적으로 설명하면 예를들어
     * 클라이언트측에서 로그인을 하고
     * 로그인 유저 정보를 서버로 부터 받아오고 싶을때, 처음에 로그인할시에 얻은 토큰 값을 http프로토콜의 헤더중 하나인
     * Authorication에 실려보내는 것이다.
     * 그 코드가 바로 아래에서 request.getHeader("Authorization");이다
     */
    // 토큰을 parsing해주는 것이므로 반환형은 String임
    private String parseBearerToken(HttpServletRequest request) {
        String authorization = request.getHeader("Authorization");
        boolean hasAuthorization = StringUtils.hasText(authorization);// http의 헤더중 authorization필드에 정보가 있는지를 확인
        if (!hasAuthorization)
            return null;
        boolean isBearer = authorization.startsWith("Bearer "); // (더 상세하게)Authorization의 값이 Bearer가 맞는지를 확인. Bearer다음에
                                                                // 반드시 한칸 띄워줘야 함
        if (!isBearer)
            return null;
        // 여기까지 왔으면 Bearer토큰 방식이라는 말이므로 토큰을 뽑아냄.
        String token = authorization.substring(7);
        return token;
    }
}
