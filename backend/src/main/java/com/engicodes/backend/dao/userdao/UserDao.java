package com.engicodes.backend.dao.userdao;

import com.engicodes.backend.dto.UserDetailsDTO;
import com.engicodes.backend.exceptions.ResourceNotFoundException;
import com.engicodes.backend.model.User;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository
public interface UserDao {
    User getUserByEmail(String email) throws ResourceNotFoundException;
    void deleteUserByEmail(String email);
    boolean userExistsByEmail(String email);
    void updateUser(User user);
    void addNewUser(User user);
    List<User> listAllUsers();
    Optional<User> getUserById(UUID id) throws ResourceNotFoundException;
    Optional<UserDetailsDTO> getUserDetailsById(UUID id) throws ResourceNotFoundException;
    List<String> findAllValidTokensOfUser(String email);
}

