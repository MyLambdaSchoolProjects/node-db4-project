exports.up = function(knex) {
    return knex.schema
      .createTable("ingredients", tbl => {
        tbl.increments();
        tbl
          .string("ingredient", 255)
          .notNullable()
          .unique();
      })
      .createTable("ingredient_list", tbl => {
        tbl.primary(['recipe_id', 'ingredient_id'])
        tbl.float("qty").notNullable();
        tbl.string("measurement", 255).notNullable();
  
        tbl
          .integer("recipe_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("recipies");
  
        tbl
          .integer("ingredient_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("ingredients");
        
      })
      .createTable("recipies", tbl => {
        tbl.increments();
        tbl.string("recipe_name").notNullable();
        tbl
          .integer("list_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("ingredient_list");
          
        tbl.text('instructions').notNullable();
      });
  };
  
  exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists("ingredients")
      .dropTableIfExists("ingredient_list")
      .dropTableIfExists("recipies");
  };
  