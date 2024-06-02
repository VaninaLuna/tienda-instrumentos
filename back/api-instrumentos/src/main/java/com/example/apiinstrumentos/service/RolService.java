package com.example.apiinstrumentos.service;

import com.example.apiinstrumentos.entities.Rol;
import com.example.apiinstrumentos.enums.RolName;

import java.util.List;

public interface RolService {
    Rol findByRolName(RolName rolName) throws Exception;
    List<Rol> findAll() throws Exception;
}
