package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class SideMicroService {
	
	@Autowired
    private RestTemplate restTemplate;

    public String callOtherMicroservice() {
        String url = "http://localhost:8081/test";
        return restTemplate.getForObject(url, String.class);
    }
}
