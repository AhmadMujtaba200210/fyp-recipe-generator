package com.engicodes.backend.controller.blogcontroller;

import com.engicodes.backend.exceptions.ResourceDuplicationException;
import com.engicodes.backend.exceptions.ResourceNotFoundException;
import com.engicodes.backend.model.Blog;
import com.engicodes.backend.model.Recipe;
import com.engicodes.backend.service.blogservice.BlogService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/blog")
public class BlogController {
    private final BlogService blogService;

    public BlogController(BlogService blogService) {
        this.blogService = blogService;
    }

    @GetMapping
    public ResponseEntity<?> getAllBlogs(@RequestParam(defaultValue = "0") int page,@RequestParam(defaultValue = "8") int size){
        Pageable pageable = PageRequest.of(page, size);
        Page<Blog> blogPage=blogService.allBlogs(pageable);
        return ResponseEntity.ok(blogPage);
    }
    @GetMapping("/title/{title}")
    public ResponseEntity<?> getEachBlog(@PathVariable("title") String blogTitle) throws ResourceNotFoundException {
        return ResponseEntity.ok(blogService.eachBlog(blogTitle));
    }

    @PostMapping("/post")
    public ResponseEntity<?> postBlog(@RequestBody BlogRequest blogRequest) throws ResourceDuplicationException {
        blogService.postNewBlog(blogRequest);
        return ResponseEntity.ok("Blog Posted with title: [%s]".formatted(blogRequest.title()));
    }
    @DeleteMapping("/delete/{title}")
    public ResponseEntity<?> deleteBlog(@PathVariable("title") String blogTitle) throws ResourceNotFoundException{
        blogService.deleteBlog(blogTitle);
        return ResponseEntity.ok("Blog deleted with title: [%s]".formatted(blogTitle));
    }
    @PutMapping("/update/{title}")
    public ResponseEntity<?> updateBlog(@RequestBody BlogRequest blogRequest,@PathVariable("title") String blogTitle) throws ResourceNotFoundException {
        blogService.updateBlog(blogRequest,blogTitle);
        return ResponseEntity.ok("Blog deleted with title: [%s]".formatted(blogTitle));
    }
    @GetMapping("/hot/{noOfBlogs}")
    public ResponseEntity<List<Blog>> getHotBlogs(@PathVariable("noOfBlogs") Integer noOfBlogs){
        return ResponseEntity.ok(blogService.hotBlogs(noOfBlogs));
    }

}
