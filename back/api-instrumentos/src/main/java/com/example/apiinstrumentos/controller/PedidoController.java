package com.example.apiinstrumentos.controller;

import com.example.apiinstrumentos.controller.mercadoPago.MercadoPagoController;
import com.example.apiinstrumentos.controller.mercadoPago.PreferenceMP;
import com.example.apiinstrumentos.dtos.PedidosPorInstrumentoDTO;
import com.example.apiinstrumentos.dtos.PedidosPorMesAnioDTO;
import com.example.apiinstrumentos.entities.Pedido;
import com.example.apiinstrumentos.service.PedidoService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/pedido")
@AllArgsConstructor
@CrossOrigin(origins = "*")
public class PedidoController {

    private final PedidoService pedidoService;

    @GetMapping("/all")
    public ResponseEntity<List<Pedido>> getAll() {
        try {
            return ResponseEntity.ok(pedidoService.findAll());
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<Pedido> getOne(@PathVariable Long id) {
        try {
            return ResponseEntity.ok(pedidoService.findById(id));
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    @PostMapping
    public ResponseEntity<Pedido> save(@RequestBody Pedido pedido) {
        try {
            return ResponseEntity.ok(pedidoService.save(pedido));
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Pedido> update(@PathVariable Long id, @RequestBody Pedido pedido) {
        try {
            return ResponseEntity.ok(pedidoService.update(id, pedido));
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Boolean> delete(@PathVariable Long id) {
        try {
            return ResponseEntity.ok(pedidoService.delete(id));
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }


    //----- MercadoPago Pedido

    @PostMapping("/create_preference_mp")
    public PreferenceMP crearPreferenciaMercadoPago(@RequestBody Pedido pedido){
        var controllerMercadoPago = new MercadoPagoController();

        return controllerMercadoPago.getPreferenciaIdMercadoPago(pedido);
    }


    @GetMapping("/porMesAnio")
    public List<PedidosPorMesAnioDTO> getPedidosPorMesAnio() {
        try {
            return pedidoService.findPedidosGroupedByMonthAndYear();
        } catch (Exception e) {
            throw new RuntimeException(e);
        }

    }

    @GetMapping("/porInstrumento")
    public List<PedidosPorInstrumentoDTO> getPedidosPorInstrumento() {
        try {
            return pedidoService.findPedidosGroupedByInstrumento();
        } catch (Exception e) {
            throw new RuntimeException(e);
        }

    }
}
