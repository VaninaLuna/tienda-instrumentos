package com.example.apiinstrumentos.dtos;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class PedidosPorInstrumentoDTO {
    private String instrumento;
    private long count;

}
