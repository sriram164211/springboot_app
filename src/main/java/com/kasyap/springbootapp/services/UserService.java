package com.kasyap.springbootapp.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

import org.springframework.stereotype.Service;

import com.kasyap.springbootapp.model.User;

@Service
public class UserService {
    private List<User> allUsers;

    public UserService(){
        allUsers = new ArrayList<>();
        allUsers.add(new User("Jane Doe", "Female", "img/jane.png"));
        allUsers.add(new User("John Doe", "Male", "img/john.png"));
        allUsers.add(new User("Victoria", "Female", "https://randomuser.me/api/portraits/women/67.jpg"));
        allUsers.add(new User("Kenneth", "Male", "https://randomuser.me/api/portraits/men/60.jpg"));
        allUsers.add(new User("Bachittar", "Male", "https://randomuser.me/api/portraits/men/13.jpg"));
    }

    public User getRandomUser(){
        Random rnd = new Random();
        int idx = rnd.nextInt(allUsers.size());
        return allUsers.get(idx);
    }

    public List<User> getAllUsers(){
        return allUsers;
    }
}


