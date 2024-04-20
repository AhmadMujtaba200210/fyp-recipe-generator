package com.engicodes.backend.dto;

import lombok.Builder;

import java.util.UUID;

@Builder
public record UserDetailsDTO(
        UUID userId,
        String email,
        String fullName,
        String description,
        String location,
        String profession,
        int age
) {
}
