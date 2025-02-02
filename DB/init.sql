CREATE DATABASE mydb;

\c mydb;


-- "industry_master" table
CREATE TABLE "industry_master" (
  "industry_id" serial PRIMARY KEY,
  "industry_name" varchar(100) NOT NULL
);

-- "client_master" table
CREATE TABLE "client_master" (
  "client_id" varchar(10) PRIMARY KEY,
  "client_name" varchar(100) NOT NULL,
  "contact_person" varchar(100) NOT NULL,
  "email_id" varchar(255) NOT NULL,
  "contact_number" varchar(30),
  "industry_id" int NOT NULL,
  FOREIGN KEY ("industry_id") REFERENCES "industry_master"("industry_id") ON DELETE CASCADE,
  CONSTRAINT "email_format_check" CHECK ("email_id" ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'),
  CONSTRAINT "contact_number_format_check" CHECK ("contact_number" ~* '^[0-9]+$')
);

