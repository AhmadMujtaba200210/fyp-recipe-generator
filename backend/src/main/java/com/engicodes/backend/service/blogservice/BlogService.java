package com.engicodes.backend.service.blogservice;

import com.engicodes.backend.controller.blogcontroller.BlogRequest;
import com.engicodes.backend.dao.blogdao.BlogDao;
import com.engicodes.backend.exceptions.ResourceDuplicationException;
import com.engicodes.backend.exceptions.ResourceNotFoundException;
import com.engicodes.backend.model.Blog;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BlogService {
    private final BlogDao blogDao;

    public BlogService(@Qualifier("blogJPA") BlogDao blogDao) {
        this.blogDao = blogDao;
    }


    public Page<Blog> allBlogs(Pageable pageable) {
        return blogDao.viewAllBlog(pageable);
    }

    public Blog eachBlog(String title) throws ResourceNotFoundException {
        return blogDao.findBlogByTitle(title)
                .orElseThrow(()->new ResourceNotFoundException("Blog Not Found"));
    }

    public void postNewBlog(BlogRequest blogRequest) throws ResourceDuplicationException {
        blogDao.searchBlog(blogRequest.title())
                .orElseThrow(
                        ()->new ResourceDuplicationException(
                                String.format("Blog with title: [%s], already exists",blogRequest.title())
                ));
        Blog newBlog = Blog.builder()
                .description(blogRequest.description())
                .title(blogRequest.title())
                .build();
        blogDao.saveNewBlog(newBlog);
    }

    public void deleteBlog(String blogTitle) throws ResourceNotFoundException {
        blogDao.searchBlog(blogTitle)
                .orElseThrow(
                        ()->new ResourceNotFoundException(
                                "Blog with title:[%s], is not found!".formatted(blogTitle)
                        )
                );

        blogDao.deleteBlog(blogTitle);
    }

    public void updateBlog(BlogRequest blogRequest, String blogTitle) throws ResourceNotFoundException {
        Blog presentBlog = blogDao.searchBlog(blogTitle)
                .orElseThrow(
                        ()->new ResourceNotFoundException(
                                "Blog with title:[%s], is not found!".formatted(blogTitle)
                        )
                );
        boolean change = false;
//        if(blogRequest.title()!=null&& !blogRequest.title().equals(presentBlog.getTitle())){
//            if (blogDao.)
//        } TODO: complete this update functionality
        Blog updatedBlog = Blog.builder()
                .description(blogRequest.description())
                .title(blogRequest.title())
                .build();
        blogDao.updateBlog(updatedBlog);
    }


    public List<Blog> hotBlogs(Integer noOfBlogs) {
        return blogDao.randomBlogs(noOfBlogs);
    }
}
