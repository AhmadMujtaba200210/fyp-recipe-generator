package com.engicodes.backend.exceptions;

import org.springframework.web.bind.annotation.ResponseStatus;

import static org.springframework.http.HttpStatus.NOT_FOUND;
import static org.springframework.http.HttpStatus.NOT_MODIFIED;

@ResponseStatus(value = NOT_FOUND)
public class ResourceNotFoundException extends Exception{
    public ResourceNotFoundException(String message) {
        super(message);
    }
}
