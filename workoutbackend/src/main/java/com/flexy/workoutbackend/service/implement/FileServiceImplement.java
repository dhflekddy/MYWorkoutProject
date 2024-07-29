package com.flexy.workoutbackend.service.implement;

import java.io.File;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.flexy.workoutbackend.service.FileService;

@Service
public class FileServiceImplement implements FileService {

    // resources폴더의 application.properties파일에 있는 file.path의 값을 가져옴
    @Value("${file.path}")
    private String filePath; // filePath는 resources폴더의 application.properties에 file.path를 지정해 준다.
    @Value("${file.url}")
    private String fileUrl;

    @Override
    public String upload(MultipartFile file) {
        if (file.isEmpty())
            return null;

        String originalFileName = file.getOriginalFilename();
        String extension = originalFileName.substring(
                originalFileName.lastIndexOf(".")); // File의 확장자를 구하는 코드
        String uuid = UUID
                .randomUUID()
                .toString(); // 임시, 랜덤한 파일명
        String saveFileName = uuid + extension;
        String savePath = filePath + saveFileName; // 파일이 저장될 경로와 저장될 파일의 이름을 가지고 있는 savePath
        // (아직까지는 확실치 않지만 내컴터에 있는 파일을 upload하기전에 내 컴터의 다른 경로에 또 파일을 저장하는 것 같음)

        try {
            file.transferTo(new File(savePath)); // 여기까지 완료되면 클라이언트가 업로드한 이미지 파일이 내 컴퓨터(서버)의 폴더 안에 저장되는 것
        } catch (Exception exception) {
            exception.printStackTrace();
            return null;
        }
        String url = fileUrl + saveFileName;
        return url;
    }

    @Override
    public Resource getImage(String fileName) {
        Resource resource = null;
        try {
            resource = new UrlResource("file:" + filePath + fileName);
        } catch (Exception exception) {
            exception.printStackTrace();
            return null;
        }
        return resource;
    }
}
