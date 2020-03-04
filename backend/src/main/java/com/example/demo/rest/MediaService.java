package com.example.demo.rest;

import org.apache.commons.io.IOUtils;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.FileSystemResource;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletResponse;
import java.io.File;
import java.io.IOException;
import java.util.UUID;

@RestController
public class MediaService {

    @Value("${mediastorage.path}")
    private String storagePath;

    private static final String PROFILES = "/profiles";
    private static final String USERS = "/users";
    private static final String PRIVATE = "/private";

    @GetMapping(value = "/api/images/private/{profileId}/{filename}")
    public void getPrivateImage(@PathVariable UUID profileId, @PathVariable String filename,
                                HttpServletResponse response, UsernamePasswordAuthenticationToken userToken) throws IOException {
        if (userToken == null || userToken.getName() == null || profileId == null || filename == null) {
            response.setStatus(HttpStatus.BAD_REQUEST.value());
            return;
        }
        FileSystemResource resource = new FileSystemResource(buildResourcePath(userToken.getName(), profileId.toString(), filename));
        if (resource.exists()) {
            response.setContentType(MediaType.IMAGE_JPEG_VALUE);
            IOUtils.copy(resource.getInputStream(), response.getOutputStream());
        } else {
            response.setStatus(HttpStatus.BAD_REQUEST.value());
        }
    }

    @PostMapping(value = "/api/images/private/{profileId}/{filename}/delete")
    public void delete(@PathVariable UUID profileId, @PathVariable String filename, HttpServletResponse response, UsernamePasswordAuthenticationToken userToken) throws IOException {
        if (userToken == null || userToken.getName() == null || profileId == null || filename == null) {
            response.setStatus(HttpStatus.BAD_REQUEST.value());
            return;
        }
        FileSystemResource resource = new FileSystemResource(buildResourcePath(userToken.getName(), profileId.toString(), filename));
        if (resource.exists()) {
            resource.getFile().delete();
        } else {
            response.setStatus(HttpStatus.BAD_REQUEST.value());
        }
    }

    @PostMapping("/api/images/private/{profileId}/upload")
    public void handleFileUpload(@RequestParam("file") MultipartFile file, @PathVariable String profileId,
                                 UsernamePasswordAuthenticationToken token, HttpServletResponse response) throws IOException {
        if (token == null || token.getName() == null) {
            response.setStatus(HttpStatus.BAD_REQUEST.value());
            return;
        }

        FileSystemResource resource = new FileSystemResource(buildResourcePath(token.getName(), profileId, file.getOriginalFilename()));
        if (resource.exists()) {
            String existsName = file.getOriginalFilename();
            String filename = existsName.substring(0, existsName.lastIndexOf("."));
            String fileExtension = existsName.substring(existsName.lastIndexOf("."));

            for (int i = 1; ; i++) {
                resource = new FileSystemResource(buildResourcePath(token.getName(), profileId, filename + "(" + i + ")" + fileExtension));
                if (!resource.exists()) {
                    break;
                }
                if (i == 10) {
                    throw new IllegalStateException("Too many files with same name. Please rename the file.");
                }
            }
        }

        File f = resource.getFile();
        f.mkdirs();
        file.transferTo(f);
    }

    private String buildResourcePath(String username, String profileId, String filename) {
        StringBuilder builder = new StringBuilder();
        builder.append(storagePath);
        builder.append(USERS);
        builder.append("/");
        builder.append(username);
        builder.append(PROFILES);
        builder.append("/");
        builder.append(profileId);
        builder.append("/private/");
        builder.append(filename);
        return builder.toString();
    }
}
