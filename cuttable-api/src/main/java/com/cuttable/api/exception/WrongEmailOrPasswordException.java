package com.cuttable.api.exception;

import org.springframework.http.HttpStatus;

public class WrongEmailOrPasswordException extends CuttableException {

    @Override
    HttpStatus getStatus() {
        return HttpStatus.UNAUTHORIZED;
    }

    @Override
    String getReason() {
        return "Wrong email or password";
    }

}
