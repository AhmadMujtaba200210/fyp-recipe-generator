package com.engicodes.backend.controller.blogcontroller;

public record UpdateBlogRequest(
        String title,
        String description
) {
}
