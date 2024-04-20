package com.engicodes.backend.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.BAD_REQUEST)
public class RequestValidationException extends Exception{
    public RequestValidationException(String message) {
        super(message);
    }
}
