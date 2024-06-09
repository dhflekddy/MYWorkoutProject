package com.flexy.workoutbackend.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry corsRegistry) {
        corsRegistry
                .addMapping("/**")
                .allowedMethods("*")// 모든 메서드에 대해
                .allowedOrigins("*");// 그리고 모든 오리진에 대해 cors정책을 허용하겠다는 의미!
    }

}
