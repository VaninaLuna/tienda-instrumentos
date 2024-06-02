package com.example.apiinstrumentos.service;

import com.example.apiinstrumentos.entities.Pedido;
import com.example.apiinstrumentos.entities.PedidoDetalle;
import com.example.apiinstrumentos.repositories.PedidoRepository;
import lombok.AllArgsConstructor;
import org.apache.poi.ss.usermodel.*;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.time.LocalDate;
import java.util.List;

@Service
@AllArgsConstructor
public class ExcelReportServiceImpl implements ExcelReportService{
    @Autowired
    private PedidoRepository pedidoRepository;

    @Override
    public ByteArrayInputStream generateExcelReport(LocalDate fechaDesde, LocalDate fechaHasta) throws IOException {
        List<Pedido> pedidos = pedidoRepository.findByFechaPedidoBetween(fechaDesde, fechaHasta);

        try (Workbook workbook = new XSSFWorkbook()) {
            Sheet sheet = workbook.createSheet("Reporte de Pedidos");

            Row headerRow = sheet.createRow(0);
            String[] columns = {"Fecha Pedido", "Instrumento", "Marca", "Modelo", "Cantidad", "Precio", "Subtotal"};
            for (int i = 0; i < columns.length; i++) {
                Cell cell = headerRow.createCell(i);
                cell.setCellValue(columns[i]);
            }

            int rowIdx = 1;
            for (Pedido pedido : pedidos) {
                for (PedidoDetalle detalle : pedido.getPedidoDetalles()) {
                    Row row = sheet.createRow(rowIdx++);

                    row.createCell(0).setCellValue(pedido.getFechaPedido().toString());
                    row.createCell(1).setCellValue(detalle.getInstrumento().getInstrumento());
                    row.createCell(2).setCellValue(detalle.getInstrumento().getMarca());
                    row.createCell(3).setCellValue(detalle.getInstrumento().getModelo());
                    row.createCell(4).setCellValue(detalle.getCantidad());
                    row.createCell(5).setCellValue(detalle.getInstrumento().getPrecio());
                    row.createCell(6).setCellValue(detalle.getCantidad() * detalle.getInstrumento().getPrecio());
                }
            }

            ByteArrayOutputStream out = new ByteArrayOutputStream();
            workbook.write(out);
            return new ByteArrayInputStream(out.toByteArray());
        }
    }

}
