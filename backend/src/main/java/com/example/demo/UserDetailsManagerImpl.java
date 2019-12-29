package com.example.demo;

import com.example.demo.repository.UserRepository;
import com.example.demo.util.Mappers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.provisioning.UserDetailsManager;
import org.springframework.stereotype.Service;

@Service
public class UserDetailsManagerImpl implements UserDetailsManager {

    @Autowired
    private UserRepository userRepository;

    @Override
    public void createUser(UserDetails userDetails) {
        if (userRepository.existsByUsername(userDetails.getUsername()));
    }

    @Override
    public void updateUser(UserDetails userDetails) {

    }

    @Override
    public void deleteUser(String s) {

    }

    @Override
    public void changePassword(String s, String s1) {

    }

    @Override
    public boolean userExists(String username) {
        return userRepository.existsByUsername(username);
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return Mappers.map(userRepository.findByUsername(username));
    }
}
