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
  creator       VARCHAR(50),
  discussion_id VARCHAR(50) REFERENCES forum.discussions (id)
);

CREATE TABLE forum.users
(
  id            VARCHAR(50) PRIMARY KEY NOT NULL,
  username      VARCHAR(255),
  password      VARCHAR(255),
  forename      VARCHAR(255),
  surname       VARCHAR(255),
  register_date TIMESTAMP,
  email         VARCHAR(255)
);

CREATE TABLE forum.voting
(
  post_id   VARCHAR(50) NOT NULL REFERENCES forum.posts (id),
  user_id   VARCHAR(50) NOT NULL REFERENCES forum.users (id),
  is_upvote BOOLEAN     NOT NULL,
  CONSTRAINT voting_pkey PRIMARY KEY (post_id, user_id),
  CONSTRAINT user_post_fkey FOREIGN KEY (post_id) REFERENCES forum.posts (id),
  CONSTRAINT user_id_fkey FOREIGN KEY (user_id) REFERENCES forum.users (id)
);