import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CarroService, Marca } from '../../services/carro';

@Component({
  selector: 'app-marcas',
  imports: [CommonModule, FormsModule],
  templateUrl: './marcas.html',
  styleUrl: './marcas.scss',
})
export class Marcas implements OnInit {
  marcas: Marca[] = [];
  nomeMarca: string = '';
  marcaEmEdicao: Marca | null = null;
  mensagemErro: string = '';

  constructor(private carroService: CarroService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.carregarMarcas();
  }

  carregarMarcas(): void {
    this.carroService.getMarcas().subscribe({
      next: d => {
        this.marcas = [...d];
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error(err);
        this.mensagemErro = 'Não foi possível conectar ao backend (http://localhost:8080).';
        this.cdr.detectChanges();
      }
    });
  }

  salvar(): void {
    this.mensagemErro = '';
    if (!this.nomeMarca.trim()) {
      this.mensagemErro = 'Informe o nome da marca.';
      return;
    }
    if (this.marcaEmEdicao && this.marcaEmEdicao.id) {
      this.carroService.atualizarMarca(this.marcaEmEdicao.id, { nome: this.nomeMarca })
        .subscribe({
          next: () => {
            this.cancelarEdicao();
            this.carregarMarcas();
          },
          error: (err) => {
            console.error(err);
            this.mensagemErro = 'Erro ao atualizar marca no backend.';
          }
        });
    } else {
      this.carroService.adicionarMarca({ nome: this.nomeMarca })
        .subscribe({
          next: (nova) => {
            this.nomeMarca = '';
            this.carregarMarcas();
          },
          error: (err) => {
            console.error(err);
            this.mensagemErro = 'Erro ao cadastrar marca no backend.';
          }
        });
    }
  }

  editar(marca: Marca): void {
    this.mensagemErro = '';
    this.marcaEmEdicao = marca;
    this.nomeMarca = marca.nome;
  }

  deletar(id?: number): void {
    if (!id) return;
    this.mensagemErro = '';
    this.carroService.getModelos().subscribe({
      next: (modelos) => {
        const modelosDaMarca = modelos.filter(m => m.marca?.id === id);
        const marca = this.marcas.find(m => m.id === id);
        let mensagem = `Deseja excluir a marca "${marca?.nome}"`;
        if (modelosDaMarca.length > 0) {
          const nomes = modelosDaMarca.map(m => m.nome).join(', ');
          mensagem += ` e os modelos atribuídos a ela?\n\n${nomes}`;
        } else {
          mensagem += '?';
        }
        if (confirm(mensagem)) {
          this.carroService.deletarMarca(id).subscribe({
            next: () => this.carregarMarcas(),
            error: () => { this.mensagemErro = 'Erro ao excluir marca.'; this.cdr.detectChanges(); }
          });
        }
      },
      error: () => {
        if (confirm(`Deseja excluir esta marca?`)) {
          this.carroService.deletarMarca(id).subscribe({
            next: () => this.carregarMarcas(),
            error: () => { this.mensagemErro = 'Erro ao excluir marca.'; this.cdr.detectChanges(); }
          });
        }
      }
    });
  }

  cancelarEdicao(): void {
    this.mensagemErro = '';
    this.marcaEmEdicao = null;
    this.nomeMarca = '';
  }
}
