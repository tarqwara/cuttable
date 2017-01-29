package com.cuttable.api.exception;

import com.cuttable.api.domain.Error;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@ControllerAdvice
public class CuttableExceptionHandler extends ResponseEntityExceptionHandler {

    @ExceptionHandler(Exception.class)
    public ResponseEntity<Error> handleInvalidRequest(Exception e) {
        String message;
        HttpStatus status;

        if (e instanceof CuttableException) {
            CuttableException cuttableException = (CuttableException) e;
            message = cuttableException.getReason();
            status = cuttableException.getStatus();
        } else {
            message = "Something went wrong";
            status = HttpStatus.BAD_REQUEST;
        }

        Error error = new Error();
        error.setMessage(message);
        return new ResponseEntity<>(error, status);
    }

}
