package com.cuttable.api.controller;

import com.cuttable.api.exception.ImageNotFoundException;
import com.cuttable.api.service.ImageService;
import org.springframework.core.io.Resource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/img")
public class ImageController {

    private ImageService imageService;

    ImageController(ImageService imageService) {
        this.imageService = imageService;
    }

    @GetMapping("/{fileName:.+}")
    @ResponseBody
    public ResponseEntity<Resource> serveImage(@PathVariable String fileName) {
        try {
            Resource file = imageService.loadImage(fileName);
            return ResponseEntity
                    .ok()
                    .body(file);
        } catch (ImageNotFoundException e) {
            return ResponseEntity.notFound().build();
        }
    }

}
