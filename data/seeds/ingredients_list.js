
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredient_list').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredient_list').insert([
        {qty: 2.25, measurement: 'cups', recipe_id: 1, ingredient_id: 2},
        {qty: 1, measurement: 'tsp', recipe_id: 1, ingredient_id: 8},
        {qty: 1, measurement: 'tsp', recipe_id: 1, ingredient_id: 12},
        {qty: 1, measurement: 'cup', recipe_id: 1, ingredient_id: 13},
        {qty: 0.75, measurement: 'cup', recipe_id: 1, ingredient_id: 3},
        {qty: 0.75, measurement: 'cup', recipe_id: 1, ingredient_id: 7},
        {qty: 1, measurement: 'tsp', recipe_id: 1, ingredient_id: 5},
        {qty: 2, measurement: 'large', recipe_id: 1, ingredient_id: 1},
        {qty: 2, measurement: 'cups', recipe_id: 1, ingredient_id: 9},
        {qty: 1, measurement: 'cup', recipe_id: 1, ingredient_id: 14}
      ]);
    });
};
