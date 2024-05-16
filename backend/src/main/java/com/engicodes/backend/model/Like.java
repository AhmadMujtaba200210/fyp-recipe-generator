package com.engicodes.backend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity(name = "_like")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Like {
    @Id
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "like_sequence"
    )
    @SequenceGenerator(
            name = "like_sequence",
            sequenceName = "like_sequence",
            allocationSize = 1
    )
    private Integer likeId;
    @ManyToOne
    @JoinColumn(name = "postId")
    private Post post;
    @ManyToOne
    @JoinColumn(name = "userId")
    private User user;
    private LocalDateTime timestamp;
}
