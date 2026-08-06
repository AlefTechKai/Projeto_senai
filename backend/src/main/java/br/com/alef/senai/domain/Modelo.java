package br.com.alef.senai.domain;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor

public class Modelo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String nome;

    @ManyToOne
    @JoinColumn(name = "marca_id")
    private Marca marca;
}