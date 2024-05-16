package com.engicodes.backend.controller.recipecontroller;

import com.engicodes.backend.exceptions.recipeexceptions.RecipeNotFoundException;
import com.engicodes.backend.model.Recipe;
import com.engicodes.backend.service.recipeservice.RecipeService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Recipe End points for Pixel Cuisine webapp
 * @author Ahmad Mujtaba
 * @since 28 Dec, 2023
 * @version 1.0.0
 */
@RestController
@RequestMapping("/api/v1/recipe")
public class RecipeController {
    private final RecipeService recipeService;

    public RecipeController(RecipeService recipeService) {
        this.recipeService = recipeService;
    }

    /**
     * will return recent recipes order by date
     * @return List of Recipes
     */
    @GetMapping("/recent")
    public ResponseEntity<?> recentRecipes() {
        return ResponseEntity.ok(recipeService.recentRecipes());
    }

    @GetMapping("/search")
    public Page<Recipe> searchRecipes(@RequestParam String keyword, Pageable pageable) {
        return recipeService.searchRecipes(keyword, pageable);
    }

    @GetMapping
    public ResponseEntity<?> getRecipes(@RequestParam(defaultValue = "0") int page, @RequestParam(defaultValue = "10") int size) {
        Pageable pageable = PageRequest.of(page, size);
        Page<Recipe> recipesPage = recipeService.getAllRecipes(pageable);
        return ResponseEntity.ok(recipesPage);
    }

    @GetMapping("/id/{id}")
    public ResponseEntity<?> getRecipe(@PathVariable("id") Integer id) throws RecipeNotFoundException {
        return ResponseEntity.ok(recipeService.getEachRecipe(id));
    }

    @PostMapping("/save")
    public ResponseEntity<?> saveRecipe(@RequestBody NewRecipeRequest newRecipe) {
        recipeService.saveNewRecipe(newRecipe);
        return ResponseEntity.ok()
                .body("New Recipe Added!");
    }

    @GetMapping("/cuisine/{cuisine}")
    public ResponseEntity<List<Recipe>> getRecipeByCuisine(@PathVariable("cuisine") String cuisine) throws RecipeNotFoundException {
        return ResponseEntity.ok(recipeService.getRecipeByCuisine(cuisine));
    }

    @GetMapping("/hot/{noOfRecipes}")
    public ResponseEntity<List<Recipe>> getHotRecipes(@PathVariable("noOfRecipes") Integer noOfRecipes) {
        return ResponseEntity.ok(recipeService.hotRecipes(noOfRecipes));
    }

    @GetMapping("/special")
    public ResponseEntity<List<Recipe>> getWeeklySpecial() {
        return ResponseEntity.ok(recipeService.weeklySpecial());
    }

}
