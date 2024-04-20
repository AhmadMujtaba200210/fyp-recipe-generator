package com.engicodes.backend.exceptions.recipeexceptions;

import org.springframework.web.bind.annotation.ResponseStatus;

import static org.springframework.http.HttpStatus.*;

@ResponseStatus(value = NOT_FOUND)
public class RecipeNotUpdatedException extends Exception {
    public RecipeNotUpdatedException(String message) {
        super(message);
    }
}
