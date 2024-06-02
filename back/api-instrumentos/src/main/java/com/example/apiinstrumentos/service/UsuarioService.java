package com.example.apiinstrumentos.service;

import com.example.apiinstrumentos.entities.Usuario;

import java.util.List;

public interface UsuarioService {
    List<Usuario> findAll() throws Exception;
    Usuario findById(Long id) throws Exception;
    Usuario findByNombreUsuario(String nombreUsuario) throws Exception;
    Usuario save(Usuario usuario) throws Exception;
    Usuario update(Long id, Usuario usuario) throws Exception;
    boolean delete(Long id) throws Exception;
}
