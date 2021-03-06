DROP SCHEMA IF EXISTS public CASCADE;
DROP OWNED BY cuttable_api;
DROP USER IF EXISTS cuttable_api;

CREATE SCHEMA public;

/* CREATE TABLES */
CREATE TABLE account (
  id       SERIAL PRIMARY KEY,
  email    VARCHAR(255) UNIQUE,
  password VARCHAR(60) NOT NULL,
  enabled  BOOLEAN     NOT NULL
);

CREATE TABLE account_role (
  id         SERIAL PRIMARY KEY,
  account_id INTEGER     NOT NULL,
  role       VARCHAR(15) NOT NULL,
  CONSTRAINT fk_account FOREIGN KEY (account_id) REFERENCES account (id)
);

/* INSERT INTO TABLES */
INSERT INTO account (email, password, enabled)
VALUES ('test@cuttable.com', '$2a$10$JlGTuxoWsGStJzy/XYfOPuaa4R8k6Yfb6WA25QgHZ6tyio0br92YO', TRUE);
INSERT INTO account_role (account_id, role)
VALUES (1, 'ROLE_USER');

/* CREATE USERS, REVOKE AND GRANT PRIVILEGES */
CREATE USER cuttable_api WITH PASSWORD '@pxQTpSX$Ymsk#^0';
REVOKE CONNECT ON DATABASE cuttable FROM PUBLIC;
GRANT CONNECT ON DATABASE cuttable TO cuttable_api;
REVOKE ALL ON SCHEMA public FROM PUBLIC;
GRANT USAGE ON SCHEMA public TO cuttable_api;
REVOKE ALL ON ALL TABLES IN SCHEMA public FROM PUBLIC;
GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA PUBLIC TO cuttable_api;
REVOKE ALL ON ALL SEQUENCES IN SCHEMA public FROM PUBLIC;
GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA public TO cuttable_api;