package com.engicodes.backend.exceptions.recipeexceptions;

import org.springframework.web.bind.annotation.ResponseStatus;

import static org.springframework.http.HttpStatus.NOT_MODIFIED;

@ResponseStatus(value = NOT_MODIFIED)
public class RecipeNotFoundException extends Exception{
    public RecipeNotFoundException(String message) {
        super(message);
    }
}
