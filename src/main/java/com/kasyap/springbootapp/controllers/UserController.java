package com.kasyap.springbootapp.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.kasyap.springbootapp.model.User;
import com.kasyap.springbootapp.services.UserService;

@RestController
@RequestMapping("/api/users")
public class UserController {
    private UserService userService;
    public UserController(){
        userService = new UserService();
    }

    @GetMapping
    public List<User> getAllUsers(){
        return userService.getAllUsers();
    }

    @GetMapping("/random")
    public User getRandomUser(){
        return userService.getRandomUser();
    }
}
