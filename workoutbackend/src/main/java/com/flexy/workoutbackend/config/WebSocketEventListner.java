// package com.flexy.workoutbackend.config;

// import org.springframework.context.event.EventListener;
// import org.springframework.messaging.simp.SimpMessageSendingOperations;
// import org.springframework.messaging.simp.stomp.StompHeaderAccessor;
// import org.springframework.stereotype.Component;
// import org.springframework.web.socket.messaging.SessionDisconnectEvent;

// import com.flexy.workoutbackend.common.ChatMessage;
// import com.flexy.workoutbackend.common.ChatMessageType;

// import lombok.RequiredArgsConstructor;
// import lombok.extern.slf4j.Slf4j;

// @Component
// @RequiredArgsConstructor
// @Slf4j // 사용자 로그아웃시 정보를 기록하는 용도
// public class WebSocketEventListner {

// private final SimpMessageSendingOperations messageTemplate;
// @EventListener
// public void handlerWebSocketDisconnectListener(SessionDisconnectEvent event)
// {
// StompHeaderAccessor headerAccessor =
// StompHeaderAccessor.wrap(event.getMessage());
// String username = (String)
// headerAccessor.getSessionAttributes().get("username");
// if (username != null) {
// log.info("User disconnected: {}", username);
// var chatMessage = ChatMessage.builder()
// .type(ChatMessageType.LEAVE)
// .sender(username)
// .build();
// messageTemplate.convertAndSend("/topic/public", chatMessage);

// }
// }

// }
