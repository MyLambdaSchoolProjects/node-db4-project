const db = require("../data/dbConfig");

const knex =require('knex')({client: 'sqlite3'});

module.exports = {
  getRecipies,
  getShoppingList,
  getInstructions
};

function getRecipies() {
  /*
    select r.recipe_name as recipe
,group_concat(il.qty||' '|| il.measurement||' ' ||i.ingredient|| '\n' )as ingredients  
,r.instructions
    
from recipies as r
join ingredient_list as il
    on r.list_id = il.recipe_id
join ingredients as i
    on il.ingredient_id = i.id
group by recipe
    */
  return db("recipies as r")
    .select(
        'r.id',
        'r.recipe_name as recipe',
        knex.raw(`GROUP_CONCAT(il.qty|| ' '||il.measurement|| ' ' ||i.ingredient||' ' ||char(10) )as ingredients`),
        'r.instructions'
    )
    .join('ingredient_list as il', 'r.list_id', 'il.recipe_id')
    .join('ingredients as i', 'il.ingredient_id', 'i.id');
}

function getShoppingList() {}

function getInstructions() {}
