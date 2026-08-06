import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CarroService, Marca, Modelo } from '../../services/carro';

@Component({
  selector: 'app-modelos',
  imports: [CommonModule, FormsModule],
  templateUrl: './modelos.html',
  styleUrl: './modelos.scss',
})
export class Modelos implements OnInit {
  modelos: Modelo[] = [];
  marcas: Marca[] = [];
  nomeModelo: string = '';
  marcaIdSelecionada: number | null = null;
  modeloEmEdicao: Modelo | null = null;
  mensagemErro: string = '';

  constructor(private carroService: CarroService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.carregarDados();
  }

  carregarDados(): void {
    this.carroService.getMarcas().subscribe(d => {
      this.marcas = [...d];
      this.cdr.detectChanges();
    });
    this.carroService.getModelos().subscribe(d => {
      this.modelos = [...d];
      this.cdr.detectChanges();
    });
  }

  salvar(): void {
    this.mensagemErro = '';
    if (!this.nomeModelo.trim()) {
      this.mensagemErro = 'Informe o nome do modelo.';
      return;
    }
    if (!this.marcaIdSelecionada) {
      this.mensagemErro = 'Selecione uma marca antes de cadastrar o modelo.';
      return;
    }
    const marca = this.marcas.find(m => m.id === Number(this.marcaIdSelecionada));
    if (!marca) {
      this.mensagemErro = 'Marca selecionada não é válida.';
      return;
    }

    if (this.modeloEmEdicao && this.modeloEmEdicao.id) {
      this.carroService.atualizarModelo(this.modeloEmEdicao.id, { nome: this.nomeModelo, marca })
        .subscribe({
          next: () => { this.cancelarEdicao(); this.carregarDados(); },
          error: () => { this.mensagemErro = 'Erro ao atualizar modelo.'; }
        });
    } else {
      this.carroService.adicionarModelo({ nome: this.nomeModelo, marca })
        .subscribe({
          next: () => { this.cancelarEdicao(); this.carregarDados(); },
          error: () => { this.mensagemErro = 'Erro ao cadastrar modelo.'; }
        });
    }
  }

  editar(modelo: Modelo): void {
    this.mensagemErro = '';
    this.modeloEmEdicao = modelo;
    this.nomeModelo = modelo.nome;
    this.marcaIdSelecionada = modelo.marca?.id ? Number(modelo.marca.id) : null;
    this.cdr.detectChanges();
  }

  deletar(id?: number): void {
    if (id) {
      this.carroService.deletarModelo(id).subscribe({
        next: () => this.carregarDados(),
        error: () => { this.mensagemErro = 'Erro ao deletar modelo.'; }
      });
    }
  }

  cancelarEdicao(): void {
    this.mensagemErro = '';
    this.modeloEmEdicao = null;
    this.nomeModelo = '';
    this.marcaIdSelecionada = null;
  }

  getMarcaNome(marca?: Marca): string {
    return marca ? marca.nome : '';
  }
}
