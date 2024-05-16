package com.engicodes.backend.model;

import jakarta.persistence.*;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import static jakarta.persistence.GenerationType.SEQUENCE;

@Entity
@Table
@Getter
@Setter
@Builder
public class Blog {
    @Id
    @GeneratedValue(strategy = SEQUENCE)
    private Integer blogId;
    private String title;
    @Column(
            columnDefinition = "TEXT"
    )
    private String description;

    public Blog() {
    }

    public Blog(String title, String description) {
        this.title = title;
        this.description = description;
    }

    public Blog(Integer id, String title, String description) {
        this.blogId = id;
        this.title = title;
        this.description = description;
    }

}
