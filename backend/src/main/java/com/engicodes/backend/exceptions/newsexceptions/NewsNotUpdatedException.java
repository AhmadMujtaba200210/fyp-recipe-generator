package com.engicodes.backend.exceptions.newsexceptions;

import org.springframework.web.bind.annotation.ResponseStatus;

import static org.springframework.http.HttpStatus.NOT_FOUND;

@ResponseStatus(value = NOT_FOUND)
public class NewsNotUpdatedException extends Exception {
    public NewsNotUpdatedException(String message) {
        super(message);
    }
}
