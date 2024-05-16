package com.engicodes.backend.jwt;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface TokenRepository extends JpaRepository<Token,Long> {
    @Query(value = "select t from Token t inner join User u on t.user.email = u.email  where u.email = :email and (t.expired = false or t.revoked = false)")
    List<Token> findAllValidTokensByUser(String email);
}
