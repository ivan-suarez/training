package com.example.demo.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.service.SideMicroService;

@RestController
@RequestMapping("/test")
public class MainController {
	
	private static final Logger logger = LoggerFactory.getLogger(MainController.class);
	
	@Autowired
	private SideMicroService sideMicroService;

	@GetMapping("/hello")
	public String hello() {
		logger.info("Entering hello endpoint");
		return "Hello world";
	}
	
	@GetMapping("/micro")
	public String microCall() {
		logger.info("Calling side microservice");
		String side = sideMicroService.callOtherMicroservice();
		
		return "Hello world"+side;
	}
	
}
