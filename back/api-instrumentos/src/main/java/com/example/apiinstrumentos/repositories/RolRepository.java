package com.example.apiinstrumentos.repositories;

import com.example.apiinstrumentos.entities.Rol;
import com.example.apiinstrumentos.enums.RolName;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RolRepository  extends JpaRepository<Rol, Long> {
    Optional<Rol> findByRolName(RolName rolName);
}
