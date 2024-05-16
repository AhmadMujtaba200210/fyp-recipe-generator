package com.engicodes.backend.controller.authcontroller;

public record AuthenticationResponse(
        String authToken,
        String refreshToken
) {
}
