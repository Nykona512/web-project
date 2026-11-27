# OpenBoard em React

O **OpenBoard** é um quadro de vagas voltado a oportunidades em startups e empresas de tecnologia. O projeto foi desenvolvido como trabalho final (N3) da disciplina de Front-End, com o objetivo de migrar a aplicação original em HTML, CSS e JavaScript para React, preservando sua proposta visual e aplicando os conceitos estudados em aula.

A aplicação permite consultar oportunidades, combinar filtros, pesquisar por cargo, visualizar os detalhes de uma vaga e cadastrar novas oportunidades. A navegação é realizada no formato de uma SPA (*Single Page Application*), sem recarregar o documento a cada mudança de rota.

## Integrante
- **Lucas Raupp Ferreira** — GitHub: **[@Nykona512](https://github.com/Nykona512)**

## Como rodar

Pré-requisito: Node.js **22.22.0 ou superior**.

A partir da raiz do repositório, execute:

```bash
cd openboard-react
npm install
npm run dev
```

Abrir **http://localhost:5173** no navegador.

Para verificar a qualidade do código e gerar a versão de produção, execute na pasta `openboard-react`:

```bash
npm run lint
npm run build
```

## Requisitos funcionais
- [x] RF1 Home do OpenBoard
- [x] RF2 Vagas vindas da API
- [x] RF3 Newsletter
- [x] RF4 Filtros e título da aba
- [x] RF5 Busca por cargo
- [x] RF6 Detalhe da vaga e navegação
- [x] RF7 Cadastro de vaga
- [x] RF8 Vaga cadastrada fica salva

## Funcionalidades

- **Listagem de vagas:** carregamento de sete oportunidades iniciais a partir de um arquivo JSON, com mensagens de carregamento e erro.
- **Filtros e pesquisa:** seleção por tipo de vaga e área de atuação, busca por cargo em tempo real sem distinção entre maiúsculas e minúsculas, contador de resultados e opção de limpar as seleções.
- **Detalhes da vaga:** exibição das informações completas da oportunidade, com navegação de retorno à Home.
- **Cadastro de vagas:** formulário com sete campos obrigatórios (empresa, cargo, salário, modelo, tipo, área e descrição), validação e confirmação reutilizando o componente de card.
- **Newsletter:** validação do e-mail e confirmação de inscrição simulada.
- **Responsividade e modo escuro:** interface adaptada a diferentes tamanhos de tela, com alternância entre os temas claro e escuro pelo cabeçalho.
- **Depoimentos:** seção com exemplos de relatos para demonstrar a renderização de listas de componentes.

## Tecnologias utilizadas

- **React e JSX:** construção da interface com componentes reutilizáveis, props, children e hooks (`useState` e `useEffect`).
- **JavaScript:** lógica de filtros, validação de formulários, manipulação de arrays e consumo de dados com `fetch`.
- **React Router (`react-router`):** gerenciamento das rotas e navegação interna.
- **CSS:** estilização da interface, Flexbox, Grid, media queries e temas claro e escuro.
- **Vite e ESLint:** ambiente de desenvolvimento, compilação e verificação do código.
- **JSON e localStorage:** dados iniciais e persistência local das vagas e da preferência de tema.

## Como a aplicação funciona

Ao acessar a Home, o componente `HomePage` utiliza `useEffect` para solicitar as vagas ao serviço `vagasService.js`. O serviço realiza uma requisição `fetch` ao arquivo `public/api/vagas.json`, servido pelo Vite, e valida a resposta antes de disponibilizar os dados.

As vagas do JSON são combinadas com as vagas cadastradas no navegador e repassadas por props ao componente `Vagas`. Ele utiliza `useState` para controlar os filtros e a pesquisa, `.filter()` para selecionar os resultados e `.map()` para renderizar os componentes `VagaCard`. O contador e o título da aba acompanham a quantidade de vagas encontradas.

Na página de cadastro, os dados do formulário são controlados pelo React e validados antes do envio. Uma vaga válida recebe um identificador gerado com `Date.now()` e é salva no `localStorage`, ficando disponível na Home mesmo após atualizar a página. O tema selecionado também é armazenado no navegador.

Por se tratar de um projeto acadêmico de Front-End, não há servidor de cadastro, banco de dados, autenticação, cobrança ou envio real de e-mails. A API é simulada por um arquivo JSON local e as vagas criadas ficam restritas ao navegador e à origem em que foram cadastradas.

## Rotas da aplicação

| Rota | Descrição |
| --- | --- |
| `/` | Página inicial com vagas, filtros, busca, newsletter e depoimentos. |
| `/vagas/:id` | Detalhes de uma vaga específica, com tratamento de vaga inexistente. |
| `/publicar` | Formulário de cadastro e confirmação da nova vaga. |
| `*` | Página 404 para endereços não encontrados. |

## Organização do projeto

```text
openboard-react/
├── public/
│   └── api/vagas.json       # Dados iniciais das vagas
├── src/
│   ├── assets/             # Recursos visuais
│   ├── components/         # Componentes reutilizáveis e Layout
│   ├── data/               # Dados estáticos, como depoimentos
│   ├── pages/              # Páginas associadas às rotas
│   ├── services/           # Consulta das vagas com fetch
│   ├── utils/              # Persistência de vagas no localStorage
│   ├── App.css             # Estilos, responsividade e temas
│   ├── App.jsx             # Definição das rotas
│   └── main.jsx            # Inicialização do React e BrowserRouter
└── package.json            # Dependências e comandos do projeto
```

## Funcionalidade extra: modo escuro

O botão no cabeçalho permite alternar entre os temas claro e escuro em todas as páginas. A implementação utiliza `useState` para controlar o tema e `useEffect` para atualizar o atributo `data-tema` do elemento HTML, que determina quais regras do CSS são aplicadas. A preferência é salva no `localStorage` para ser recuperada em visitas posteriores.
