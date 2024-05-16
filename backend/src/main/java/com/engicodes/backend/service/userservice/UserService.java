package com.engicodes.backend.service.userservice;

import com.engicodes.backend.controller.usercontroller.UserUpdateRequest;
import com.engicodes.backend.dao.userdao.UserDao;
import com.engicodes.backend.dto.UserDetailsDTO;
import com.engicodes.backend.exceptions.RequestValidationException;
import com.engicodes.backend.exceptions.ResourceDuplicationException;
import com.engicodes.backend.exceptions.ResourceNotFoundException;
import com.engicodes.backend.model.User;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class UserService {
    private final UserDao userDao;
    private final PasswordEncoder passwordEncoder;

    public UserService(UserDao userDao, PasswordEncoder passwordEncoder) {
        this.userDao = userDao;
        this.passwordEncoder = passwordEncoder;
    }

    public void saveUser(User user) {
        userDao.addNewUser(user);
    }
    public Optional<User> getUserById(UUID id) throws ResourceNotFoundException{
        return userDao.getUserById(id);
    }

    public Optional<UserDetailsDTO> getUserDetailsById(UUID id) throws ResourceNotFoundException{
        return userDao.getUserDetailsById(id);
    }

    public User getUserByEmail(String email) throws ResourceNotFoundException {
        return userDao.getUserByEmail(email);
    }

    public List<User> getUserList(){
        return userDao.listAllUsers();
    }
    public Boolean ifUserExists(String email){
        return userDao.userExistsByEmail(email);
    }

    public void updateUser(UserUpdateRequest userUpdateRequest, String email) throws ResourceDuplicationException, RequestValidationException, ResourceNotFoundException {
        User user = userDao.getUserByEmail(email);
        boolean changes=false;
        if (userUpdateRequest.firstName()!=null && !userUpdateRequest.firstName().equals(user.getFirstName())){
            user.setFirstName(userUpdateRequest.firstName());
            changes=true;
        }
        if (userUpdateRequest.lastName()!=null && !userUpdateRequest.lastName().equals(user.getFirstName())){
            user.setFirstName(userUpdateRequest.lastName());
            changes=true;
        }

        if (userUpdateRequest.email()!=null && !userUpdateRequest.email().equals(user.getEmail())){
            if (userDao.userExistsByEmail(userUpdateRequest.email())){
                throw new ResourceDuplicationException("email already taken!");
            }
            user.setEmail(userUpdateRequest.email());
            changes=true;
        }

        if (!changes){
            throw new RequestValidationException("no data changes found");
        }
        userDao.updateUser(user);
    }

    public void deleteUser(String email) throws ResourceNotFoundException {
        if (!userDao.userExistsByEmail(email)){
            throw new ResourceNotFoundException("Email Not Exists!");
        }
        userDao.deleteUserByEmail(email);
    }


    public void uploadUserProfileImage(UUID userId, MultipartFile file) {

    }

    public byte[] getUserProfileImage(UUID userId) {
        return new byte[0];
    }
}
