CREATE TABLE "wines" (
  "id" SERIAL PRIMARY KEY,
  "brand" VARCHAR(120) NOT NULL,
  "image"  VARCHAR(200) NOT NULL,
  "description" VARCHAR(500) NOT NULL,
  "type" VARCHAR(20) NOT NULL,
  "variety" VARCHAR(50) NOT NULL,
  "C rating" DECIMAL(3,1),
  "M rating" DECIMAL(3,1),
  "price" DECIMAL(3,2)
);