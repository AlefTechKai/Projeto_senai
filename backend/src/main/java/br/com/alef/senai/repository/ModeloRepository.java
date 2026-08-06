package br.com.alef.senai.repository;

import br.com.alef.senai.domain.Modelo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface ModeloRepository extends JpaRepository<Modelo, Long> {

    @Transactional
    void deleteByMarcaId(Long marcaId);
}
