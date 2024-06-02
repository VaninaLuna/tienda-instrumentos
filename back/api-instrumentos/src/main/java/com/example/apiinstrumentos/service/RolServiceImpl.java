package com.example.apiinstrumentos.service;

import com.example.apiinstrumentos.entities.Rol;
import com.example.apiinstrumentos.enums.RolName;
import com.example.apiinstrumentos.repositories.RolRepository;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
@AllArgsConstructor
public class RolServiceImpl implements RolService{

    private final RolRepository rolRepository;

    @Override
    public Rol findByRolName(RolName rolName) throws Exception {
        return rolRepository.findByRolName(rolName)
            .orElseThrow(() -> new RuntimeException("Rol no encontrado"));
    }

    @Override
    @Transactional
    public List<Rol> findAll() throws Exception {
        try{
            return rolRepository.findAll();
        }catch (Exception e){
            throw new Exception(e.getMessage());
        }
    }
}
