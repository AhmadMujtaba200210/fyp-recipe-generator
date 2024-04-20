package com.engicodes.backend.controller.recipecontroller;

import lombok.Builder;

@Builder
public record NewRecipeRequest(
        String title,
        String ingredients,
        String instruction,
        String cuisine
) {
}
