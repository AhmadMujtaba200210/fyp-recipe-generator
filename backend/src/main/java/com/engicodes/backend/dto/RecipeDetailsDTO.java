package com.engicodes.backend.dto;

import lombok.Builder;

import java.time.LocalDate;
import java.util.List;

@Builder
public record RecipeDetailsDTO (
        Integer recipe_id,
        String title,
        String [] ingredients,
        String [] instructions,
        LocalDate date,
        String cuisine
){
}
