CREATE TABLE product (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    price DOUBLE PRECISION
);

INSERT INTO product VALUES (1, 'Manzana', 2.5);
INSERT INTO product VALUES (2, 'Naranja', 3.0);
