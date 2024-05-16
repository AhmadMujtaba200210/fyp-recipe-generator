package com.engicodes.backend.dao.newsdao;

import com.engicodes.backend.model.News;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository("newsJPA")
public class NewsJPADataAccess implements NewsDao {
    private final NewsRepository repository;

    public NewsJPADataAccess(NewsRepository repository) {
        this.repository = repository;
    }

    @Override
    public void saveNewNews(News news) {
        repository.save(news);
    }

    @Override
    public List<News> viewAllNews() {
        return repository.findAll();
    }

    @Override
    public Optional<News> findNewsByTitle(String title) {
        return Optional.ofNullable(repository.findNewsByTitle(title));
    }

    @Override
    public void deleteNews(String title) {
        repository.deleteNewsByTitle(title);
    }

    @Override
    public void updateNews(News news) {
        repository.save(news);
    }

    @Override
    public Optional<News> searchNews(String title) {
        return Optional.empty();
    }

    @Override
    public List<News> hotNews(Integer noOfBlogs) {
        return repository.getRandomRecipes(noOfBlogs);
    }

}
