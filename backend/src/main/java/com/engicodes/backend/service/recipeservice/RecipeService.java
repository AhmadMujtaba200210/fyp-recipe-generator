package com.engicodes.backend.service.recipeservice;


import com.engicodes.backend.controller.recipecontroller.NewRecipeRequest;
import com.engicodes.backend.dao.recipedao.RecipeDao;
import com.engicodes.backend.exceptions.recipeexceptions.RecipeNotFoundException;
import com.engicodes.backend.model.Recipe;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
public class RecipeService {
    private final RecipeDao recipeDao;
    public RecipeService(@Qualifier("recipeJPA") RecipeDao recipeDao) {
        this.recipeDao = recipeDao;
    }

    public Page<Recipe> getAllRecipes(Pageable pageable) {
        return recipeDao.viewAllRecipe(pageable);
    }

    public Optional<Optional<Object>> getEachRecipe(Integer id) throws RecipeNotFoundException {
        return Optional.ofNullable(recipeDao.findRecipeById(id));
    }

    public void saveNewRecipe(NewRecipeRequest newRecipe) {
        Recipe recipe = Recipe.builder()
                .title(newRecipe.title())
                .ingredients(newRecipe.ingredients())
                .instructions(newRecipe.instruction())
                .cuisine(newRecipe.cuisine())
                .date(LocalDate.now())
                .build();
        recipeDao.saveNewRecipe(recipe);
    }

    public List<Recipe> getRecipeByCuisine(String cuisine) throws RecipeNotFoundException {
        return recipeDao.getRecipesByCuisines(cuisine);
    }
    public List<Recipe> recentRecipes(){
        return recipeDao.getRecentRecipes();
    }
    public List<Recipe> hotRecipes(Integer noOfRecipes) {
        return recipeDao.getRandomRecipes(noOfRecipes);
    }

    //TODO: fix and complete this currently it is dummy
    public List<Recipe> weeklySpecial() {
        return recipeDao.getRandomRecipes(1);
    }

    public Page<Recipe> searchRecipes(String keyword, Pageable pageable) {
        // Delegate the search operation to the repository method
        return recipeDao.findByFullTextSearch(keyword, pageable);
    }
}
