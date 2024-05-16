package com.engicodes.backend.dao.recipedao;

import com.engicodes.backend.exceptions.recipeexceptions.RecipeNotFoundException;
import com.engicodes.backend.model.Recipe;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface RecipeDao {
    void saveNewRecipe(Recipe recipe);
    Page<Recipe> viewAllRecipe(Pageable pageable);
    Optional<Object> findRecipeById(Integer id) throws RecipeNotFoundException;
    void deleteRecipe(Integer id) throws RecipeNotFoundException;
    void updateRecipe(Recipe recipe);
    List<Recipe> getRecipesByCuisines(String recipeName) throws RecipeNotFoundException;
    List<Recipe> getRandomRecipes(Integer number);
    List<Recipe> getRecentRecipes();
    Page<Recipe> findByFullTextSearch(String keyword, Pageable pageable);

}
