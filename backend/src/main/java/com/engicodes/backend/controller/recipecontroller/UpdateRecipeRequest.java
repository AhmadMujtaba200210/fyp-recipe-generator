package com.engicodes.backend.controller.recipecontroller;

public record UpdateRecipeRequest(
        String title,
        String ingredients,
        String instruction,
        String cuisine
) {
}
