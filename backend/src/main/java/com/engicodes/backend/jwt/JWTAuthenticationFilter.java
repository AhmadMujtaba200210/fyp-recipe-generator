package com.engicodes.backend.jwt;

import com.engicodes.backend.exceptions.ResourceNotAuthorisedException;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.lang.NonNull;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@Component
public class JWTAuthenticationFilter extends OncePerRequestFilter {
    private final JWTUtil jwtUtil;
    private final UserDetailsService userDetailsService;
    public JWTAuthenticationFilter(JWTUtil jwtUtil, UserDetailsService userDetailsService) {
        this.jwtUtil = jwtUtil;
        this.userDetailsService = userDetailsService;
    }

    @Override
    protected void doFilterInternal(
            @NonNull
            HttpServletRequest request,
            @NonNull
            HttpServletResponse response,
            @NonNull
            FilterChain filterChain
    ) throws ServletException, IOException {
//        // allowing register request to proceed normally
        if (request.getServletPath().contains("/api/v1/customer/register")) {
            filterChain.doFilter(request, response);
            return;
        }

        // getting token header
        String authHeader = request.getHeader("Authorization");
        // validating if token is in header or empty header
        if (authHeader==null || !authHeader.startsWith("Bearer " )){
            filterChain.doFilter(request,response);
            return;
        }
        String jwt = authHeader.substring(7);
        // getting subject to authenticate user: unique column of table (email)
        String subject = jwtUtil.extractUsername(jwt);

        // if subject is validated then loading user details from it
        if (subject!= null && SecurityContextHolder.getContext().getAuthentication()==null){
            UserDetails userDetails = userDetailsService.loadUserByUsername(subject);
            try {
                if (jwtUtil.isTokenValid(jwt,userDetails)){
                    // creating authentication token with user details
                    UsernamePasswordAuthenticationToken authenticationToken =
                            new UsernamePasswordAuthenticationToken(
                                    userDetails,
                                    null,
                                    userDetails.getAuthorities()
                            );
                    // setting authentication token
                    authenticationToken.setDetails(
                            new WebAuthenticationDetailsSource().buildDetails(
                                    request
                            )
                    );
                    // configuring Security context filter with authenticated token, so it may allow the request as per token access
                    SecurityContextHolder.getContext().setAuthentication(authenticationToken);
                }
            } catch (ResourceNotAuthorisedException e) {
                throw new RuntimeException(e);
            }
        }
        filterChain.doFilter(request,response);
    }
}
