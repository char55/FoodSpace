exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries

  return Promise.all([
    knex("tags").del()
      .then(function () {
        return Promise.all([
          knex("tags").insert({
            recipes_id: 1,
            category_id: 1
          }),

          knex("tags").insert({
            recipes_id: 2,
            category_id: 2
          }),


          knex("tags").insert({
            recipes_id: 3,
            category_id: 1
          }),

          knex("tags").insert({
            recipes_id: 4,
            category_id: 2
          }),

        ]);
      })
  ]);
};


