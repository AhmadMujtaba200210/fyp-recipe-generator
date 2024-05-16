package com.engicodes.backend.dao.blogdao;

import com.engicodes.backend.model.Blog;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository("blogJPA")
public class BlogJPADataAccess implements BlogDao {
    private final BlogRepository repository;

    public BlogJPADataAccess(BlogRepository repository) {
        this.repository = repository;
    }

    @Override
    public void saveNewBlog(Blog Blog) {
    }

    @Override
    public Page<Blog> viewAllBlog(Pageable pageable) {
        return repository.findAll(pageable);
    }

    @Override
    public Optional<Blog> findBlogByTitle(String title) {
        return Optional.ofNullable(repository.searchBlogByTitle(title));
    }
    @Override
    public void deleteBlog(String blog) {
        repository.deleteBlogByTitle(blog);
    }
    @Override
    public void updateBlog(Blog blog) {
        repository.save(blog);
    }

    @Override
    public Optional<Blog> searchBlog(String title) {
        return Optional.ofNullable(repository.searchBlogByTitle(title));
    }

    @Override
    public List<Blog> randomBlogs(Integer noOfBlogs) {
        return repository.getRandomBlogs(noOfBlogs);
    }


}
