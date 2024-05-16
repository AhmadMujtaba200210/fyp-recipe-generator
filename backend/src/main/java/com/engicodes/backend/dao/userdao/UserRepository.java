package com.engicodes.backend.dao.userdao;

import com.engicodes.backend.dto.UserDetailsDTO;
import com.engicodes.backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface UserRepository extends JpaRepository<User, Integer> {
    Optional<User> getUserByEmail(String email);
    void deleteUserByEmail(String email);
    Boolean existsUserByEmail(String email);
    Optional<User> getUserByUserId(UUID id);
}
