package com.engicodes.backend.controller.newscontroller;

import com.engicodes.backend.exceptions.ResourceDuplicationException;
import com.engicodes.backend.exceptions.ResourceNotFoundException;
import com.engicodes.backend.model.News;
import com.engicodes.backend.service.newsservice.NewsService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/news")
public class NewsController {
    private final NewsService newsService;

    public NewsController(NewsService newsService) {
        this.newsService = newsService;
    }

    @GetMapping
    public ResponseEntity<?> getAllNews(){
        return ResponseEntity.ok(newsService.allNews());
    }

    @GetMapping("/title/{title}")
    public ResponseEntity<?> getEachNews(@PathVariable("title") String newsTitle) throws ResourceNotFoundException {
        return ResponseEntity.ok(newsService.eachNews(newsTitle));
    }

    @PostMapping("/post")
    public ResponseEntity<?> postNews(@RequestBody NewsRequest newsRequest) throws ResourceDuplicationException {
        newsService.postNews(newsRequest);
        return ResponseEntity.ok("news Posted with title: [%s]".formatted(newsRequest.title()));
    }

    @DeleteMapping("/delete/{title}")
    public ResponseEntity<?> deleteNews(@PathVariable("title") String newsTitle) throws ResourceNotFoundException {
        newsService.deleteNews(newsTitle);
        return ResponseEntity.ok("news deleted with title: [%s]".formatted(newsTitle));
    }
    @PutMapping("/update/{title}")
    public ResponseEntity<?> updateNews(@RequestBody NewsRequest newsRequest,@PathVariable("title") String newsTitle) throws ResourceNotFoundException {
        newsService.updateNews(newsRequest,newsTitle);
        return ResponseEntity.ok("news deleted with title: [%s]".formatted(newsTitle));
    }

    @GetMapping("/hot/{noOfNews}")
    public ResponseEntity<List<News>> getHotNews(@PathVariable("noOfNews") Integer noOfBlogs){
        return ResponseEntity.ok(newsService.hotNews(noOfBlogs));
    }
}
