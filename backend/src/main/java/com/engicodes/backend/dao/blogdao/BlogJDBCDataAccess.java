package com.engicodes.backend.dao.blogdao;

import com.engicodes.backend.model.Blog;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository("blogJDBC")
public class BlogJDBCDataAccess implements BlogDao {


    @Override
    public void saveNewBlog(Blog Blog) {

    }

    @Override
    public Page<Blog> viewAllBlog(Pageable pageable) {
        return null;
    }


    @Override
    public Optional<Blog> findBlogByTitle(String title) {
        return Optional.empty();
    }

    @Override
    public void deleteBlog(String title) {

    }


    @Override
    public void updateBlog(Blog blog) {

    }

    @Override
    public Optional<Blog> searchBlog(String title) {
        return Optional.empty();
    }

    @Override
    public List<Blog> randomBlogs(Integer noOfBlogs) {
        return null;
    }


}
