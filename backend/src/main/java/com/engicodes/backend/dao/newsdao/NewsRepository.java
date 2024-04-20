package com.engicodes.backend.dao.newsdao;

import com.engicodes.backend.model.News;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface NewsRepository extends JpaRepository<News, Integer> {
    News findNewsByTitle(String title);
    void deleteNewsByTitle(String title);
    @Query(value = "SELECT * FROM news ORDER BY RANDOM() LIMIT :count", nativeQuery = true)
    List<News> getRandomRecipes(@Param("count") Integer count);
}
