package com.example.apiinstrumentos.repositories;

import com.example.apiinstrumentos.dtos.PedidosPorInstrumentoDTO;
import com.example.apiinstrumentos.dtos.PedidosPorMesAnioDTO;
import com.example.apiinstrumentos.entities.Pedido;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface PedidoRepository extends JpaRepository<Pedido, Long> {

    @Query("SELECT new com.example.apiinstrumentos.dtos.PedidosPorMesAnioDTO(YEAR(p.fechaPedido), MONTH(p.fechaPedido), COUNT(p)) " +
            "FROM Pedido p GROUP BY YEAR(p.fechaPedido), MONTH(p.fechaPedido)")
    List<PedidosPorMesAnioDTO> findPedidosGroupedByMonthAndYear();

    @Query("SELECT new com.example.apiinstrumentos.dtos.PedidosPorInstrumentoDTO(pd.instrumento.instrumento, COUNT(pd)) " +
            "FROM PedidoDetalle pd GROUP BY pd.instrumento.instrumento")
    List<PedidosPorInstrumentoDTO> findPedidosGroupedByInstrumento();

    List<Pedido> findByFechaPedidoBetween(LocalDate fechaDesde, LocalDate fechaHasta);
}
