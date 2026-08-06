package br.com.alef.senai.controller;

import br.com.alef.senai.domain.Marca;
import br.com.alef.senai.repository.MarcaRepository;
import br.com.alef.senai.repository.ModeloRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/marcas")
@CrossOrigin("*")
public class MarcaController {

    @Autowired
    private MarcaRepository marcaRepository;

    @Autowired
    private ModeloRepository modeloRepository;

    @GetMapping
    public List<Marca> listar() {
        return marcaRepository.findAll();
    }

    @PostMapping
    public Marca salvar(@RequestBody Marca marca) {
        return marcaRepository.save(marca);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Marca> atualizar(@PathVariable Long id, @RequestBody Marca marca) {
        return marcaRepository.findById(id)
                .map(r -> {
                    r.setNome(marca.getNome());
                    return ResponseEntity.ok(marcaRepository.save(r));
                }).orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deletar(@PathVariable Long id) {
        return marcaRepository.findById(id)
                .map(r -> {
                    modeloRepository.deleteByMarcaId(id);
                    marcaRepository.deleteById(id);
                    return ResponseEntity.ok().build();
                }).orElse(ResponseEntity.notFound().build());
    }
}
