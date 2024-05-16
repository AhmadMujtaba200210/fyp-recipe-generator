package com.engicodes.backend.dao.newsdao;

import com.engicodes.backend.model.News;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository("newsJDBC")
public class NewsJDBCDataAccess implements NewsDao {


    @Override
    public void saveNewNews(News News) {

    }

    @Override
    public List<News> viewAllNews() {
        return null;
    }

    @Override
    public Optional<News> findNewsByTitle(String title) {
        return Optional.empty();
    }

    @Override
    public void deleteNews(String title) {

    }

    @Override
    public void updateNews(News news) {

    }


    @Override
    public Optional<News> searchNews(String title) {
        return Optional.empty();
    }

    @Override
    public List<News> hotNews(Integer noOfBlogs) {
        return null;
    }


}
