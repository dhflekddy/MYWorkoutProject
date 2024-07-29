// package com.flexy.workoutbackend.controller;

// import org.springframework.messaging.handler.annotation.MessageMapping;
// import org.springframework.messaging.handler.annotation.Payload;
// import org.springframework.messaging.handler.annotation.SendTo;
// import org.springframework.messaging.simp.SimpMessageHeaderAccessor;
// import org.springframework.stereotype.Controller;

// import com.flexy.workoutbackend.common.ChatMessage;

// @Controller
// public class ChatController {
// @MessageMapping("/chat.sendMessage")
// @SendTo("/topic/public") // 어떤 임의의 메시지 보낼때마다 /topic/public으로 보내짐
// public ChatMessage sendMessage(@Payload ChatMessage chatMessage) {
// return chatMessage;
// }

// @MessageMapping("/chat.addUser")
// @SendTo("/topic/public")
// public ChatMessage addUser(@Payload ChatMessage chatMessage,
// SimpMessageHeaderAccessor headerAccessor) {
// // Add username in websocket session
// headerAccessor.getSessionAttributes().put("username",
// chatMessage.getSender());
// return chatMessage;
// }
// }
