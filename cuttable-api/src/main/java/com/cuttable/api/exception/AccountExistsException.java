package com.cuttable.api.exception;

public class AccountExistsException extends RuntimeException {

    public AccountExistsException(String email) {
        super("Account with email " + email + " already exists");
    }

}
