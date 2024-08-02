package com.example.demo;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MainController {

	@GetMapping("/test")
    public ResponseEntity<String> healthCheck() {
        return ResponseEntity.ok("This is a response from side micro");
    }
}
