package com.engicodes.backend.controller.usercontroller;


import com.engicodes.backend.exceptions.RequestValidationException;
import com.engicodes.backend.exceptions.ResourceDuplicationException;
import com.engicodes.backend.exceptions.ResourceNotFoundException;
import com.engicodes.backend.jwt.JWTUtil;
import com.engicodes.backend.service.userservice.UserService;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.UUID;

@RestController
@RequestMapping(value = "/api/v1/user")
public class UserController {
    private final UserService userService;
    private final JWTUtil jwtUtil;

    public UserController(UserService userService, JWTUtil jwtUtil) {
        this.userService = userService;
        this.jwtUtil = jwtUtil;
    }

    @PostMapping(
            value = "{userId}/profile-image",
            consumes = MediaType.MULTIPART_FORM_DATA_VALUE
    )
    public void uploadUserProfileImage(
            @PathVariable("userId") UUID userId,
            @RequestParam("file") MultipartFile file
    ) {
        userService.uploadUserProfileImage(userId,file);
    }

    @GetMapping(
            value = "{userId}/profile-image",
            consumes = MediaType.MULTIPART_FORM_DATA_VALUE
    )
    public byte [] getUserProfileImage(
            @PathVariable("userId") UUID userId
    ) {
        return userService.getUserProfileImage(userId);
    }

    @GetMapping("/user/{email}")
    public ResponseEntity<?> getUser(@PathVariable String email) throws ResourceNotFoundException {
        return ResponseEntity.ok(userService.getUserByEmail(email));
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getUser(@PathVariable UUID id) throws ResourceNotFoundException {
        return ResponseEntity.ok(userService.getUserById(id));
    }
    @GetMapping("/details/{id}")
    public ResponseEntity<?> getUserDetails(@PathVariable UUID id) throws ResourceNotFoundException {
        return ResponseEntity.ok(userService.getUserDetailsById(id));
    }
    @GetMapping
    public ResponseEntity<?> getUser() {
        return ResponseEntity.ok(userService.getUserList());
    }

    @PutMapping("/update/{email}")
    public void updateUser(@RequestBody UserUpdateRequest userUpdateRequest, @PathVariable String email) throws ResourceDuplicationException, ResourceNotFoundException, RequestValidationException {
        userService.updateUser(userUpdateRequest, email);
    }

    @DeleteMapping("/delete/{email}")
    public void deleteUser(@PathVariable String email) throws ResourceNotFoundException {
        userService.deleteUser(email);
    }
}
