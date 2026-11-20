# Farmácia — Front-end (Projeto Final Bloco 3)

Front-end de uma farmácia fictícia desenvolvido como projeto final do Bloco 3 (React) do bootcamp Generation Brasil. Apresenta uma página institucional e um CRUD de categorias de produtos integrado a uma API REST via Axios.

## Objetivo

Aplicar os fundamentos de React estudados no bloco — componentização, rotas, estado, formulários controlados e consumo de API — em uma aplicação com tema de negócio.

## Funcionalidades

- **Página inicial** institucional com apresentação, depoimentos de exemplo, horários de funcionamento e contato.
- **Categorias**: listagem em cards, cadastro, edição e exclusão com confirmação.
- **Feedback de carregamento** com React Loader Spinner.
- Navbar e footer compartilhados entre as páginas.

## Tecnologias

- React 18 + TypeScript
- Vite
- React Router 7
- Axios
- Tailwind CSS
- Lucide React

## Arquitetura

| Pasta | Responsabilidade |
|---|---|
| `src/services/Service.ts` | Instância do Axios (`http://localhost:8080/`) e funções `buscar`, `cadastrar`, `atualizar`, `deletar` |
| `src/models` | Interfaces `Categoria` e `Produtos` |
| `src/categorias` | Lista, card, formulário e exclusão de categorias |
| `src/pages/home` | Página inicial |
| `src/components` | Navbar e footer |

## Estrutura de diretórios

```
ProjetoFinalBloco3/
└── src/
    ├── categorias/
    │   ├── listacategorias/
    │   ├── cardcategorias/
    │   ├── formcategorias/
    │   └── deletarcategoria/
    ├── components/     # navbar, footer
    ├── models/         # Categoria, Produtos
    ├── pages/home/
    ├── services/       # Service.ts
    └── App.tsx         # rotas
```

## Como executar localmente

### Pré-requisitos

- Node.js 18+
- Uma API REST rodando em `http://localhost:8080` com o recurso `/categorias` (campos `id`, `nomeCategoria`, `descricao`)

### Passos

```bash
git clone https://github.com/GuilhermeKaynam/ProjetoFinalBloco3.git
cd ProjetoFinalBloco3
yarn          # ou npm install
yarn dev      # ou npm run dev
```

Acesse `http://localhost:5173`. Sem a API, a página inicial funciona normalmente, mas a listagem de categorias fica vazia.

## Melhorias futuras

- Mover a URL da API para a variável de ambiente `VITE_API_URL`.
- Implementar o CRUD de produtos (o modelo já existe em `src/models`).
- Publicar a API de farmácia correspondente.
