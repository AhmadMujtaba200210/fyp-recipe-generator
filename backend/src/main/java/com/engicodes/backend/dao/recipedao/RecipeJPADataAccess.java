package com.engicodes.backend.dao.recipedao;

import com.engicodes.backend.dto.RecipeDetailsDTO;
import com.engicodes.backend.exceptions.recipeexceptions.RecipeNotFoundException;
import com.engicodes.backend.model.Recipe;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository("recipeJPA")
public class RecipeJPADataAccess implements RecipeDao {
    private final RecipeRepository repository;

    public RecipeJPADataAccess(RecipeRepository repository) {
        this.repository = repository;
    }

    @Override
    public void saveNewRecipe(Recipe recipe) {
        repository.save(recipe);
    }

    @Override
    public Page<Recipe> viewAllRecipe(Pageable pageable) {
        return repository.findAll(pageable);
    }


    @Override
    public Optional<Object> findRecipeById(Integer id) throws RecipeNotFoundException {

        Recipe recipeByRecipeId = repository.findRecipeByRecipeId(id);
        String ingredients = recipeByRecipeId.getIngredients();
        String instructions = recipeByRecipeId.getInstructions();
        //Splitting string in array
        String content = ingredients.substring(1, ingredients.length() - 1);
        String [] parts = content.split("\\s*,\\s*");
        String [] arrayIngredients = new String[parts.length];
        for (int i = 0; i < parts.length; i++) {
            arrayIngredients[i] = parts[i].trim();
        }

        content = instructions.substring(1, instructions.length() - 1);
        parts = content.split("\\s*,\\s*");
        String []  arrayInstructions = new String[parts.length];
        for (int i = 0; i < parts.length; i++) {
            arrayInstructions[i] = parts[i].trim();
        }
        //        for (String s : array) {
//            System.out.println(s);
//        }
        return Optional.ofNullable(RecipeDetailsDTO.builder()
                .recipe_id(recipeByRecipeId.getRecipeId())
                .title(recipeByRecipeId.getTitle())
                .ingredients(arrayIngredients)
                .instructions(arrayInstructions)
                .cuisine(recipeByRecipeId.getCuisine())
                .date(recipeByRecipeId.getDate())
                .build());
    }

    @Override
    public void deleteRecipe(Integer id){
        repository.deleteRecipeByRecipeId(id);
    }

    @Override
    public void updateRecipe(Recipe recipe) {
        repository.save(recipe);    }

    @Override
    public List<Recipe> getRecipesByCuisines(String cuisineName) throws RecipeNotFoundException {
        return repository.findRecipesByCuisine(cuisineName);
    }

    @Override
    public List<Recipe> getRecentRecipes() {
        return repository.getRandomRecipes(2);
    }

    @Override
    public Page<Recipe> findByFullTextSearch(String keyword, Pageable pageable) {
        return repository.findByFullTextSearch(keyword,pageable);
    }

    @Override
    public List<Recipe> getRandomRecipes(Integer noOfRecipes) {
        return repository.getRandomRecipes(noOfRecipes);
    }


}
