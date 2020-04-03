CREATE TABLE recipies (
	id integer PRIMARY KEY AUTOINCREMENT,
	list_id integer,
	recipe_name varchar,
	instructions text
);

CREATE TABLE ingredients (
	id integer PRIMARY KEY AUTOINCREMENT,
	ingredient varchar
);

CREATE TABLE ingredient_list (
	id integer PRIMARY KEY AUTOINCREMENT,
	ingredient_id integer,
	qty float,
	measure_unit varchar
);

