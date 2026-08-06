package br.com.alef.senai.repository;

import br.com.alef.senai.domain.Marca;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MarcaRepository extends JpaRepository<Marca, Long> {
    boolean existsByNome(String nome);
}
