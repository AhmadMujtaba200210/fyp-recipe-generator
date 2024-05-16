package com.engicodes.backend.security;

import com.engicodes.backend.jwt.JWTAuthenticationFilter;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import static org.springframework.security.config.http.SessionCreationPolicy.STATELESS;

@Configuration
@EnableWebSecurity
public class SecurityFilterChainConfig {
    private final AuthenticationProvider authenticationProvider;
    private final JWTAuthenticationFilter jwtAuthenticationFilter;
    private final AuthenticationEntryPoint authenticationEntryPoint;
    public SecurityFilterChainConfig(AuthenticationProvider authenticationProvider, JWTAuthenticationFilter jwtAuthenticationFilter, AuthenticationEntryPoint authenticationEntryPoint) {
        this.authenticationProvider = authenticationProvider;
        this.jwtAuthenticationFilter = jwtAuthenticationFilter;
        this.authenticationEntryPoint = authenticationEntryPoint;
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity)throws Exception{
        httpSecurity
                .csrf(AbstractHttpConfigurer::disable)
                .authorizeHttpRequests(
                        auth->auth
                                .requestMatchers(
                                        //auth allowed endpoints
                                        "/api/v1/auth/**",
                                        //user allowed endpoints
                                        "/api/v1/user/**",
                                        // Blog Allowed EndPoints
                                        "/api/v1/blog",
                                        "/api/v1/blog/title/**",
                                        "/api/v1/blog/hot/",
                                        // News Allowed EndPoints
                                        "/api/v1/news",
                                        "/api/v1/news/title/**",
                                        "/api/v1/news/hot/**",
                                        // Recipes Allowed EndPoints
                                        "/api/v1/recipe/**",
                                        "/api/v1/recipe/hot/**",
                                        "/api/v1/recipe/id/**",
                                        "/api/v1/recipe/cuisine/**",
                                        "/api/v1/recipe/special"
                                )
                                .permitAll()
                                .anyRequest()
                                .authenticated()
                )
                .sessionManagement(session->session.sessionCreationPolicy(STATELESS))
                .authenticationProvider(authenticationProvider)
                // used for form login
                .addFilterBefore(
                        jwtAuthenticationFilter,
                        UsernamePasswordAuthenticationFilter.class)
                .exceptionHandling(exception -> exception.authenticationEntryPoint(authenticationEntryPoint));
                return httpSecurity.build();
    }

}
