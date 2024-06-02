package com.example.apiinstrumentos.service;

import com.example.apiinstrumentos.entities.PedidoDetalle;
import com.example.apiinstrumentos.repositories.PedidoDetalleRepository;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;

@Service
@Transactional
@AllArgsConstructor
public class PedidoDetalleServiceImpl implements PedidoDetalleService {

    private final PedidoDetalleRepository pedidoDetalleRepository;

    @Override
    public List<PedidoDetalle> findAll() throws Exception {
        try{
            return pedidoDetalleRepository.findAll();
        }catch (Exception e){
            throw new Exception(e.getMessage());
        }
    }

    @Override
    public PedidoDetalle findById(Long id) throws Exception {
        return pedidoDetalleRepository.findById(id)
                .orElseThrow(() -> new NoSuchElementException("No existe un pedido detalle con ese Id"));
    }

    @Override
    public PedidoDetalle save(PedidoDetalle instrumento) throws Exception {
        try {
            return pedidoDetalleRepository.save(instrumento);
        } catch (Exception e) {
            throw new Exception(e.getMessage());
        }
    }

    @Override
    public PedidoDetalle update(Long id, PedidoDetalle instrumento) throws Exception {
        try {
            if (!pedidoDetalleRepository.existsById(id)) {
                throw new NoSuchElementException("No existe un pedido detalle con ese Id");
            }

            instrumento.setId(id);
            return pedidoDetalleRepository.save(instrumento);

        } catch (Exception e) {
            throw new Exception(e.getMessage());
        }
    }

    @Override
    public boolean delete(Long id) throws Exception {
        try {
            if (!pedidoDetalleRepository.existsById(id)) {
                throw new NoSuchElementException("No existe un pedido detalle con ese Id");
            }

            pedidoDetalleRepository.deleteById(id);
            return true;
        } catch (Exception e) {
            throw new Exception(e.getMessage());
        }
    }
}
