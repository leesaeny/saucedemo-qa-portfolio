# SauceDemo | QA Portfolio

**Testes funcionais, investigação de defeitos e automação E2E com Cypress**

Portfólio de Quality Assurance aplicado ao [SauceDemo](https://www.saucedemo.com/), uma aplicação de demonstração de comércio eletrônico.

O projeto acompanha o processo de testes de software desde a análise de requisitos até a avaliação dos resultados, com foco em **rastreabilidade, cobertura baseada em riscos e evidências reproduzíveis**.

Desenvolvido como aplicação prática dos conhecimentos adquiridos no *Microsoft Junior QA Software Tester Professional Certificate*.

## 1. Visão geral

O projeto contempla quatro fluxos funcionais:

| Funcionalidade | O que será avaliado |
|---|---|
| Login | Autenticação, validação de entradas e controle de acesso |
| Catálogo | Exibição, seleção e consistência dos produtos |
| Carrinho | Inclusão, remoção, quantidade e integridade dos itens |
| Checkout | Validação de dados, resumo financeiro e conclusão do pedido |

A abordagem combina testes manuais, investigação exploratória e automação progressiva de cenários adequados à regressão.

Os critérios de validação são fundamentados em comportamentos observáveis e hipóteses documentadas, sem serem apresentados como requisitos oficiais do SauceDemo.

## 2. Tecnologias e ferramentas

| Ferramenta | Aplicação no projeto |
|---|---|
| Jira | Planejamento, acompanhamento e registro de defeitos |
| Zephyr | Gerenciamento de casos e execuções de teste |
| Cypress | Automação E2E, com ambiente inicial configurado |
| JavaScript e Node.js | Desenvolvimento e execução das automações |
| Git e GitHub | Versionamento e documentação |
| VS Code | Ambiente de desenvolvimento |

**GitHub Actions:** integração contínua prevista para uma etapa posterior.

## 3. Cobertura e resultados

## 3. Cobertura e resultados

**Situação atual: fluxo de login validado manualmente.**

| Funcionalidade | Testes executados | Aprovação funcional | Defeitos | Situação |
|---|---:|---:|---:|---|
| Login | 6 | 100% | 1 | Ciclo concluído |
| Catálogo | — | — | — | Planejado |
| Carrinho | — | — | — | Planejado |
| Checkout | — | — | — | Planejado |

### Resultados do ciclo de login

- 6 casos de teste elaborados e executados.
- 4 requisitos funcionais avaliados.
- 100% de cobertura dos requisitos identificados.
- 100% de aprovação nos critérios funcionais avaliados.
- 1 defeito visual reproduzido e investigado tecnicamente.

### Destaque: investigação de defeito

Durante a validação da autenticação com senha incorreta, foi identificado um problema de legibilidade na mensagem de erro.

A investigação com Chrome DevTools identificou uma limitação de altura no componente CSS. Uma possível solução foi avaliada experimentalmente em três cenários, sem modificar o código-fonte da aplicação.

[Consultar investigação técnica e evidências do QASD-8](docs/defects/QASD-8.md).

[Consultar relatório de encerramento do ciclo de login](docs/relatorio-ciclo-login.md).

A aprovação funcional não representa ausência de defeitos. Os resultados estão limitados ao escopo e às condições de execução documentadas.

## 4. Como executar

### Pré-requisitos

- Node.js e npm
- Google Chrome
- Git

### Preparação

Clone o repositório:

```bash
git clone https://github.com/leesaeny/saucedemo-qa-portfolio.git
```

Acesse o diretório:

```bash
cd saucedemo-qa-portfolio
```

Instale as dependências:

```bash
npm ci
```

Abra o Cypress:

```bash
npx cypress open
```

Selecione **E2E Testing** e o navegador desejado.

**Nota:** o ambiente de automação está configurado, mas ainda não existem testes automatizados publicados. As instruções de execução da suíte serão acrescentadas conforme os casos forem implementados.

## 5. Documentação e rastreabilidade

| Documento | Conteúdo |
|---|---|
| [Análise funcional](docs/analise-funcional.md) | Reconhecimento dos principais fluxos da aplicação |
| [Plano de testes](docs/plano-de-testes.md) | Estratégia, escopo, riscos e prioridades |
| [Requisitos de login](docs/requisitos-login.md) | Requisitos, critérios de aceitação e matriz de rastreabilidade |
| [Relatório do ciclo de login](docs/relatorio-ciclo-login.md) | Resultados, cobertura, métricas e limitações |
| [QASD-8](docs/defects/QASD-8.md) | Relatório de defeito, investigação técnica e evidências |

**Projeto no Jira:** [QASD | SauceDemo QA Portfolio](https://leesaeny.atlassian.net/browse/QASD-1).

O Jira e o Zephyr Scale são utilizados para o gerenciamento das atividades, dos casos e das execuções. Os principais entregáveis estão disponíveis neste repositório para consulta pública.

**Projeto no Jira:** [QASD | SauceDemo QA Portfolio](https://leesaeny.atlassian.net/browse/QASD-1)

Os documentos publicados neste repositório serão vinculados aos respectivos registros do Jira, permitindo acompanhar o planejamento, a execução e os resultados do trabalho.