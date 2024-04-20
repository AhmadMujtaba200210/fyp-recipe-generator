package com.engicodes.backend.dao.newsdao;

import com.engicodes.backend.exceptions.ResourceNotFoundException;
import com.engicodes.backend.exceptions.newsexceptions.NewsNotUpdatedException;
import com.engicodes.backend.model.Blog;
import com.engicodes.backend.model.News;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface NewsDao {
    void saveNewNews(News News);
    List<News> viewAllNews();
    Optional<News> findNewsByTitle(String title);
    void deleteNews(String title) ;
    void updateNews(News news);
    Optional<News> searchNews(String title);
    List<News> hotNews(Integer noOfBlogs);
}
