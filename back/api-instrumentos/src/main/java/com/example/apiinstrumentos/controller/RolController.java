package com.example.apiinstrumentos.controller;

import com.example.apiinstrumentos.entities.Rol;
import com.example.apiinstrumentos.service.RolService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/rol")
@AllArgsConstructor
@CrossOrigin(origins = "*")
public class RolController {

    private final RolService rolService;

    @GetMapping("/all")
    public ResponseEntity<List<Rol>> getAll() {
        try {
            return ResponseEntity.ok(rolService.findAll());
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
}