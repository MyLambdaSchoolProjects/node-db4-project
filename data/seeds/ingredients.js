
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, ingredient: 'egg/s'},
        {id: 2, ingredient: 'all-purpose flour'},
        {id: 3, ingredient: 'granulated sugar'},
        {id: 4, ingredient: 'milk'},
        {id: 5, ingredient: 'vanilla extract'},
        {id: 6, ingredient: 'baking powder'},
        {id: 7, ingredient: 'packed brown sugar'},
        {id: 8, ingredient: 'baking soda'},
        {id: 9, ingredient: 'chocolate chips'},
        {id: 10, ingredient: 'chocolate powder'},
        {id: 11, ingredient: 'evaporated milk'},
        {id: 12, ingredient: 'salt'},
        {id: 13, ingredient: 'butter, softened'},
        {id: 14, ingredient: 'chopped nuts'}
      ]);
    });
};
