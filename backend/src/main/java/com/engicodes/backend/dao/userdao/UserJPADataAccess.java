package com.engicodes.backend.dao.userdao;

import com.engicodes.backend.dto.UserDetailsDTO;
import com.engicodes.backend.exceptions.ResourceNotFoundException;
import com.engicodes.backend.model.User;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository
public class UserJPADataAccess implements UserDao{
    private final UserRepository userRepository;

    public UserJPADataAccess(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public User getUserByEmail(String email) throws ResourceNotFoundException {
        return userRepository.getUserByEmail(email)
                .orElseThrow(() -> new ResourceNotFoundException(
                        "User with email not exists!"
                ));
    }

    @Override
    public void deleteUserByEmail(String email) {
        userRepository.deleteUserByEmail(email);
    }

    @Override
    public boolean userExistsByEmail(String email) {
        return userRepository.existsUserByEmail(email);
    }

    @Override
    public void updateUser(User user) {
        userRepository.save(user);
    }

    @Override
    public void addNewUser(User user) {
        userRepository.save(user);
    }

    @Override
    public List<User> listAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public Optional<User> getUserById(UUID id) {
        return userRepository.getUserByUserId(id);
    }

    @Override
    public Optional<UserDetailsDTO> getUserDetailsById(UUID id) throws ResourceNotFoundException {
        Optional<User> user = userRepository.getUserByUserId(id);
        if (user.isPresent()) {
            UserDetailsDTO userDTO = UserDetailsDTO.builder()
                    .userId(user.get().getUserId())
                    .fullName(user.get().getFullName())
                    .description(user.get().getDescription())
                    .profession(user.get().getProfession())
                    .location(user.get().getProfession())
                    .email(user.get().getEmail())
                    .age(user.get().getAge())
                    .build();
            return Optional.ofNullable(userDTO);
        }
        throw new ResourceNotFoundException(
                "User Not Found!"
        );
    }

    @Override
    public List<String> findAllValidTokensOfUser(String email) {
        return null;
    }
}
