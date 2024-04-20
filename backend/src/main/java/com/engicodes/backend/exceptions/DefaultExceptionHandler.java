package com.engicodes.backend.exceptions;

import jakarta.servlet.http.HttpServletRequest;
import org.apache.coyote.BadRequestException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.time.LocalDateTime;

@ControllerAdvice
public class DefaultExceptionHandler {

    @ExceptionHandler(ResourceDuplicationException.class)
    public ResponseEntity<ApiError> handleException(
            ResourceNotFoundException e,
            HttpServletRequest request
    ) {
        ApiError apiError= new ApiError(
                request.getRequestId(),
                e.getMessage(),
                HttpStatus.NOT_FOUND.value(),
                LocalDateTime.now()
        );

        return new ResponseEntity<>(apiError, HttpStatus.NOT_FOUND );
    }

    @ExceptionHandler(BadRequestException.class)
    public ResponseEntity<ApiError> handleExceptionBadRequest(
            BadRequestException e,
            HttpServletRequest request
    ) {
        ApiError apiError= new ApiError(
                request.getRequestId(),
                e.getMessage(),
                HttpStatus.BAD_REQUEST.value(),
                LocalDateTime.now()
        );

        return new ResponseEntity<>(apiError, HttpStatus.BAD_REQUEST );
    }
}
