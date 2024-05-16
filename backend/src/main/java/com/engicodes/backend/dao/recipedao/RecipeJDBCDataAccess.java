package com.engicodes.backend.dao.recipedao;

import com.engicodes.backend.exceptions.recipeexceptions.RecipeNotFoundException;
import com.engicodes.backend.model.Recipe;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository("recipeJDBC")
public class RecipeJDBCDataAccess implements RecipeDao {

    @Override
    public void saveNewRecipe(Recipe recipe) {

    }

    @Override
    public Page<Recipe> viewAllRecipe(Pageable pageable) {
        return null;
    }


    @Override
    public Optional<Object> findRecipeById(Integer id) throws RecipeNotFoundException {
        return Optional.empty();
    }

    @Override
    public void deleteRecipe(Integer id) {

    }

    @Override
    public void updateRecipe(Recipe recipe) {

    }

    @Override
    public List<Recipe> getRecipesByCuisines(String recipeName) throws RecipeNotFoundException {
        return null;
    }

    @Override
    public List<Recipe> getRandomRecipes(Integer noOfRecipes) {
        return null;
    }

    @Override
    public List<Recipe> getRecentRecipes() {
        return null;
    }

    @Override
    public Page<Recipe> findByFullTextSearch(String keyword, Pageable pageable) {
        return null;
    }
}
