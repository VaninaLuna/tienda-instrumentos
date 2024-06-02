package com.example.apiinstrumentos.service;

import com.example.apiinstrumentos.dtos.PedidosPorInstrumentoDTO;
import com.example.apiinstrumentos.dtos.PedidosPorMesAnioDTO;
import com.example.apiinstrumentos.entities.Pedido;

import java.util.List;

public interface PedidoService {

    List<Pedido> findAll() throws Exception;
    Pedido findById(Long id) throws Exception;
    Pedido save(Pedido instrumento) throws Exception;
    Pedido update(Long id, Pedido instrumento) throws Exception;
    boolean delete(Long id) throws Exception;

    List<PedidosPorMesAnioDTO> findPedidosGroupedByMonthAndYear() throws Exception;
    List<PedidosPorInstrumentoDTO> findPedidosGroupedByInstrumento() throws Exception;
}
