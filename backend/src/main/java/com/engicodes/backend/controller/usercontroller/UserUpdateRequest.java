package com.engicodes.backend.controller.usercontroller;

public record UserUpdateRequest(
        String firstName,
        String lastName,
        String email,
        String password
) {
}
