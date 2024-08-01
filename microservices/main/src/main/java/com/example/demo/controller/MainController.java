package com.example.demo.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/test")
public class MainController {
	
	private static final Logger logger = LoggerFactory.getLogger(MainController.class);

	@GetMapping("/hello")
	public String hello() {
		logger.info("Entering hello endpoint");
		return "Hello world";
	}
}
