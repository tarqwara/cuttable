package com.cuttable.api.exception;

public class WrongEmailOrPasswordException extends RuntimeException {

    public WrongEmailOrPasswordException() {
        super("Wrong email or password");
    }

}
