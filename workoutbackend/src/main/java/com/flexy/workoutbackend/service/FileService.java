package com.flexy.workoutbackend.service;

import org.springframework.core.io.Resource;
import org.springframework.web.multipart.MultipartFile;

public interface FileService {
    String upload(MultipartFile file);// file에 접근하여 url(String)을 반환해 주는 함수

    Resource getImage(String fileName);
}
