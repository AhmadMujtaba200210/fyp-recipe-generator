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
public class News {
    @Id
    @GeneratedValue(strategy = SEQUENCE)
    private Integer news_id;
    private String title;
    @Column(
            columnDefinition = "TEXT"
    )
    private String description;

    public News() {
    }

    public News(String title, String description) {
        this.title = title;
        this.description = description;
    }

    public News(Integer id, String title, String description) {
        this.news_id = id;
        this.title = title;
        this.description = description;
    }

}
