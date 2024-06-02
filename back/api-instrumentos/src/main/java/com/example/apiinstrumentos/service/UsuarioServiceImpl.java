package com.example.apiinstrumentos.service;

import com.example.apiinstrumentos.entities.Pedido;
import com.example.apiinstrumentos.entities.Rol;
import com.example.apiinstrumentos.entities.Usuario;
import com.example.apiinstrumentos.enums.RolName;
import com.example.apiinstrumentos.repositories.PedidoRepository;
import com.example.apiinstrumentos.repositories.RolRepository;
import com.example.apiinstrumentos.repositories.UsuarioRepository;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.NoSuchElementException;

@Service
@Transactional
@AllArgsConstructor
public class UsuarioServiceImpl implements UsuarioService{

    private final UsuarioRepository usuarioRepository;
    private final RolRepository rolRepository;

    @Override
    public List<Usuario> findAll() throws Exception {
        try{
            return usuarioRepository.findAll();
        }catch (Exception e){
            throw new Exception(e.getMessage());
        }
    }

    @Override
    public Usuario findById(Long id) throws Exception {
        return usuarioRepository.findById(id)
                .orElseThrow(() -> new NoSuchElementException("No existe un usuario con ese Id"));
    }

    @Override
    public Usuario findByNombreUsuario(String nombreUsuario) throws Exception {
        return usuarioRepository.findByNombreUsuario(nombreUsuario);
    }

    @Override
    public Usuario save(Usuario usuario) throws Exception {
        try {
            Rol rol = rolRepository.findByRolName(usuario.getRol().getRolName())
                    .orElseThrow(() -> new RuntimeException("Rol no encontrado"));
            usuario.setRol(rol);
            return usuarioRepository.save(usuario);
        } catch (Exception e) {
            throw new Exception(e.getMessage());
        }
    }

    @Override
    public Usuario update(Long id, Usuario usuario) throws Exception {
        try {
            if (!usuarioRepository.existsById(id)) {
                throw new NoSuchElementException("No existe un usuario con ese Id");
            }
            usuario.setId(id);
            return usuarioRepository.save(usuario);
        } catch (Exception e) {
            throw new Exception(e.getMessage());
        }
    }

    @Override
    public boolean delete(Long id) throws Exception {
        try {
            if (!usuarioRepository.existsById(id)) {
                throw new NoSuchElementException("No existe un usuario con ese Id");
            }
            usuarioRepository.deleteById(id);
            return true;
        } catch (Exception e) {
            throw new Exception(e.getMessage());
        }
    }
}