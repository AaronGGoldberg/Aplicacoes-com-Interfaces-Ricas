import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

import { Produto } from './models/produto';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ButtonModule,
    FormsModule,
    CommonModule,
    TableModule,
    ToastModule
  ],
  providers: [MessageService],
  templateUrl: './app.html'
})
export class App {

  produtos: Produto[] = [];

  novoProduto: Produto = {
    id: 0,
    nome: '',
    preco: 0,
    ativo: true
  };

  editando = false;
  produtoEditandoId: number | null = null;

  produtoSelecionado: Produto | null = null;

  constructor(private messageService: MessageService) {}

  salvar() {
    if (this.editando) {
      this.produtos = this.produtos.map(p =>
        p.id === this.produtoEditandoId ? { ...this.novoProduto } : p
      );

      this.messageService.add({
        severity: 'success',
        summary: 'Atualizado',
        detail: 'Produto atualizado com sucesso!'
      });

      this.editando = false;
      this.produtoEditandoId = null;

    } else {
      this.novoProduto.id = Date.now();
      this.produtos.push({ ...this.novoProduto });

      this.messageService.add({
        severity: 'success',
        summary: 'Criado',
        detail: 'Produto adicionado!'
      });
    }

    this.resetarFormulario();
  }

  editar(produto: Produto) {
    this.novoProduto = { ...produto };
    this.editando = true;
    this.produtoEditandoId = produto.id;

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  remover(produto: Produto) {
    this.produtos = this.produtos.filter(p => p.id !== produto.id);

    if (this.produtoSelecionado?.id === produto.id) {
      this.produtoSelecionado = null;
    }

    this.messageService.add({
      severity: 'warn',
      summary: 'Removido',
      detail: 'Produto excluído'
    });
  }

  detalhar(produto: Produto) {
    this.produtoSelecionado = produto;
  }

  fecharDetalhes() {
    this.produtoSelecionado = null;
  }

  resetarFormulario() {
    this.novoProduto = { id: 0, nome: '', preco: 0, ativo: true };
  }
}