package br.com.alef.senai.controller;

import br.com.alef.senai.domain.Modelo;
import br.com.alef.senai.repository.MarcaRepository;
import br.com.alef.senai.repository.ModeloRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/modelos")
@CrossOrigin("*")
public class ModeloController {

    @Autowired
    private ModeloRepository modeloRepository;

    @Autowired
    private MarcaRepository marcaRepository;

    @GetMapping
    public List<Modelo> listar() {
        return modeloRepository.findAll();
    }

    @PostMapping
    public ResponseEntity<?> salvar(@RequestBody Modelo modelo) {
        if (modelo.getMarca() == null || modelo.getMarca().getId() == null) {
            return ResponseEntity.badRequest().body("Marca é obrigatória.");
        }
        return marcaRepository.findById(modelo.getMarca().getId())
                .map(marca -> {
                    modelo.setMarca(marca);
                    return ResponseEntity.ok(modeloRepository.save(modelo));
                }).orElse(ResponseEntity.badRequest().build());
    }

    @PutMapping("/{id}")
    public ResponseEntity<Modelo> atualizar(@PathVariable Long id, @RequestBody Modelo modelo) {
        return modeloRepository.findById(id)
                .map(r -> {
                    r.setNome(modelo.getNome());
                    if (modelo.getMarca() != null && modelo.getMarca().getId() != null) {
                        marcaRepository.findById(modelo.getMarca().getId())
                                .ifPresent(r::setMarca);
                    }
                    return ResponseEntity.ok(modeloRepository.save(r));
                }).orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deletar(@PathVariable Long id) {
        return modeloRepository.findById(id)
                .map(r -> {
                    modeloRepository.deleteById(id);
                    return ResponseEntity.ok().build();
                }).orElse(ResponseEntity.notFound().build());
    }
}
