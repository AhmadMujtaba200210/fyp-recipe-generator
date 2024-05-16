package com.engicodes.backend.controller.authcontroller;

import org.springframework.web.multipart.MultipartFile;

public record RegisterRequest(
        String firstName,
        String lastName,
        String email,
        String password,
        MultipartFile image,
        String picturePath
) {
}
