package com.engicodes.backend.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.UNAUTHORIZED)
public class ResourceNotAuthorisedException extends Exception{
    public ResourceNotAuthorisedException(String message) {
        super(message);
    }
}
