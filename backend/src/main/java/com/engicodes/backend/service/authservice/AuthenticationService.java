package com.engicodes.backend.service.authservice;

import com.engicodes.backend.controller.authcontroller.AuthenticationResponse;
import com.engicodes.backend.controller.authcontroller.LoginRequest;
import com.engicodes.backend.controller.authcontroller.RegisterRequest;
import com.engicodes.backend.exceptions.ResourceDuplicationException;
import com.engicodes.backend.exceptions.ResourceNotFoundException;
import com.engicodes.backend.jwt.JWTUtil;
import com.engicodes.backend.jwt.Token;
import com.engicodes.backend.jwt.TokenRepository;
import com.engicodes.backend.jwt.TokenType;
import com.engicodes.backend.model.User;
import com.engicodes.backend.service.userservice.UserService;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthenticationService {
    private final UserService userService;
    private final JWTUtil jwtUtil;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;
    private final AuthenticationManager authenticationManager;
    private final TokenRepository tokenRepository;

    public AuthenticationService(UserService userService, JWTUtil jwtUtil, BCryptPasswordEncoder bCryptPasswordEncoder, AuthenticationManager authenticationManager, TokenRepository tokenRepository) {
        this.userService = userService;
        this.jwtUtil = jwtUtil;
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
        this.authenticationManager = authenticationManager;
        this.tokenRepository = tokenRepository;
    }

    public AuthenticationResponse registerUser(RegisterRequest registerRequest) throws ResourceDuplicationException {
        String email = registerRequest.email();
        if (userService.ifUserExists(email)) {
            throw new ResourceDuplicationException(
                    "User with this email already exists!"
            );
        }
        User registerUser = new User(
                registerRequest.firstName(),
                registerRequest.lastName(),
                registerRequest.email(),
                bCryptPasswordEncoder.encode(registerRequest.password()),
                0, null, null, null, null);
        userService.saveUser(registerUser);
        var jwtToken = jwtUtil.generateToken(registerUser);
        var refreshToken = jwtUtil.generateRefreshToken(registerUser);
        return new AuthenticationResponse(
                jwtToken,
                refreshToken
        );
    }


    public AuthenticationResponse loginUserWithCredentials(LoginRequest loginRequest) throws ResourceNotFoundException {
        String email = loginRequest.email();
        if (!userService.ifUserExists(email)) {
            throw new ResourceNotFoundException(
                    "User with this email doesn't exists!"
            );
        }
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        loginRequest.email(),
                        loginRequest.password()
                )
        );
        User user = userService.getUserByEmail(loginRequest.email());
        revokeAllTokens(loginRequest.email());
        var jwtToken=jwtUtil.generateToken(user);
        var refreshToken= jwtUtil.generateRefreshToken(user);
        saveUserToken(user,jwtToken);
        return new AuthenticationResponse(
                jwtToken,
                refreshToken
        );
    }

    public void revokeAllTokens(String email) {
        var allValidTokens = tokenRepository.findAllValidTokensByUser(email);
        if (allValidTokens.isEmpty()) {
            return;
        }
        allValidTokens.forEach(
            token -> {
                token.setExpired(true);
                token.setRevoked(true);
            }
        );
        tokenRepository.saveAll(allValidTokens);
    }

    public void saveUserToken(User user, String jwtToken){
        var token = new Token(
                jwtToken,
                TokenType.BEARER,
                false,
                false,
                user
        );
        tokenRepository.save(token);
    }
}