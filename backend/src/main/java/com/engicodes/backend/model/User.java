package com.engicodes.backend.model;

import jakarta.persistence.*;
import lombok.*;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import java.util.Collection;
import java.util.UUID;

@Entity
@Table(name = "_user")
@Data
@AllArgsConstructor
public class User implements UserDetails {
    @Id
    @GeneratedValue(
            strategy = GenerationType.UUID
    )
    private UUID userId;
    private String firstName;
    private String lastName;
    private String fullName;
    private String email;
    private int age;
    private String description;
    private String profession;
    private String location;
    private String password;
    @Enumerated(
            value = EnumType.STRING
    )
    private Gender gender;
    public User() {
    }

    public User(String firstName, String lastName, String email, String password, int age, String description, String location, String profession, Gender gender) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + " " + lastName;
        this.email = email;
        this.password = password;
        this.age=age;
        this.description=description;
        this.location=location;
        this.profession=profession;
        this.gender=gender;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return null;
    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

}
