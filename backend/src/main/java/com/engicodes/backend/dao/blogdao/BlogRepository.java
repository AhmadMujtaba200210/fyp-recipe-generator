package com.engicodes.backend.dao.blogdao;

import com.engicodes.backend.model.Blog;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface BlogRepository extends JpaRepository<Blog, Integer> {
    Blog searchBlogByTitle(String title);
    void deleteBlogByTitle(String title);
    @Query(value = "SELECT * FROM blog ORDER BY RANDOM() LIMIT :count", nativeQuery = true)
    List<Blog> getRandomBlogs(@Param("count") Integer count);
}
