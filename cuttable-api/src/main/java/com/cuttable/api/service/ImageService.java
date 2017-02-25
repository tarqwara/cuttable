package com.cuttable.api.service;

import com.cuttable.api.exception.ImageNotFoundException;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;

import java.net.MalformedURLException;
import java.nio.file.Path;
import java.nio.file.Paths;

@Service
public class ImageService {

    private static final Path ROOT_LOCATION = Paths.get("img");

    public Resource loadImage(String fileName) throws ImageNotFoundException {
        try {
            Path file = load(fileName);
            Resource resource = new UrlResource(file.toUri());
            if(resource.exists() || resource.isReadable()) {
                return resource;
            }
            else {
                throw new ImageNotFoundException(fileName);
            }
        } catch (MalformedURLException e) {
            throw new ImageNotFoundException(fileName);
        }
    }

    private Path load(String fileName) {
        return ROOT_LOCATION.resolve(fileName);
    }

}
