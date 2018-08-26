package com.github.boardyb.forum.user;

import org.springframework.data.repository.CrudRepository;

public interface RoleRepository extends CrudRepository<Role, String> {

    Role findByName(String name);
}
