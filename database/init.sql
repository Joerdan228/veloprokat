CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  password VARCHAR(100) NOT NULL
);

CREATE TABLE bikes (
  id SERIAL PRIMARY KEY,
  model VARCHAR(100) NOT NULL,
  status VARCHAR(50) NOT NULL,
  location VARCHAR(100) NOT NULL
);

CREATE TABLE rentals (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id),
  bike_id INT REFERENCES bikes(id),
  start_time TIMESTAMP NOT NULL,
  end_time TIMESTAMP
);

CREATE TABLE payments (
  id SERIAL PRIMARY KEY,
  rental_id INT REFERENCES rentals(id),
  amount DECIMAL(10, 2) NOT NULL,
  status VARCHAR(50) NOT NULL
);