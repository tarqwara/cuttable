package com.cuttable.api.exception;

public class ImageNotFoundException extends Throwable {

    public ImageNotFoundException(String fileName) {
        super("Could not find image: " + fileName);
    }

}
