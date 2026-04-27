# TypeScript-Examplos

Repositório didático para praticar **TypeScript** com foco em:
- manipulação de arrays;
- orientação a objetos (interface + classes);
- testes automatizados com **Vitest**.

---

## Visão geral do que foi desenvolvido

O projeto foi evoluído em etapas (seguindo os commits) para sair de um exemplo inicial e chegar a um conjunto de funções utilitárias testadas.

---

### Estrutura principal

- `src/sum.ts` e `src/sum.test.ts`: exemplo inicial de função simples com teste unitário.
- `src/arrayFunctions.ts`: funções para operações com arrays e implementação da interface `Payable`.
- `src/arrayFunctions.test.ts`: suíte de testes cobrindo funções de arrays e comportamento das classes.
- `package.json`: configuração de dependências e script de teste com `vitest`.

---

## Evolução conforme commits

### 1) feat: Adicionando Pasta de Exemplos do TypeScript para Atividades
- Criação da base do projeto de exemplos em TypeScript para a disciplina.
- Definição da estrutura inicial para exercícios e testes.

### 2) fix: correção de erro (falta de biblioteca) nos códigos pendentes
- Correção de dependências para garantir execução dos códigos e dos testes.
- Ajuste do ambiente para estabilizar o fluxo de desenvolvimento.

### 3) feat(array): implement array manipulation functions
- Implementação das funções:
  - `squareWithFor`
  - `squareWithForEach`
  - `joinStrings`
  - `sortDescending`
  - `getFirstTwoElements`
  - `getEvenNumbers`
- Definição da interface `Payable`.
- Criação das classes `Product` e `Employee`, cada uma com cálculo próprio via método `calculate()`.

### 4) test(array): add unit tests for array functions
- Inclusão de testes unitários cobrindo:
  - operações de arrays;
  - comportamento da interface via classes concretas (`Product` e `Employee`).
- Garantia de regressão para validar as funcionalidades implementadas.

---

## Como executar o projeto

### Pré-requisitos
- Node.js instalado.
- npm instalado.

### Instalação
```bash
npm install
```

### Executar testes
```bash
npm test
```

---

## Tecnologias utilizadas
- TypeScript
- Vitest
- Node.js

---

## Autor

Projeto acadêmico de Aaron Goldberg.
