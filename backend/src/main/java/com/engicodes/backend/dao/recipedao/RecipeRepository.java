package com.engicodes.backend.dao.recipedao;

import com.engicodes.backend.exceptions.recipeexceptions.RecipeNotFoundException;
import com.engicodes.backend.model.Recipe;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface RecipeRepository extends JpaRepository<Recipe, Integer> {
    List<Recipe> findRecipesByCuisine(String cuisine) throws RecipeNotFoundException;
    Recipe findRecipeByRecipeId(Integer id) throws RecipeNotFoundException;
    void deleteRecipeByRecipeId(Integer id);
    Boolean searchRecipeByTitle(String title);
    @Query(value = "SELECT * FROM recipe ORDER BY DATE desc LIMIT :count", nativeQuery = true)
    List<Recipe> getRandomRecipes(@Param("count") Integer count);
    @Query(value = "SELECT * FROM recipe WHERE to_tsvector('english', title || ' ' || ingredients) @@ to_tsquery('english', :keyword)", nativeQuery = true)
    Page<Recipe> findByFullTextSearch(@Param("keyword") String keyword, Pageable pageable);
}
