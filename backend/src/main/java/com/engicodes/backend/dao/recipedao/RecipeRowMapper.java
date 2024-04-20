package com.engicodes.backend.dao.recipedao;

import com.engicodes.backend.model.Recipe;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Component;

import java.sql.ResultSet;
import java.sql.SQLException;

@Component
public class RecipeRowMapper implements RowMapper<Recipe> {
    @Override
    public Recipe mapRow(ResultSet rs, int rowNum) throws SQLException {
        return new Recipe(
                rs.getInt("id"),
                rs.getString("title"),
                rs.getString("ingredients"),
                rs.getString("instructions"),
                rs.getString("cuisine"),
                rs.getDate("date").toLocalDate()
        );
    }
}
