package com.engicodes.backend.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.ALREADY_REPORTED)
public class ResourceDuplicationException extends Exception {
    public ResourceDuplicationException(String message) {
        super(message);
    }
}
