DROP SCHEMA IF EXISTS forum;

CREATE SCHEMA forum;

CREATE TABLE forum.discussions
(
  id            VARCHAR(50) PRIMARY KEY NOT NULL,
  post_count    INT,
  creation_date TIMESTAMP,
  title         VARCHAR(1000),
  description   VARCHAR(20000),
  locked        BOOLEAN,
  featured      BOOLEAN,
  deleted       BOOLEAN,
  creator       VARCHAR(50)
);

CREATE TABLE forum.posts
(
  id            VARCHAR(50) PRIMARY KEY NOT NULL,
  description   VARCHAR(20000),
  upload_date   TIMESTAMP,
  vote_up       INT,
  vote_down     INT,
  creator       VARCHAR(50),
  discussion_id VARCHAR(50) REFERENCES forum.discussions (id)
);