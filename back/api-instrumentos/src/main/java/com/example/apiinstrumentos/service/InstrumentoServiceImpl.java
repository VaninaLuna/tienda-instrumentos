package com.example.apiinstrumentos.service;

import com.example.apiinstrumentos.entities.Instrumento;
import com.example.apiinstrumentos.repositories.InstrumentoRepository;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;

@Service
@Transactional
@AllArgsConstructor
public class InstrumentoServiceImpl implements InstrumentoService {

    private final InstrumentoRepository instrumentoRepository;

    @Override
    public List<Instrumento> findAll() throws Exception {
        try{
            return instrumentoRepository.findAll();
        }catch (Exception e){
            throw new Exception(e.getMessage());
        }
    }

    @Override
    public Instrumento findById(Long id) {
        return instrumentoRepository.findById(id)
                .orElseThrow(() -> new NoSuchElementException("No existe un instruento con ese Id"));
    }

    @Override
    public Instrumento save(Instrumento instrumento) throws Exception {
        try {
            return instrumentoRepository.save(instrumento);
        } catch (Exception e) {
            throw new Exception(e.getMessage());
        }
    }

    @Override
    public Instrumento update(Long id, Instrumento instrumento) throws Exception {

        try {

            if (!instrumentoRepository.existsById(id)) {
                throw new NoSuchElementException("No existe un instrumento con ese Id");
            }

            instrumento.setId(id);
            return instrumentoRepository.save(instrumento);

        } catch (Exception e) {
            throw new Exception(e.getMessage());
        }
    }

    @Override
    public boolean delete(Long id) throws Exception {
        try {

            if (!instrumentoRepository.existsById(id)) {
                throw new NoSuchElementException("No existe un instrumento con ese Id");
            }

            instrumentoRepository.deleteById(id);
            return true;
        } catch (Exception e) {
            throw new Exception(e.getMessage());
        }
    }

    @Override
    public List<Instrumento> findByCategoriaInstrumento_Id(Long idCategoria) throws Exception {
        try{
            return instrumentoRepository.findByCategoriaInstrumento_Id(idCategoria);
        }catch (Exception e){
            throw new Exception(e.getMessage());
        }
    }
}
