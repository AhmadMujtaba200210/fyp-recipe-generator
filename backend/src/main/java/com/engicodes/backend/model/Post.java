package com.engicodes.backend.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class Post {
    @Id
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "post_sequence"
    )
    @SequenceGenerator(
            name = "post_sequence",
            sequenceName = "post_sequence",
            allocationSize = 1
    )
    private Integer postId;
    private String description;
    private String image;
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
}
