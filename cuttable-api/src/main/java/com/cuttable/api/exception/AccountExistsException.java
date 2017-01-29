package com.cuttable.api.exception;

import org.springframework.http.HttpStatus;

public class AccountExistsException extends CuttableException {

    private String email;

    public AccountExistsException(String email) {
        this.email = email;
    }

    @Override
    HttpStatus getStatus() {
        return HttpStatus.CONFLICT;
    }

    @Override
    String getReason() {
        return "Account with email " + this.email + " already exists";
    }
}
