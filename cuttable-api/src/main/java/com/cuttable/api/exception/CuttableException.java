package com.cuttable.api.exception;

import org.springframework.http.HttpStatus;

abstract class CuttableException extends RuntimeException {

    abstract HttpStatus getStatus();

    abstract String getReason();

}
