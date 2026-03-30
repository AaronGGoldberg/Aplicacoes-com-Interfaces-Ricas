# Site Pessoal – Aaron Guerra Goldberg

Este é um site pessoal que desenvolvi como parte de uma atividade da disciplina de Web Design.

O objetivo foi criar uma **interface com 3 páginas (Home, Sobre e Contato)**, com áreas de:
- Cabeçalho
- Menu de navegação
- Conteúdo com texto e imagem
- Rodapé

Além disso, eu adicionei um recurso para **suporte bilíngue (Português 🇧🇷 e Inglês 🇺🇸)** com **botões de troca de idioma**, usando JavaScript de forma simples.
(OBS: irei reaproveitar esse site para outra disciplina, por isso o suporte bilíngue.)

---

# Estrutura dos Arquivos


site-pessoal/
├── index.html        → Página inicial
├── sobre.html        → Página com informações sobre mim
├── contato.html      → Página com meus contatos
├── style.css         → Estilos do site (externo)
├── script.js         → Script para troca de idioma
├── Foto.jpg          → Minha imagem
└── README.md         → Este arquivo


---

# Funcionalidades

Site com layout simples
Botões de navegação entre as páginas  
Conteúdo **bilíngue**, com alternância entre idiomas sem recarregar a página  

---

# Como funciona a troca de idioma?

- Por padrão, o site carrega todo o conteúdo em **Português**.
- Há dois botões no topo (🇧🇷 e 🇺🇸).
- Quando clicamos, o conteúdo em um idioma é escondido, e o outro aparece, usando **JavaScript simples**.
- Tudo é feito na mesma página, sem recarregar ou redirecionar. (somente com o JavaScript foi possível essa proeza kkk.)

---

# Tecnologias Utilizadas

- HTML5
- CSS (arquivo externo)
- JavaScript (O básico apenas)
- Figma (para o protótipo visual)

---

# Como Rodar o Projeto? 🚀

Para visualizar o site no seu navegador, você precisa rodar um **servidor local**. Isso é necessário porque alguns navegadores não permitem que você abra arquivos HTML diretamente do seu computador por questões de segurança.

## Passo 1: Abra o Terminal

Você pode usar o terminal do seu computador ou o terminal integrado do VS Code. Se estiver usando VS Code, pressione **Ctrl + Backtick** (ou Cmd + ~ no Mac) para abrir o terminal integrado.

## Passo 2: Navegue até a Pasta do Projeto

Digite o comando abaixo e pressione Enter:

```bash
cd ProjetoVersion
```

Se você não estiver na pasta correta, você pode digitar o caminho completo:

```bash
cd /caminho/para/ProjetoVersion
```

## Passo 3: Inicie o Servidor HTTP

Agora, para rodar o site, digite o seguinte comando:

```bash
npx http-server
```

Depois de alguns segundos, você verá uma mensagem no terminal dizendo algo assim:

```
Available on:
  http://127.0.0.1:8080
```

## Passo 4: Abra no Navegador

Abra seu navegador (Chrome, Firefox, Edge, etc.) e digite na barra de endereço:

```
http://127.0.0.1:8080
```

ou simplesmente clique no link que aparece no terminal!

## Passo 5: Pronto!

O site deve abrir e você pode:
- Clicar nos botões de navegação para ir às páginas
- Clicar nos botões de idioma (🇧🇷 e 🇺🇸) para trocar o idioma
- Explorar todas as funcionalidades

## Para Parar o Servidor

Quando quiser desligar o servidor, volte ao terminal e pressione:

```
Ctrl + C
```

---

## ⚠️ Dicas Importantes:

- **Primeira vez?** Se receber uma mensagem pedindo para instalar `http-server`, apenas Digite `y` e pressione Enter
- **Porta diferente?** Se a porta 8080 já estiver em uso, o `http-server` automaticamente usará outra porta (8081, 8082, etc.)
- **Arquivo HTML não abre?** Use o método acima! Não tente clicar diretamente no arquivo HTML
- **Mudou o código?** Atualize a página do navegador (F5 ou Ctrl + R) para ver as mudanças

---

## Alternativas para Rodar o Projeto

Se `http-server` não funcionar, você pode usar estes comandos alternativos:

### Com Python:
```bash
python3 -m http.server 8000
```
(Abra http://127.0.0.1:8000 no navegador)

### Com Live Server (VS Code):
1. Instale a extensão **Live Server** no VS Code
2. Clique com botão direito em `index.html`
3. Selecione **"Open with Live Server"**

---

# Créditos

Desenvolvido por Aaron Guerra Goldberg – Estudante de TADS / IFRN

---