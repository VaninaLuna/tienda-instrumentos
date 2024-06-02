package com.example.apiinstrumentos.controller;

import com.example.apiinstrumentos.entities.Instrumento;
import com.example.apiinstrumentos.service.InstrumentoService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/instrumento")
@AllArgsConstructor
@CrossOrigin(origins = "*")
public class InstrumentoController {

    private final InstrumentoService instrumentoService;

    @GetMapping("/all")
    public ResponseEntity<List<Instrumento>> getAll() {
        try {
            return ResponseEntity.ok(instrumentoService.findAll());
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<Instrumento> getOne(@PathVariable Long id) {
        try {
            return ResponseEntity.ok(instrumentoService.findById(id));
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    @GetMapping("/categoria/{idCategoria}")
    public ResponseEntity<List<Instrumento>> getByCategoriaId(@PathVariable Long idCategoria) {
        try {
            return ResponseEntity.ok(instrumentoService.findByCategoriaInstrumento_Id(idCategoria));
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    @PostMapping
    public ResponseEntity<Instrumento> save(@RequestBody Instrumento instrumento) {
        try {
            return ResponseEntity.ok(instrumentoService.save(instrumento));
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Instrumento> update(@PathVariable Long id, @RequestBody Instrumento instrumento) {
        try {
            return ResponseEntity.ok(instrumentoService.update(id, instrumento));
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Boolean> delete(@PathVariable Long id) {
        try {
            return ResponseEntity.ok(instrumentoService.delete(id));
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
}
