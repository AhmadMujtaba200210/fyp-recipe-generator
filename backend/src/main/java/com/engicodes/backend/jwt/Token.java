package com.engicodes.backend.jwt;
import com.engicodes.backend.model.User;
import jakarta.persistence.*;
import lombok.*;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Token {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;
    private String token;
    @Enumerated(EnumType.STRING)
    private TokenType tokenType;
    private boolean revoked;
    private boolean expired;
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    public Token(String token, TokenType tokenType, boolean revoked, boolean expired, User customer) {
        this.token = token;
        this.tokenType = tokenType;
        this.revoked = revoked;
        this.expired = expired;
        this.user = customer;
    }
}
