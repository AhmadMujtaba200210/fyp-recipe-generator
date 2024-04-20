package com.engicodes.backend.model;

import jakarta.persistence.*;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Entity
@Getter
@Setter
@Builder
public class Recipe {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Integer recipeId;
    @Column(
            columnDefinition = "TEXT"
    )
    private String title;
    @Column(
            columnDefinition = "TEXT"
    )
    private String ingredients;
    @Column(
            columnDefinition = "TEXT"
    )
    private String instructions;
    @Column(
            columnDefinition = "TEXT"
    )
    private String cuisine;
    @Column
    @Temporal(TemporalType.DATE)
    private LocalDate date;

    public Recipe() {
    }

    public Recipe(Integer id, String title, String ingredients, String instructions, String cuisine, LocalDate date) {
        this.recipeId = id;
        this.title = title;
        this.ingredients = ingredients;
        this.instructions = instructions;
        this.cuisine = cuisine;
        this.date = date;
    }

    public Recipe(String title, String ingredients, String instructions, String cuisine, LocalDate date) {
        this.title = title;
        this.ingredients = ingredients;
        this.instructions = instructions;
        this.cuisine = cuisine;
        this.date = date;
    }

}
