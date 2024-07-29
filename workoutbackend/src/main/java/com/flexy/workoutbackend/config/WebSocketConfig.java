package com.flexy.workoutbackend.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.simp.config.MessageBrokerRegistry;
import org.springframework.web.socket.config.annotation.EnableWebSocket;
import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;
import org.springframework.web.socket.config.annotation.StompEndpointRegistry;
import org.springframework.web.socket.config.annotation.WebSocketMessageBrokerConfigurer;

import lombok.RequiredArgsConstructor;

@Configuration
@EnableWebSocket
@EnableWebSocketMessageBroker
@RequiredArgsConstructor
public class WebSocketConfig implements WebSocketMessageBrokerConfigurer {
    @Override
    public void registerStompEndpoints(StompEndpointRegistry registry) {// Simple Text Oriented Message Protocol
        registry.addEndpoint("/ws").setAllowedOrigins("*").withSockJS();
    }

    @Override
    public void configureMessageBroker(MessageBrokerRegistry registry) {
        // sub가 prefix로 붙은 destination의 클라이언트에게 메시지를 보낼 수 있도록 Simple Broker를 등록
        registry.enableSimpleBroker("/sub");// 해당 주소를 구독하고 있는 클라이언트들에게 메세지 전달

        // pub가 prefix로 붙은 메시지들은 @MessageMapping이 붙은 method로 바운드된다.
        registry.setApplicationDestinationPrefixes("/pub");
    }

    // private final WebSocketHandler webSocketHandler;

    // @Override
    // public void registerWebSocketHandlers(WebSocketHandlerRegistry registry) {
    // registry.addHandler(webSocketHandler, "/아무거나해요").setAllowedOrigins("*");
    // }

}
