package com.engicodes.backend.service.newsservice;

import com.engicodes.backend.controller.newscontroller.NewsRequest;
import com.engicodes.backend.dao.newsdao.NewsDao;
import com.engicodes.backend.exceptions.ResourceDuplicationException;
import com.engicodes.backend.exceptions.ResourceNotFoundException;
import com.engicodes.backend.model.News;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NewsService {
    private final NewsDao newsDao;

    public NewsService(@Qualifier("newsJPA")NewsDao newsDao) {
        this.newsDao = newsDao;
    }

    public List<News> allNews() {
        return newsDao.viewAllNews();
    }

    public News eachNews(String newsTitle) throws ResourceNotFoundException {
        return newsDao.findNewsByTitle(newsTitle)
                .orElseThrow(()->new ResourceNotFoundException("News Not Found"));
    }

    public void postNews(NewsRequest newsRequest) throws ResourceDuplicationException {
            newsDao.searchNews(newsRequest.title())
                    .orElseThrow(
                            ()->new ResourceDuplicationException(
                                    String.format("News with title: [%s], already exists",newsRequest.title())
                            ));
            News newNews = News.builder()
                    .description(newsRequest.description())
                    .title(newsRequest.title())
                    .build();
            newsDao.saveNewNews(newNews);
    }

    public void deleteNews(String newsTitle) throws ResourceNotFoundException {
        newsDao.searchNews(newsTitle)
                .orElseThrow(
                        ()->new ResourceNotFoundException(
                                "News with title:[%s], is not found!".formatted(newsTitle)
                        )
                );

        newsDao.deleteNews(newsTitle);
    }

    public void updateNews(NewsRequest newsRequest, String newsTitle) throws ResourceNotFoundException {
        News presentNews = newsDao.searchNews(newsTitle)
                .orElseThrow(
                        ()->new ResourceNotFoundException(
                                "News with title:[%s], is not found!".formatted(newsTitle)
                        )
                );
        boolean change = false;
//        if(blogRequest.title()!=null&& !blogRequest.title().equals(presentBlog.getTitle())){
//            if (blogDao.)
//        } TODO: complete this update functionality
        News updatedBlog = News.builder()
                .description(newsRequest.description())
                .title(newsRequest.title())
                .build();
        newsDao.updateNews(updatedBlog);
    }

    public List<News> hotNews(Integer noOfBlogs) {
        return newsDao.hotNews(noOfBlogs);
    }
}
