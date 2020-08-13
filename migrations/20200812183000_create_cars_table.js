
exports.up = function(knex) {
  return knex.schema.createTable("cars", tbl => {
      tbl.increments("id");

      tbl.string("VIN").notNullable().unique();
      tbl.string("make").notNullable();
      tbl.string("model").notNullable();
      tbl.integer("mileage").notNullable().defaultTo(0);
      tbl.string("transmission").notNullable();
      tbl.string("titleStatus").notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("cars");
};
