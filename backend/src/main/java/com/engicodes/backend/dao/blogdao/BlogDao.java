package com.engicodes.backend.dao.blogdao;

import com.engicodes.backend.model.Blog;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface BlogDao {
    void saveNewBlog(Blog blog);
    Page<Blog> viewAllBlog(Pageable pageable);
    Optional<Blog> findBlogByTitle(String title);
    void deleteBlog(String title);
    void updateBlog(Blog blog);
    Optional<Blog> searchBlog(String title);
    List<Blog> randomBlogs(Integer noOfBlogs);
}
