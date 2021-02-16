DROP TABLE IF EXISTS actors;

CREATE TABLE actors (
    id SERIAL primary key,
    name VARCHAR(255),
    age INT,
    oscars INT
);

INSERT INTO actors (name, age, oscars)
VALUES ('Leonardo DiCaprio', 41, 1);

INSERT INTO actors (name, age, oscars)
VALUES ('Jennifer Lawrence', 25, 1);

INSERT INTO actors (name, age, oscars)
VALUES ('Samuel L. Jackson', 67, 0);

INSERT INTO actors (name, age, oscars)
VALUES ('Meryl Streep', 66,	3);

INSERT INTO actors (name, age, oscars)
VALUES ('John Cho',	43,	0);


--- SELECT * FROM actors WHERE "Number of Oscars" > 1;
--- SELECT * FROM actors WHERE age > 30;