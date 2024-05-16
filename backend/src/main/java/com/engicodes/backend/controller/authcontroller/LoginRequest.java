package com.engicodes.backend.controller.authcontroller;

public record LoginRequest(
        String email,
        String password
) {
}
