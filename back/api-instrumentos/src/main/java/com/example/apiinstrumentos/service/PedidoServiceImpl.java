package com.example.apiinstrumentos.service;

import com.example.apiinstrumentos.dtos.PedidosPorInstrumentoDTO;
import com.example.apiinstrumentos.dtos.PedidosPorMesAnioDTO;
import com.example.apiinstrumentos.entities.Pedido;
import com.example.apiinstrumentos.repositories.PedidoRepository;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.NoSuchElementException;

@Service
@Transactional
@AllArgsConstructor
public class PedidoServiceImpl implements PedidoService {

    private final PedidoRepository pedidoRepository;

    @Override
    public List<Pedido> findAll() throws Exception {
        try{
            return pedidoRepository.findAll();
        }catch (Exception e){
            throw new Exception(e.getMessage());
        }
    }

    @Override
    public Pedido findById(Long id) throws Exception {
        return pedidoRepository.findById(id)
                .orElseThrow(() -> new NoSuchElementException("No existe un pedido con ese Id"));
    }

    @Override
    public Pedido save(Pedido pedido) throws Exception {
        try {

            pedido.setFechaPedido(LocalDate.now());

            return pedidoRepository.save(pedido);
        } catch (Exception e) {
            throw new Exception(e.getMessage());
        }
    }

    @Override
    public Pedido update(Long id, Pedido pedido) throws Exception {
        try {
            if (!pedidoRepository.existsById(id)) {
                throw new NoSuchElementException("No existe un pedido con ese Id");
            }

            pedido.setId(id);
            return pedidoRepository.save(pedido);

        } catch (Exception e) {
            throw new Exception(e.getMessage());
        }
    }

    @Override
    public boolean delete(Long id) throws Exception {
        try {
            if (!pedidoRepository.existsById(id)) {
                throw new NoSuchElementException("No existe un pedido con ese Id");
            }

            pedidoRepository.deleteById(id);
            return true;
        } catch (Exception e) {
            throw new Exception(e.getMessage());
        }
    }

    @Override
    public List<PedidosPorMesAnioDTO> findPedidosGroupedByMonthAndYear() throws Exception {
        try{
            return pedidoRepository.findPedidosGroupedByMonthAndYear();
        }catch (Exception e){
            throw new Exception(e.getMessage());
        }
    }

    @Override
    public List<PedidosPorInstrumentoDTO> findPedidosGroupedByInstrumento() throws Exception {
        try{
            return pedidoRepository.findPedidosGroupedByInstrumento();
        }catch (Exception e){
            throw new Exception(e.getMessage());
        }
    }
}
